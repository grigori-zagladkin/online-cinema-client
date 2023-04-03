import { FC } from 'react'

import Heading from '@/components/ui/Heading'
import SubHeading from '@/components/ui/SubHeading'
import Gallery from '@/components/ui/gallery/Gallery'
import Slider from '@/components/ui/slider/Slider'

import Meta from '@/utils/meta/Meta'

import { IHome } from './Home.interface'

const Home: FC<IHome> = ({ slides, actors, trendingMovies }) => {
	return (
		<Meta
			title="watch movies online"
			description="watch movieapp movies and TV shows online or stream right your browser"
		>
			<Heading
				title="Watch movies online"
				className="text-gray-500 mb-8 text-xl"
			/>
			{slides.length && <Slider slides={slides} />}
			<div className="my-10">
				<SubHeading title="Trending now" />
				{trendingMovies.length && <Gallery items={trendingMovies} />}
			</div>
			<div className="my-10">
				<SubHeading title="Best actors" />
				{actors.length && <Gallery items={actors} />}
			</div>
		</Meta>
	)
}

export default Home
