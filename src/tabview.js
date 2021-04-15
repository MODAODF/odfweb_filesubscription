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
			return '<div>tab content：</div>'
		},

		render() {
			this.$el.html(this.template())
			this._renderSendMailBtn(this.$el)

			// delegate all btn Events
			this.delegateEvents({
				'click #sendMail': '_onSendMailEvent',
			})
		},

		/**
		 * 取的 Share links
		 * @param {OCA.Files.FileInfoModel} fileInfo file info model
		 */
		_getShareLinks() {

			const fullPath = this._fileFullPath()
			const url = generateOcsUrl(`apps/files_sharing/api/v1/shares?format=json&path=${encodeURIComponent(fullPath)}`, 2)

			$.ajax({
				url,
				type: 'GET',
			}).done(function(resp) {
				console.debug('_getShareLinks ajax Done')
			}).fail(function(e) {
				console.debug('_getShareLinks ajax fail')
			}).always(function() {
				console.debug('_getShareLinks ajax always')
			})
		},

		_renderSendMailBtn($el) {
			const txt = t(this.appId, 'Send mail')
			const btn = '<button id="mailBtn" type="button">' + txt + '</button>'
			$el.append(btn)
		},

		_onSendMailEvent() {
			$.ajax({
				url: OC.generateUrl('/apps/filesubscription/mail'),
				type: 'POST',
				data: {
					shareLink: OC.generateUrl('s/1231321321313'),
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
