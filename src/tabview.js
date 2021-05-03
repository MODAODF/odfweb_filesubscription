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
			initList() {
				return '<div>已建立的外部分享連結：<ul></ul></div>'
			},

			$li(share, subscr) {
				return OCA.FileSubscription.Templates['sidebar-tabview']({ share, subscr })
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
				'click #mailBtn': '_onSendMailEvent',
				'change input[name=subscribable]': '_onSubscrSetting',
			})
		},

		_shareLinks: null,
		_renderInitData(obj) {

			const $wrapper = $('.linksWrapper')
			const templates = this._sectionTemplates

			if (!obj || !obj.data) $wrapper.html(templates.getLinkFail())
			else if (obj.data.length < 1) $wrapper.html(templates.noLink())
			else {
				$wrapper.html(templates.initList())
				this._shareLinks = obj.data.sharing
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
					const li = templates.$li(row.sharing, row.subscription)
					$wrapper.find('ul').append(li)
				}
			}
			$wrapper.show()
		},

		/**
		 * 初始化資料：分享連結+訂閱資訊
		 */
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

		_onSendMailEvent(e) {
			const i = $(e.target).closest('li').attr('index')
			const shareLink = this._shareLinks[i].url
			$.ajax({
				url: OC.generateUrl('/apps/filesubscription/mail'),
				type: 'POST',
				data: {
					shareLink,
				},
			}).done(function(resp) {
				console.debug('_onSendMailEvent ajax Done')
			}).fail(function(e) {
				console.debug('_onSendMailEvent ajax fail')
			}).always(function() {
				console.debug('_onSendMailEvent ajax always')
			})
		},

		// 設定變更
		_onSubscrSetting(e) {

			const shareId = $(e.target).closest('li').attr('share-id')
			const $thisLi = $(`li[share-id=${shareId}]`)

			const msgEl = $thisLi.find('.msg')
			const msgResponse = { status: '', data: { message: '' } }

			$.ajax({
				context: this,
				url: OC.generateUrl('/apps/filesubscription/update/' + shareId),
				type: 'POST',
				data: {
					shareId,
					setVal: {
						enabled: $(`#subscribable${shareId}`).is(':checked'),
					}
				},
				beforeSend() {
					$thisLi.children('input, button').attr('disabled', 'disabled')
					OC.msg.startAction(msgEl, '設定中...')
				}
			}).done(function() {
				msgResponse.data.message = '設定完成'
				msgResponse.status = 'success'
			}).fail(function(e) {
				msgResponse.data.message = '設定失敗'
				console.debug('filesubscription Setting fail', e)
			}).always(function() {
				OC.msg.finishedAction(msgEl, msgResponse)
				$thisLi.children('input, button').removeAttr('disabled')
			})

		},

	})
	OCA.FileSubscription.TabView = TabView
})()
