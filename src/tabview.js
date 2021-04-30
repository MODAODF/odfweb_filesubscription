import { generateOcsUrl } from '@nextcloud/router'
import '../css/main.scss'

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

			$li(item) {
				return OCA.FileSubscription.Templates['sidebar-tabview']({ item })
			},

		},

		/**
		 * Renders this details view
		 *
		 * @abstract
		 */
		render() {
			this.$el.html(this.template())
			this._getShareLinks() // 取得已知分享連結

			// delegate all btn Events
			this.delegateEvents({
				'click #mailBtn': '_onSendMailEvent',
				'change input[name=subscribable]': '_onToggleSubscribable',
			})
		},

		_shareLinks: null,
		_renderShareLinksResult(resp) {

			const $wrapper = $('.linksWrapper')
			const templates = this._sectionTemplates

			if (!resp || !resp.ocs.data) $wrapper.html(templates.getLinkFail())
			else if (resp.ocs.data.length < 1) $wrapper.html(templates.noLink())
			else {
				$wrapper.html(templates.initList())
				this._shareLinks = resp.ocs.data
				this._shareLinks.forEach((item, idx) => {

					// 是分享連結
					if (item.share_type === OC.Share.SHARE_TYPE_LINK) {
						const li = templates.$li(item)
						$wrapper.find('ul').append(li)
						this._getSubscription(item.id)
					}

				})
			}
			$wrapper.show()
		},

		/**
		 * 取得 Share links 資料
		 * @param {OCA.Files.FileInfoModel} fileInfo file info model
		 */
		_getShareLinks() {
			const file = this.getFileInfo()
			const path = `${file.attributes.path}/${file.attributes.name}`
			const fullPath = path.replace('//', '/')

			const url = generateOcsUrl(`apps/files_sharing/api/v1/shares?format=json&path=${encodeURIComponent(fullPath)}`, 2)
			$.ajax({
				context: this,
				url,
				type: 'GET',
			}).done(function() {
				// $(this.$el).find('ul').show()
			}).fail(function(e) {
				console.debug('GetShareLinks fail', e)
			}).always(function(resp) {
				$(this.$el).find('.loading').hide()
				this._renderShareLinksResult(resp)
			})
		},

		_getSubscription(shareId) {
			$.ajax({
				url: OC.generateUrl('/apps/filesubscription/subscribe/' + shareId),
				type: 'GET',
			}).done(function(resp) {
				$(`li[share-id=${shareId}]`).find('input').attr('checked', Boolean(resp.enabled))
			}).fail(function(e) {
				console.debug('Get Subscription fail', e)
				// TODO: 撈不到資料 要預設啟用，但這樣處理怪怪的
				$(`li[share-id=${shareId}]`).find('input').attr('checked', true)
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

		// 設定單一連結是否啟用訂閱
		_onToggleSubscribable(e) {
			const shareId = $(e.target).closest('li').attr('share-id')
			const setVal = $(e.target).is(':checked')

			// const msgEl = $(e.target).closest('.resultMsg')
			// const msgResponse = {
			// 	status: '',
			// 	data: { message: '' }
			// }

			$.ajax({
				context: this,
				url: OC.generateUrl('/apps/filesubscription/subscribe/state'),
				type: 'POST',
				data: { shareId, setVal },
				// beforeSend() {
				// 	$(e.target).children('input, button').attr('disabled', 'disabled')
				// 	OC.msg.startAction(msgEl, '設定中...')
				// }
			}).done(function() {
				// TODO msgResponse // $('.resultMsg')
			}).fail(function(e) {
				console.debug('filesubscription _onToggleSubscribable fail', e)
			})

		},

	})
	OCA.FileSubscription.TabView = TabView
})()
