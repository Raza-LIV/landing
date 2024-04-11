import {
	HttpFactoryService,
} from '../../shared/services/http-factory.service'
import type {
	HttpService,
} from '../../shared/services/http.service'

class EmailConfirmationService {
	constructor(private readonly httpService: HttpService,) {
		this.httpService = httpService
	}

	private readonly module = 'email-confirmation'

	public async activateEmail(email: string,): Promise<number> {
		return this.httpService.post(`${this.module}/activate-account`, {
			email,
		},)
	}
}

export const emailConfirmationService = new EmailConfirmationService(new HttpFactoryService().createHttpService(),)
