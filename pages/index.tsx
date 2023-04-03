import { errorCatch } from 'api/api.helpers'
import { GetStaticProps, NextPage } from 'next'

import Home from '@/components/screens/Home'
import { IHome } from '@/components/screens/Home/Home.interface'
import { IGalleryItem } from '@/components/ui/gallery/gallery.interface'
import { ISlide } from '@/components/ui/slider/slider.interface'

import { ActorService } from '@/services/actor.service'
import { MovieService } from '@/services/movie.service'

import { getGenresList } from '@/utils/movie/getGenresList'

import { getActorUrl, getMovieUrl } from '@/config/url.config'

const HomePage: NextPage<IHome> = ({ slides, trendingMovies, actors }) => {
	return (
		<Home slides={slides} trendingMovies={trendingMovies} actors={actors} />
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: movies } = await MovieService.getAll()
		const slides: ISlide[] = movies.slice(0, 3).map((m) => ({
			_id: m._id,
			link: getMovieUrl(m.slug),
			bigPoster: m.bigPoster,
			subTitle: getGenresList(m.genres),
			title: m.title,
		}))
		const { data: dataActors } = await ActorService.getAll()
		const actors: IGalleryItem[] = dataActors.slice(0, 7).map((a) => ({
			name: a.name,
			posterPath: a.photo,
			link: getActorUrl(a.slug),
			content: {
				title: a.name,
				subTitle: `+${a.countMovies} movies`,
			},
		}))
		const dataTrendingMovies = await MovieService.getMostPopularMovies()
		const trendingMovies: IGalleryItem[] = dataTrendingMovies
			.slice(0, 7)
			.map((a) => ({
				name: a.title,
				posterPath: a.poster,
				link: getMovieUrl(a.slug),
			}))
		return {
			props: {
				slides,
				actors,
				trendingMovies,
			} as IHome,
		}
	} catch (error) {
		console.log(errorCatch(error))
		return {
			props: {
				actors: [],
				slides: [],
				trendingMovies: [],
			} as IHome,
		}
	}
}

export default HomePage
