import dynamic from 'next/dynamic'
import { FC } from 'react'

import Menu from './menu/Menu'
import { firstMenu } from './menu/menu.data'

const DynamicGenreMenu = dynamic(() => import('./genre/GenreMenu'), {
	ssr: false,
})

const MenuContainer: FC = () => {
	return (
		<div>
			<Menu menu={firstMenu} />
			<DynamicGenreMenu />
			<Menu menu={{ title: 'General', items: [] }} />
		</div>
	)
}

export default MenuContainer
