import {
	HttpFactoryService,
} from '../../shared/services/http-factory.service'

import type {
	HttpService,
} from '../../shared/services/http.service'
import type { Message, } from '../../shared/types/types'
import type { User, } from './user.types'

class UserService {
	constructor(private readonly httpService: HttpService,) {
		this.httpService = httpService
	}

	private readonly module = 'user'

	public async deleteAllUsers(): Promise<number> {
		return this.httpService.delete(`${this.module}/users`,)
	}

	public async updateProfile(body: FormData,): Promise<Message> {
		return this.httpService.patch(`${this.module}/profile`, body,)
	}

	public async getMe(): Promise<User> {
		return this.httpService.get(`${this.module}/me`,)
	}
}

export const userService = new UserService(new HttpFactoryService().createHttpService(),)
