import { FC } from 'react'

import MoviesContainer from './MoviesContainer'
import Search from './Search'
import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
	return (
		<div className={styles.sidebar}>
			<Search />
			<MoviesContainer />
		</div>
	)
}

export default Sidebar
