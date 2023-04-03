import { FC } from 'react'
import ReactStars from 'react-stars'

import AuthButton from '@/components/ui/video-player/AuthPlaceholder/AuthButton'

import { useAuth } from '@/hooks/useAuth'

import styles from './RateMovie.module.scss'
import { useRateMovie } from './useRateMovie'

interface IRateMovie {
	_id: string
	slug: string
}

const RateMovie: FC<IRateMovie> = ({ _id, slug }) => {
	const { handleClick, isSended, rating } = useRateMovie(_id)
	const { user } = useAuth()
	return (
		<div className={styles.wrapper}>
			<h3>How do you like the movie?</h3>
			<p>Ratings improve recomendations</p>
			{user ? (
				<>
					{isSended ? (
						<div className={styles.thanks}>Thanks for rating!</div>
					) : (
						<ReactStars
							className="mx-auto w-fit"
							size={30}
							edit={true}
							count={5}
							value={rating}
							onChange={handleClick}
							color1="#4f4f4f"
						/>
					)}
				</>
			) : (
				<AuthButton slug={slug} />
			)}
		</div>
	)
}

export default RateMovie
