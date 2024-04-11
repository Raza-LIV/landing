import { HttpFactoryService, } from '../../shared/services/http-factory.service'
import type { HttpService, } from '../../shared/services/http.service'
import type { Message, } from '../../shared/types/types'
import type { CheckForgotPasswordRes, ResetPasswordValues, } from './forgot-password.types'

class ForgotPasswordService {
	constructor(private readonly httpService: HttpService,) {
		this.httpService = httpService
	}

	private readonly module = 'forgot-password'

	public async sendInstructions(email: string,): Promise<Message> {
		return this.httpService.post(`${this.module}/send-instructions`, {
			email,
		},)
	}

	public async checkForgotPasswordId(id: string,): Promise<CheckForgotPasswordRes> {
		return this.httpService.get(`${this.module}/check/${id}`,)
	}

	public async resetPassword(body: ResetPasswordValues,): Promise<Message> {
		return this.httpService.post(`${this.module}/reset-password`, body,)
	}
}

export const forgotPasswordService = new ForgotPasswordService(new HttpFactoryService().createHttpService(),)
