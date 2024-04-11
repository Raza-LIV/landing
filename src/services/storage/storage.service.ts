'use client'

import 'client-only'

import type { IStorageInstance, STORAGE_KEYS, } from './storage.types'

class StorageService {
	constructor(private readonly storageInstance: IStorageInstance,) {
		this.storageInstance = storageInstance
	}

	public async save(data: string, key: STORAGE_KEYS,): Promise<null> {
		return new Promise((resolve, reject,) => {
			try {
				this.storageInstance.setItem(data, key,)

				resolve(null,)
			} catch (error) {
				reject(this.handleError('storing data', error,),)
			}
		},)
	}

	public async delete(key: STORAGE_KEYS,): Promise<null> {
		return new Promise((resolve, reject,) => {
			try {
				this.storageInstance.removeItem(key,)

				resolve(null,)
			} catch (error) {
				reject(this.handleError('removing data', error,),)
			}
		},)
	}

	public get(key: STORAGE_KEYS,): string | null | undefined {
		return this.storageInstance.getItem(key,)
	}

	private handleError(operation: string, error: unknown,): Error {
		if (error instanceof Error) {
			return new Error(`Error ${operation} in local storage: ${error.message}`,)
		}

		return new Error(`An unknown error occurred while ${operation} in local storage`,)
	}
}

export let storageService: StorageService

if (typeof window !== 'undefined') {
	storageService = new StorageService(window.localStorage,)
}

