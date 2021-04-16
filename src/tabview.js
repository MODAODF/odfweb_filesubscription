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

		_templates: {
			getLinkFail() {
				return '<div>無法取得分享連結</div>'
			},
			noLink() {
				return '<div>沒有分享連結</div>'
			},
			initList() {
				return '<div>已建立的外部分享連結：<ul></ul></div>'
			},

			$li(i, item) {
				return `<li file-id=${item.id} index=${i}>
					<h5><b>分享連結(${item.label})</b></h5>
					<span>${item.url}</span>
					<button id="mailBtn" type="button">${t(this.appId, 'Send mail')}</button>
				</li><hr>`
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
			})
		},

		_shareLinks: null,
		_renderShareLinksResult(resp) {

			const $wrapper = $('.linksWrapper')
			const templates = this._templates

			if (!resp || !resp.ocs.data) $wrapper.html(templates.getLinkFail())
			else if (resp.ocs.data.length < 1) $wrapper.html(templates.noLink())
			else {
				$wrapper.html(templates.initList())
				this._shareLinks = resp.ocs.data
				this._shareLinks.forEach((item, i) => {

					// 是分享連結
					if (item.share_type === OC.Share.SHARE_TYPE_LINK) {
						const li = templates.$li(i, item)
						$wrapper.find('ul').append(li)
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
			const self = this
			$.ajax({
				url,
				type: 'GET',
			}).done(function() {
				// $(this.$el).find('ul').show()
			}).fail(function(e) {
				console.debug('filesubscription _getShareLinks fail', e)
			}).always(function(resp) {
				$(self.$el).find('.loading').hide()
				self._renderShareLinksResult(resp)
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

	})
	OCA.FileSubscription.TabView = TabView
})()
