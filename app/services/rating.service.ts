import instance from 'api/interceptors'

import { getRatingUrl } from '@/config/api.config'

export const RatingService = {
	async setRating(movieId: string, value: number) {
		return instance.post<string>(getRatingUrl('/set-rating'), {
			movieId,
			value,
		})
	},
	async getByUserMovie(movieId: string) {
		return instance.get<number>(getRatingUrl(`/${movieId}`))
	},
}
