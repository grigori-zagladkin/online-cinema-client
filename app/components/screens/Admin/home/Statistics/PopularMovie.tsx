import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useQuery } from 'react-query'

import SubHeading from '@/components/ui/SubHeading'

import { IMovie } from '@/shared/types/movie.types'

import { MovieService } from '@/services/movie.service'

import { getMovieUrl } from '@/config/url.config'

import styles from '../Admin.module.scss'

const PopularMovie: FC = () => {
	const { isLoading, data: movie } = useQuery(
		'Most popular movie in admin',
		() => MovieService.getMostPopularMovies(),
		{
			select: (data): IMovie => data[0],
		}
	)
	return (
		<div className={cn(styles.block, styles.popular)}>
			<SubHeading title="The most popular movie" />
			{isLoading ? (
				<Skeleton className="h-48" />
			) : (
				movie && (
					<>
						<h3>Opened {movie.countOpened} times</h3>
						<Link href={getMovieUrl(movie.slug)} legacyBehavior>
							<a>
								<Image
									src={movie.bigPoster}
									width={285}
									height={176}
									alt={movie.title}
									className={styles.image}
									unoptimized={true}
								/>
							</a>
						</Link>
					</>
				)
			)}
		</div>
	)
}

export default PopularMovie
