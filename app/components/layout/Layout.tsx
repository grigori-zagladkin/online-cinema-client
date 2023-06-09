import { FC, ReactNode } from 'react'

import styles from './Layout.module.scss'
import Navigation from './Navigation'
import Sidebar from './Sidebar'

interface ILayout {
	children: ReactNode
}

const Layout: FC<ILayout> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Navigation />
			<div className={styles.center}>{children}</div>
			<Sidebar />
		</div>
	)
}

export default Layout
