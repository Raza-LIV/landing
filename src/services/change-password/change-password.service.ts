import { HttpFactoryService, } from '../../shared/services/http-factory.service'
import type { HttpService, } from '../../shared/services/http.service'
import type { Message, } from '../../shared/types/types'
import type { ChangePasswordBody, } from './change-password.types'

class ChangePasswordService {
	constructor(private readonly httpService: HttpService,) {
		this.httpService = httpService
	}

	private readonly module = 'change-password'

	public async changePassword(body: ChangePasswordBody,): Promise<Message> {
		return this.httpService.post(`${this.module}/`, body,)
	}
}

export const changePasswordService = new ChangePasswordService(new HttpFactoryService().createHttpService(),)
