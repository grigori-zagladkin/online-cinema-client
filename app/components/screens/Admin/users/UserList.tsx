import { FC } from 'react'

import Heading from '@/components/ui/Heading'
import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'
import AdminHeader from '@/components/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/components/ui/admin-table/AdminTable'

import Meta from '@/utils/meta/Meta'

import { useUsers } from './useUsers'

const UserList: FC = () => {
	const { handleSearch, isLoading, searchTerm, data, deleteAsync } = useUsers()
	return (
		<Meta title="Users">
			<AdminNavigation />
			<Heading title={'Users'} />
			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			<AdminTable
				tableItems={data || []}
				isLoading={isLoading}
				headerItems={['Email', 'Date register']}
				removeHandler={deleteAsync}
			/>
		</Meta>
	)
}

export default UserList
