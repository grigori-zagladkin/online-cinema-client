import instance from 'api/interceptors'

export const FileService = {
	async upload(file: FormData, folder?: string) {
		return instance.post<{ url: string; name: string }[]>('/file', file, {
			params: {
				folder,
			},
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})
	},
}
