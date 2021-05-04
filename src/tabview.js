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
			  <div class="linksWrapper hidden"></div>`
		},

		_sectionTemplates: {
			getLinkFail() {
				return '<div>無法取得分享連結</div>'
			},
			noLink() {
				return '<div>沒有分享連結</div>'
			},
			$ul(share, subscr) {
				const params = {
					shareId: share.id,
					labelName: share.label,
					isEnabled: subscr.enabled, // int
					entryAvatarCssClass: subscr.enabled ? 'entryAvatarOpen' : 'entryAvatarClose',
					entryEnableString: subscr.enabled ? '開放' : '關閉',
					subscriberNum: 0,
					message: subscr.message
				}

				// TODO, 後端給個數字
				if (subscr.emails) {
					params['subscriberNum'] = JSON.parse(subscr.emails).length
				}

				// TODO, 後端給格式化後的日期格式
				if (subscr.time) {
					params['updateAt'] = subscr.time // '2020/00/00 00:00'
				}

				return OCA.FileSubscription.Templates['sidebar-tabview'](params)
			},
		},

		/**
		 * Renders this details view
		 */
		render() {
			this.$el.html(this.template())
			this._getInitData()

			// delegate all btn Events
			this.delegateEvents({
				'click button.entryEdit': '_onEntryEdit',
				'click button.mailBtn': '_onSendMailEvent',
				'change input[name=subscribable]': '_onSubscrSetting',
			})
		},

		_renderInitData(obj) {

			const $wrapper = $('.linksWrapper')
			const templates = this._sectionTemplates

			if (!obj || !obj.data) $wrapper.html(templates.getLinkFail())
			else if (obj.data.length < 1) $wrapper.html(templates.noLink())
			else {
				for (const idx in obj.data) {
					const row = obj.data[idx]
					if (!row.subscription) {
						// 尚未寫入 oc_subscription 的 sharelink 預設值
						row.subscription = {
							id: null,
							share_id: row.sharing.id,
							emails: null,
							enabled: 1,
							message: '',
							time: null,
						}
					}
					const ul = templates.$ul(row.sharing, row.subscription)
					$wrapper.append(ul)
				}
			}
			$wrapper.show()
		},

		// 初始化資料：分享連結+訂閱資訊
		_getInitData() {
			const file = this.getFileInfo()
			const path = `${file.attributes.path}/${file.attributes.name}`
			const fullPath = path.replace('//', '/')
			$.ajax({
				context: this,
				url: OC.generateUrl(`/apps/filesubscription?format=json&path=${encodeURIComponent(fullPath)}`),
				type: 'GET',
			}).done(function(resp) {
				this._renderInitData({ data: resp })
			}).fail(function(e) {
				console.debug('Get InitData fail', e)
				this._renderInitData({ data: null })
			}).always(function(resp) {
				$(this.$el).find('.loading').hide()
			})
		},

		// 顯示訂閱編輯欄位
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
			const $formElements = $(`.item[share-id=${shareId}] ul `).find('button, input, textarea')

			const $msg = $(e.target).closest('li').find('.msg')
			const msgResponse = { status: '', data: { message: '' } }

			$.ajax({
				url: OC.generateUrl('/apps/filesubscription/mail'),
				type: 'POST',
				data: { shareId },
				beforeSend() {
					$formElements.attr('disabled', 'disabled')
					OC.msg.startAction($msg, '傳送中...')
				}
			}).done(function(resp) {
				msgResponse.status = 'success'
				msgResponse.data.message = resp.data.message
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
			const $formElements = $(`.item[share-id=${shareId}] ul `).find('button, input, textarea')

			const $msg = $(e.target).closest('li').find('.msg')
			const msgResponse = { status: '', data: { message: '' } }

			$.ajax({
				url: OC.generateUrl('/apps/filesubscription/update/' + shareId),
				type: 'POST',
				data: {
					shareId,
					setVal: {
						enabled: $(`#subscribable${shareId}`).is(':checked'),
					}
				},
				beforeSend() {
					$formElements.attr('disabled', 'disabled')
					OC.msg.startAction($msg, '設定中...')
				}
			}).done(function() {
				msgResponse.data.message = '設定完成'
				msgResponse.status = 'success'
			}).fail(function(e) {
				msgResponse.data.message = '設定失敗'
				console.debug('filesubscription Setting fail', e)
			}).always(function() {
				OC.msg.finishedAction($msg, msgResponse)
				$formElements.removeAttr('disabled')
			})
		},

	})
	OCA.FileSubscription.TabView = TabView
})()
