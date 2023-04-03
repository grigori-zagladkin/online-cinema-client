import instance, { axiosClassic } from 'api/interceptors'

import { IMovieEditInput } from '@/components/screens/Admin/movie/movie-edit.interface'

import { IMovie } from '@/shared/types/movie.types'

import { getMoviesUrl } from '@/config/api.config'

export const MovieService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IMovie[]>(getMoviesUrl(''), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},
	async getMostPopularMovies() {
		const { data: movies } = await axiosClassic.get<IMovie[]>(
			getMoviesUrl('/most-popular')
		)
		return movies
	},
	async getBySlug(slug: string) {
		return axiosClassic.get<IMovie>(getMoviesUrl(`/by-slug/${slug}`))
	},
	async getByActor(actorId: string) {
		return axiosClassic.get<IMovie[]>(getMoviesUrl(`/by-actor/${actorId}`))
	},
	async getByGenres(genreIds: string[]) {
		return axiosClassic.post<IMovie[]>(getMoviesUrl(`/by-genres`), {
			genreIds,
		})
	},
	async create() {
		return instance.post<string>(getMoviesUrl(''))
	},
	async updateCountOpened(slug: string) {
		return instance.put(getMoviesUrl(`/update-count-opened`), {
			slug,
		})
	},
	async update(_id: string, data: IMovieEditInput) {
		return instance.put<string>(getMoviesUrl(`/${_id}`), data)
	},
	async delete(_id: string) {
		return instance.delete<string>(getMoviesUrl(`/${_id}`))
	},
	async getById(_id: string) {
		return instance.get<IMovieEditInput>(getMoviesUrl(`/${_id}`))
	},
}
