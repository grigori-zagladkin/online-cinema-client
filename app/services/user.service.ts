import instance from 'api/interceptors'

import { IProfileInput } from '@/components/screens/Profile/profile.interface'

import { IMovie } from '@/shared/types/movie.types'
import { IUser } from '@/shared/types/user.types'

import { getUsersUrl } from '@/config/api.config'

export const UserService = {
	async getAll(searchTerm?: string) {
		return instance.get<Array<IUser>>(getUsersUrl(''), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},
	async delete(_id: string) {
		return instance.delete<string>(getUsersUrl(`/${_id}`))
	},
	getProfile() {
		return instance.get<IUser>(getUsersUrl('/profile'))
	},
	async updateProfile(data: IProfileInput) {
		return instance.put<string>(getUsersUrl('/profile'), data)
	},
	async getUser(_id: string) {
		return instance.get<IUser>(getUsersUrl(`/${_id}`))
	},
	async updateUser(_id: string, data: IProfileInput) {
		return instance.put<string>(getUsersUrl(`/${_id}`), data)
	},
	async getFavorites() {
		return instance.get<IMovie[]>(getUsersUrl('/profile/favorites'))
	},
	async toggleFavorite(movieId: string) {
		return instance.post(getUsersUrl('/profile/favorites'), {
			movieId,
		})
	},
}
