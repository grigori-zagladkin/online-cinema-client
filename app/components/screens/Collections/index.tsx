import { FC } from 'react'

import Heading from '@/components/ui/Heading'
import Description from '@/components/ui/Heading/Description'

import Meta from '@/utils/meta/Meta'

import styles from './Collection.module.scss'
import CollectionItem from './CollectionItem'
import { ICollection } from './collection.interface'

const title = 'Discovery'
const description = 'In this section you will find all genres on our site'
const Collections: FC<{ collections: ICollection[] }> = ({ collections }) => {
	return (
		<Meta title={title} description={description}>
			<Heading title={title} className={styles.heading} />
			<Description text={description} className={styles.description} />
			<section className={styles.collections}>
				{collections.map((collection) => (
					<CollectionItem key={collection._id} collection={collection} />
				))}
			</section>
		</Meta>
	)
}

export default Collections
