import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import MaterialIcon from '@/components/ui/MaterialIcon'

import styles from '../menu/Menu.module.scss'
import { IMenuItem } from '../menu/menu.interface'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { asPath } = useRouter()
	return (
		<li className={asPath === item.link ? styles.active : ''}>
			<Link href={`${item.link}`} legacyBehavior>
				<a>
					<MaterialIcon name={item.icon} />
					<span>{item.title}</span>
				</a>
			</Link>
		</li>
	)
}

export default MenuItem
