// import { generateOcsUrl } from '@nextcloud/router'
import '../css/sharedfile.scss'

const SharedFile = {

	sharingToken: $('#sharingToken').val(),

	init() {
		// 取得此分享連結是否啟用訂閱
		$.ajax({
			context: this,
			url: OC.generateUrl('/apps/filesubscription/subscribe/state/' + this.sharingToken),
			type: 'GET',
		}).done(function(res) {
			if (res) this.renderHeader()
		}).fail(function(e) {
			console.debug('filesubscription _isSubscribable fail()', e)
		})
	},

	renderHeader() {
		const headerRight = document.querySelector('#header .header-right')
		if (!document.getElementById('filesubscription-header')) {
			const newHeader = document.createElement('div')
			newHeader.id = 'filesubscription-header'
			headerRight.insertBefore(newHeader, headerRight.firstChild)

			// header content
			const content = OCA.FileSubscription.Templates['sharedfile-header']({ placeholder: 'Enter your email' })
			$('#filesubscription-header').append(content)

			$('#subscription-icon').on('click', this._onOpenEvent.bind(this))
			$('form#subscription-mail').on('submit', this._onConfirmEvent.bind(this))

		}
	},

	_onOpenEvent(e) {
		e.stopPropagation()
		$('#subscription-content').toggle()
	},

	_onConfirmEvent(e) {
		e.stopPropagation()
		e.preventDefault()

		const msgEl = $('#subscription-content .msg')
		const msgResponse = {
			status: '',
			data: { message: '' }
		}

		const token = this.sharingToken
		const mailAddr = $('form#subscription-mail input[name="email"]').val()

		$.ajax({
			url: OC.generateUrl('/apps/filesubscription/subscribe'),
			type: 'POST',
			data: { token, mailAddr },
			beforeSend() {
				$('form#subscription-mail input').attr('disabled', 'disabled')
				OC.msg.startAction(msgEl, '處理中...')
			}
		}).done(function() {
			msgResponse.data.message = '訂閱成功'
			msgResponse.status = 'success'
			$('form#subscription-mail input[name="email"]').val('')
		}).fail(function(e) {
			msgResponse.data.message = '無法訂閱'
			console.debug('filesubscription _onConfirmEvent fail()', e)

		}).always(function(resp) {
			OC.msg.finishedAction(msgEl, msgResponse)
			$('form#subscription-mail input').removeAttr('disabled')
		})
	},

}

if (!OCA.FileSubscription) OCA.FileSubscription = {}
OCA.FileSubscription.Templates = {}
OCA.FileSubscription.SharedFile = SharedFile

window.addEventListener('DOMContentLoaded', function() {
	const isPublic = document.getElementById('isPublic') && document.getElementById('isPublic').value === '1'
	if (isPublic) OCA.FileSubscription.SharedFile.init()
})
