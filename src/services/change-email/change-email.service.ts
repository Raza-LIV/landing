import { HttpFactoryService, } from '../../shared/services/http-factory.service'
import type { HttpService, } from '../../shared/services/http.service'
import type { Message, } from '../../shared/types/types'
import type { ChangeEmailBody, ChangeEmailConfirmBody, } from './change-email.types'

class ChangeEmailService {
	constructor(private readonly httpService: HttpService,) {
		this.httpService = httpService
	}

	private readonly module = 'change-email'

	public async createChangeEmailSession(body: ChangeEmailBody,): Promise<Message> {
		return this.httpService.post(`${this.module}/create-change-email-session`, body,)
	}

	public async confirm(body: ChangeEmailConfirmBody,): Promise<Message> {
		return this.httpService.post(`${this.module}/confirm`, body,)
	}
}

export const changeEmailService = new ChangeEmailService(new HttpFactoryService().createHttpService(),)
