import { FC } from 'react'

import styles from './Gallery.module.scss'
import GalleryItem from './GalleryItem'
import { IGalleryItem } from './gallery.interface'

const Gallery: FC<{ items: IGalleryItem[] }> = ({ items }) => {
	return (
		<div className={styles.gallery}>
			{items.map((item, key) => (
				<GalleryItem key={key} item={item} variant="vertical" />
			))}
		</div>
	)
}

export default Gallery
