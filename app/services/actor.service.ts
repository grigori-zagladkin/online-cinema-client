import instance, { axiosClassic } from 'api/interceptors'

import { IActorEditInput } from '@/components/screens/Admin/actor/actore-edit.interface'

import { IActor } from '@/shared/types/movie.types'

import { getActorsUrl } from '@/config/api.config'

export const ActorService = {
	async getBySlug(slug: string) {
		return axiosClassic.get<IActor>(getActorsUrl(`/by-slug/${slug}`))
	},
	async create() {
		return instance.post<string>(getActorsUrl(''))
	},
	async update(_id: string, data: IActorEditInput) {
		return instance.put<string>(getActorsUrl(`/${_id}`), data)
	},
	async delete(_id: string) {
		return instance.delete<string>(getActorsUrl(`/${_id}`))
	},
	async getById(_id: string) {
		return instance.get<IActorEditInput>(getActorsUrl(`/${_id}`))
	},
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IActor[]>(getActorsUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},
}
