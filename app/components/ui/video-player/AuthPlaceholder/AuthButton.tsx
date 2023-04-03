import Link from 'next/link'
import { FC } from 'react'

import { getMovieUrl } from '@/config/url.config'

import styles from './AuthPlaceholder.module.scss'

const AuthButton: FC<{ slug: string }> = ({ slug }) => {
	return (
		<Link legacyBehavior href={`/auth?redirect=${getMovieUrl(slug)}`}>
			<a className={styles.btn}></a>
		</Link>
	)
}

export default AuthButton
