// import { generateOcsUrl } from '@nextcloud/router'
import '../css/sharedfile.scss'

const SharedFile = {
	appId: 'filesubscription',
	sharingToken: $('#sharingToken').val(),
	init() {
		const headerRight = document.querySelector('#header .header-right')
		if (!document.getElementById('filesubscription-header')) {
			const newHeader = document.createElement('div')
			newHeader.id = 'filesubscription-header'
			headerRight.insertBefore(newHeader, headerRight.firstChild)

			// header content
			const content = OCA.FileSubscription.Templates['sharedfile-header']({
				title: t(this.appId, 'Subscription'),
				description: t(this.appId, 'Subscribe this file to get the new version of the file and modification instructions or track file in the NDC ODF Application Tools.'),
				placeholder: t(this.appId, 'Enter your email'),
				unsubscribe: t(this.appId, 'Unsubscribe'),
				tokendescription: t(this.appId, 'File token for NDC ODF Application Tools')
			})
			$('#filesubscription-header').append(content)
			$('#subscription-icon').on('click', this._onOpenEvent.bind(this))
			$('form#subscription-mail').on('submit', this._onConfirmEvent.bind(this))
			$('a#unsubscr').on('click', this._onUnsubscrEvent.bind(this))
			$('#subscription-api').on('click', 'input#apicode, button', this._selectCopy.bind(this))
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
		const msgResponse = { status: '', data: { message: '' } }
		const token = this.sharingToken
		const mailAddr = $('form#subscription-mail input[name="email"]').val()
		if (mailAddr === '') {
			msgResponse.data.message = t(this.appId, 'Please enter Email')
			OC.msg.finishedAction(msgEl, msgResponse)
			return
		}
		$.ajax({
			context: this,
			url: OC.generateUrl(`/apps/${this.appId}/subscribe`),
			type: 'POST',
			data: { token, mailAddr },
			beforeSend() {
				this._rmApiCode()
				$('form#subscription-mail input').attr('disabled', 'disabled')
				OC.msg.startAction(msgEl, t(this.appId, 'Setting...'))
			}
		}).done(function() {
			msgResponse.data.message = t(this.appId, 'Subscribed')
			msgResponse.status = 'success'
			$('form#subscription-mail input[name="email"]').val('')
			this._getApiCode()
		}).fail(function(resp) {
			msgResponse.data.message = t(this.appId, 'Unable to subscribe')
			if (typeof resp.responseJSON.message != 'undefined') {
				msgResponse.data.message += ': '
				msgResponse.data.message += resp.responseJSON.message
			}
			this._rmApiCode()
		}).always(function(resp) {
			OC.msg.finishedAction(msgEl, msgResponse)
			$('form#subscription-mail input').removeAttr('disabled')
		})
	},

	_onUnsubscrEvent(e) {
		e.stopPropagation()
		e.preventDefault()

		const msgEl = $('#subscription-content .msg')
		const msgResponse = { status: '', data: { message: '' } }
		const token = this.sharingToken
		const mailAddr = $('form#subscription-mail input[name="email"]').val()
		if (mailAddr === '') {
			msgResponse.data.message = t(this.appId, 'Please enter Email')
			OC.msg.finishedAction(msgEl, msgResponse)
			return
		}
		this._rmApiCode()
		$.ajax({
			context: this,
			url: OC.generateUrl(`/apps/${this.appId}/subscribe`),
			type: 'DELETE',
			data: { token, mailAddr },
			beforeSend() {
				$('form#subscription-mail input').attr('disabled', 'disabled')
				OC.msg.startAction(msgEl, t(this.appId, 'Setting...'))
			}
		}).done(function() {
			msgResponse.data.message = t(this.appId, 'Unsubscribed')
			msgResponse.status = 'success'
			$('form#subscription-mail input[name="email"]').val('')
		}).fail(function(resp) {
			msgResponse.data.message = t(this.appId, 'Unable to unsubscribe')
			if (typeof resp.responseJSON.message != 'undefined') {
				msgResponse.data.message += ': '
				msgResponse.data.message += resp.responseJSON.message
			}
		}).always(function(resp) {
			OC.msg.finishedAction(msgEl, msgResponse)
			$('form#subscription-mail input').removeAttr('disabled')
		})
	},

	_selectCopy(e) {
		const apicode = document.getElementById('apicode')
		if (apicode) {
			apicode.select()
			if (e.target.tagName === 'BUTTON') {
				document.execCommand('copy')
			}
		}
	},

	_rmApiCode() {
		$('#apicode').val('')
		$('#subscription-api').parent('div').hide()
	},

	_getApiCode() {
		$.ajax({
			url: OC.generateUrl(`/apps/${this.appId}/apicode/${this.sharingToken}`),
			type: 'GET',
		}).done(function(resp) {
			if (resp) {
				$('#apicode').val(resp)
				$('#subscription-api').parent('div').show()
			}
		}).fail(function(resp) {
			// console.log(resp)
		})
	}
}

if (!OCA.FileSubscription) OCA.FileSubscription = {}
OCA.FileSubscription.Templates = {}
OCA.FileSubscription.SharedFile = SharedFile

window.addEventListener('DOMContentLoaded', function() {
	const isPublic = document.getElementById('isPublic') && document.getElementById('isPublic').value === '1'
	if (isPublic) OCA.FileSubscription.SharedFile.init()
})
