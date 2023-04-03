import dynamic from 'next/dynamic'
import { FC } from 'react'

import SubHeading from '@/components/ui/SubHeading'
import Banner from '@/components/ui/banner/Banner'
import Gallery from '@/components/ui/gallery/Gallery'

import Meta from '@/utils/meta/Meta'

import { IMoviePage } from '../../../../pages/movie/[slug]'

import Content from './Content'
import { useUpdateCountOpened } from './useUpdateCountOpened'

const DynamicPlayer = dynamic(
	() => import('../../ui/video-player/VideoPlayer'),
	{
		ssr: false,
	}
)
const DynamicRateMovie = dynamic(() => import(`./RateMovie`), {
	ssr: false,
})
const SingleMovie: FC<IMoviePage> = ({ movie, similarMovies }) => {
	useUpdateCountOpened(movie?.slug || '')
	return (
		<Meta title={movie?.title || ''} description={`Watch ${movie?.title}`}>
			<Banner
				imagePath={movie?.bigPoster || ''}
				Detail={() => <Content movie={movie} />}
			/>
			<DynamicPlayer
				videoSource={movie?.videoUrl || ''}
				slug={movie?.slug || ''}
			/>
			<div className="mt-12">
				<SubHeading title="Similar" />
				<Gallery items={similarMovies} />
			</div>
			<DynamicRateMovie slug={movie?.slug || ''} _id={movie?._id || ''} />
		</Meta>
	)
}

export default SingleMovie
