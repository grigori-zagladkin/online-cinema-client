import instance, { axiosClassic } from 'api/interceptors'

import { IGenreEditInput } from '@/components/screens/Admin/genre/genre-edit.interface'

import { IGenre } from '@/shared/types/movie.types'

import { getGenresUrl } from '@/config/api.config'

export const GenreService = {
	async getAll(searchTerms?: string) {
		return axiosClassic.get<IGenre[]>(getGenresUrl(``), {
			params: searchTerms
				? {
						searchTerms,
				  }
				: {},
		})
	},
	async delete(_id: string) {
		return instance.delete<string>(getGenresUrl(`/${_id}`))
	},
	async update(_id: string, data: IGenreEditInput) {
		return instance.put<string>(getGenresUrl(`/${_id}`), data)
	},
	async create() {
		return instance.post<string>(getGenresUrl(''))
	},
	async getCollections() {
		return axiosClassic.get<string>(getGenresUrl('/collections'))
	},
	async getById(_id: string) {
		return instance.get<IGenreEditInput>(getGenresUrl(`/${_id}`))
	},
	async getPopularGenres(limit: number = 4) {
		return axiosClassic.get<IGenre[]>(getGenresUrl('/popular'), {
			params: {
				limit,
			},
		})
	},
	async getBySlug(slug: string) {
		return axiosClassic.get<IGenre>(getGenresUrl(`/by-slug/${slug}`))
	},
}
