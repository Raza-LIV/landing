export enum STORAGE_KEYS {
	TEST = 'TEST'
}

export interface IStorageInstance {
	setItem: (key: string, value: string) => void
	removeItem: (key: string) => void
	getItem: (key: string) => string | null
}
