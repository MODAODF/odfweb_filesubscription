// import { generateOcsUrl } from '@nextcloud/router'
import '../css/tabview.scss'

(function() {
	const TabView = OCA.Files.DetailTabView.extend({

		id: 'fileSubscriptionTabView',
		className: 'tab fileSubscriptionTabView',
		appId: 'filesubscription',

		getLabel() {
			return t(this.appId, 'subscription')
		},

		getIcon() {
			return 'icon-mail'
		},

		template() {
			return `<div class="loading icon-loading-small"></div>
			  <div class="linksWrapper hidden"></div>
			  <button class="reloadLinks hidden">重新載入</button>`
		},

		_sectionTemplates: {
			getLinkFail() {
				return '<div>無法取得分享連結</div>'
			},
			noLink() {
				return '<div>沒有分享連結</div>'
			},
			$item(id) {
				return `<div class="item" share-id=${id}></div>`
			},
			$itemContent_vaild(subscr, share) {
				const params = {
					shareId: share.id,
					labelName: share.label,
					isEnabled: subscr.enabled, // int
					entryAvatarCssClass: subscr.enabled ? 'entryAvatarOpen' : 'entryAvatarClose',
					entryEnableString: subscr.enabled ? '開放' : '關閉',
					message: subscr.message,
					subscriberNum: subscr.subscriberNum,
					buttonDisable: subscr.subscriberNum > 0 ? '' : 'disabled',
				}

				if (subscr.last_message_time) {
					params['lastMessageTime'] = subscr.last_message_time // Y-m-d H:i
				}
				if (subscr.last_email_time) {
					params['lastEmailTime'] = subscr.last_email_time // Y-m-d H:i
				}
				if (subscr.last_cancel_time) {
					params['lastCancelTime'] = subscr.last_cancel_time // Y-m-d H:i
				}
				return OCA.FileSubscription.Templates['sidebar-vaildItem'](params)
			},
			$itemContent_invaild(subscr, hasLog) {
				const params = {
					shareId: subscr.share_id,
					labelName: subscr.share_label,
					hasLog,
				}
				return OCA.FileSubscription.Templates['sidebar-invaildItem'](params)
			}
		},

		/**
		 * Renders this details view
		 */
		render() {
			this.$el.html(this.template())
			this._getInitData()

			// delegate all btn Events
			this.delegateEvents({
				'click button.reloadLinks': 'render',
				'click button.entryEdit': '_onEntryEdit',
				'change input[name=subscribable]': '_onSubscrSetting',
				'click button.setDescr': '_onSubscrSetting',
				'click button.sendSubscrMail': '_onSendMailEvent',
				'click button.cancelSubscr': '_onCancelEvent',
				'click button.downloadLog': '_onLogDownloadEvent',
				'click button.deleteLog': '_onLogDeletelEvent',
			})
		},

		// 初始化資料：分享連結+訂閱資訊
		_getInitData() {
			const file = this.getFileInfo()
			const fileId = file.attributes.id
			const path = `${file.attributes.path}/${file.attributes.name}`
			$.ajax({
				context: this,
				url: OC.generateUrl(`/apps/${this.appId}/`),
				type: 'POST',
				data: {
					fileId,
					path: JSON.stringify(path.replace('//', '/'))
				},
				beforeSend() {
					$('.linksWrapper').hide()
					$('.reloadLinks').hide()
					$(this.$el).find('.loading').show()
				}
			}).done(function(resp) {
				this._renderInitData({ data: resp })
			}).fail(function(e) {
				console.debug('Get InitData fail', e)
				this._renderInitData({ data: null })
			}).always(function(resp) {
				$(this.$el).find('.loading').hide()
			})
		},

		_renderInitData(obj) {
			const $wrapper = $('.linksWrapper')
			if ($wrapper.length < 1) return
			$wrapper.children().remove()

			const templates = this._sectionTemplates
			if (!obj || !obj.data) $wrapper.html(templates.getLinkFail())
			else if (obj.data.length < 1) $wrapper.html(templates.noLink())
			else {
				for (const idx in obj.data) {
					const row = obj.data[idx]

					const itemWrapper = templates.$item(row.subscription.share_id)
					const selector = `.item[share-id=${row.subscription.share_id}]`
					const itemContent = (row.sharing) ? templates.$itemContent_vaild(row.subscription, row.sharing) : templates.$itemContent_invaild(row.subscription, row.hasSubscrLog)

					// 避免重複 render
					if ($(selector).length === 0) {
						$wrapper.append(itemWrapper)
					}
					if ($(selector).children().length === 0) {
						$(selector).append(itemContent)
						$(selector).find('button.entryEdit').click()
					}

				}
			}
			$wrapper.show()
			$('.reloadLinks').show()
		},

		// Rerender 訂閱資訊
		_rerenderItemData(resp) {
			const $item = $(`div.item[share-id=${resp.share_id}]`)
			const share = {
				id: resp.share_id,
				label: $item.find('.itemEntry h5 span').text()
			}
			const subscr = {
				enabled: resp.enabled,
				message: resp.message,
				subscriberNum: resp.subscriberNum,
				last_message_time: resp.last_message_time,
				last_email_time: resp.last_email_time,
				last_cancel_time: resp.last_cancel_time,
			}
			$item.html(this._sectionTemplates.$itemContent_vaild(subscr, share))
		},

		// 顯示訂閱設定內容
		_onEntryEdit(e) {
			const shareId = $(e.target).closest('.item').attr('share-id')
			$(`.item[share-id=${shareId}] ul`).toggle(500)
			$(`.item[share-id=${shareId}] .entryEdit`).toggleClass('rotate')

			$(`.item:not([share-id=${shareId}]) ul`).hide(500)
			$(`.item:not([share-id=${shareId}]) .entryEdit`).removeClass('rotate')
		},

		// 寄訂閱信件
		_onSendMailEvent(e) {
			const shareId = $(e.target).closest('.item').attr('share-id')
			const $formElements = $('.item[share-id]').find('button, input, textarea')

			const $msg = $(e.target).closest('li').find('.msg')
			const msgResponse = { status: '', data: { message: '' } }

			$.ajax({
				url: OC.generateUrl('/apps/filesubscription/mail/update'),
				type: 'POST',
				data: { shareId },
				beforeSend() {
					$formElements.attr('disabled', 'disabled')
					OC.msg.startAction($msg, '傳送中...')
				}
			}).done(function(resp) {
				msgResponse.status = 'success'
				msgResponse.data.message = resp.data.message
				const $timeDiv = $(`.item[share-id=${shareId}]`).find('.sendSubscrMail ~ .lasttime')
				if ($timeDiv.find('em').length > 0) {
					$timeDiv.find('em > span').text(resp.data.lastEmailTime)
				} else {
					$timeDiv.append(`<em>上次傳送於 <span>${resp.data.lastEmailTime}</span></em>`)
				}
			}).fail(function(e) {
				msgResponse.data.message = '郵件寄送失敗'
				console.debug('SendMail ajax fail', e)
			}).always(function() {
				OC.msg.finishedAction($msg, msgResponse)
				$formElements.removeAttr('disabled')
			})
		},

		// 設定變更
		_onSubscrSetting(e) {
			const shareId = $(e.target).closest('.item').attr('share-id')
			const setVal = {
				enabled: $(`#subscribable${shareId}`).is(':checked'),
				message: $(`#versionDescr${shareId}`).val(),
				updateMessageTime: $(e.target).hasClass('setDescr'),
			}

			const $formElements = $('.item[share-id]').find('button, input, textarea')
			const $msg = $(e.target).closest('li').find('.msg')
			const msgResponse = { status: '', data: { message: '' } }

			$.ajax({
				context: this,
				url: OC.generateUrl('/apps/filesubscription/update/' + shareId),
				type: 'POST',
				data: { shareId, setVal },
				beforeSend() {
					$formElements.attr('disabled', 'disabled')
					OC.msg.startAction($msg, '設定中...')
				}
			}).done(function(resp) {
				this._rerenderItemData(resp)
			}).fail(function(e) {
				msgResponse.data.message = '設定失敗'
				console.debug('filesubscription Setting fail', e)
			}).always(function() {
				OC.msg.finishedAction($msg, msgResponse)
				$formElements.removeAttr('disabled')
			})
		},

		// 取消訂閱
		_onCancelEvent(e) {
			const $formElements = $('.item[share-id]').find('button, input, textarea')
			$formElements.attr('disabled', 'disabled')
			const self = this
			const confirmed = function(confirm) {
				if (!confirm) {
					$formElements.removeAttr('disabled')
					return
				}

				const $msg = $(e.target).closest('li').find('.msg')
				const msgResponse = { status: '', data: { message: '' } }

				$.ajax({
					context: self,
					url: OC.generateUrl('/apps/filesubscription/cancel'),
					type: 'POST',
					data: {
						shareId: $(e.target).closest('.item').attr('share-id'),
					},
					beforeSend() {
						OC.msg.startAction($msg, '取消中...')
					}
				}).done(function(resp) {
					self._rerenderItemData(resp)
				}).fail(function(resp) {
					msgResponse.data.message = '無法取消訂閱'
					if (typeof resp.responseJSON.message != 'undefined') {
						msgResponse.data.message += ': '
						msgResponse.data.message += resp.responseJSON.message
					}
					console.debug('Cancel ajax fail', resp)
				}).always(function() {
					OC.msg.finishedAction($msg, msgResponse)
					$formElements.removeAttr('disabled')
				})
			}

			OC.dialogs.confirm('系統將發送取消通知給訂閱者，並移除所有訂閱者', '確定清除訂閱？', confirmed)
		},

		// 已失效訂閱, 下載訂閱紀錄
		_onLogDownloadEvent(e) {
			const $formElements = $('.item[share-id]').find('button, input, textarea')
			$formElements.attr('disabled', 'disabled')

			const $msg = $(e.target).closest('li').find('.msg')
			const msgResponse = { status: '', data: { message: '' } }

			const shareId = $(e.target).closest('.item').attr('share-id')
			$.ajax({
				context: this,
				url: OC.generateUrl(`/apps/${this.appId}/log/${shareId}`),
				type: 'GET',
				beforeSend() {
					OC.msg.startAction($msg, '讀取紀錄...')
				}
			}).done(function(resp) {
				if (typeof resp.data.path != 'undefined') {
					window.location.href = resp.data.path
				}
				msgResponse.status = 'success'
				msgResponse.data.message = '開始下載'
			}).fail(function(resp) {
				msgResponse.data.message = '無法讀取紀錄'
				if (typeof resp.responseJSON.message != 'undefined') {
					msgResponse.data.message = resp.responseJSON.message
				}
			}).always(function(resp) {
				OC.msg.finishedAction($msg, msgResponse)
				$formElements.removeAttr('disabled')
			})
		},

		// 已失效訂閱, 刪除訂閱紀錄
		_onLogDeletelEvent(e) {
			const $formElements = $('.item[share-id]').find('button, input, textarea')
			$formElements.attr('disabled', 'disabled')
			const self = this
			const confirmed = function(confirm) {
				if (!confirm) {
					$formElements.removeAttr('disabled')
					return
				}
				const shareId = $(e.target).closest('.item').attr('share-id')
				$.ajax({
					context: self,
					url: OC.generateUrl(`/apps/${self.appId}/log/${shareId}`),
					type: 'DELETE',
				}).done(function(resp) {
					$(`.item[share-id = ${shareId}]`).remove()
				}).always(function(resp) {
					$formElements.removeAttr('disabled')
					self.render()
				})
			}
			OC.dialogs.confirm('確定刪除訂閱紀錄？', '確認', confirmed)
		},

	})
	OCA.FileSubscription.TabView = TabView
})()
