import { FC } from 'react'

import SkeletonLoader from '../../SkeletonLoader'

import styles from './AdminTable.module.scss'
import AdminTableHeader from './AdminTableHeader'
import AdminTableItem from './AdminTableItem'
import { ITableItem } from './admin-table.interface'

interface IAdminTable {
	tableItems: Array<ITableItem>
	isLoading: boolean
	headerItems: Array<string>
	removeHandler: (id: string) => void
}

const AdminTable: FC<IAdminTable> = ({
	headerItems,
	isLoading,
	removeHandler,
	tableItems,
}) => {
	return (
		<div>
			<AdminTableHeader headerItems={headerItems} />
			{isLoading ? (
				<SkeletonLoader count={1} height={48} className="mt-4" />
			) : tableItems.length ? (
				tableItems.map((tableItem, index) => (
					<AdminTableItem
						key={index}
						removeHandler={() => removeHandler(tableItem._id)}
						tableItem={tableItem}
					/>
				))
			) : (
				<div className={styles.notFound}>Elements not found</div>
			)}
		</div>
	)
}

export default AdminTable
