import { errorCatch } from 'api/api.helpers'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import SingleMovie from '@/components/screens/SingleMovie'
import { IGalleryItem } from '@/components/ui/gallery/gallery.interface'

import { IMovie } from '@/shared/types/movie.types'

import { MovieService } from '@/services/movie.service'

import { getMovieUrl } from '@/config/url.config'

import Error404 from '../404'

export interface IMoviePage {
	movie: IMovie
	similarMovies: IGalleryItem[]
}

const SingleMoviePage: NextPage<IMoviePage> = ({ similarMovies, movie }) => {
	return movie ? (
		<SingleMovie movie={movie} similarMovies={similarMovies} />
	) : (
		<Error404 />
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: movies } = await MovieService.getAll()
		const paths = movies.map((movie) => ({
			params: {
				slug: movie.slug,
			},
		}))
		return {
			paths,
			fallback: 'blocking',
		}
	} catch (error) {
		return {
			paths: [],
			fallback: false,
		}
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: movie } = await MovieService.getBySlug(String(params?.slug))
		const responseSimilarMovies = await MovieService.getByGenres(
			movie.genres.map((g) => g._id)
		)
		const similarMovies: IGalleryItem[] = responseSimilarMovies.data
			.filter((m) => m._id !== movie._id)
			.map((m) => ({
				name: m.title,
				posterPath: m.poster,
				link: getMovieUrl(m.slug),
			}))
		return {
			props: { movie, similarMovies },
		}
	} catch (error) {
		console.error(error)
		console.log(errorCatch(error))
		return {
			notFound: true,
		}
	}
}

export default SingleMoviePage
