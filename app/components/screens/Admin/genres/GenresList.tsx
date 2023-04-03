import { FC } from 'react'

import Heading from '@/components/ui/Heading'
import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'
import AdminHeader from '@/components/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/components/ui/admin-table/AdminTable'

import Meta from '@/utils/meta/Meta'

import { useGenres } from './useGenres'

const GenresList: FC = () => {
	const {
		handleSearch,
		isLoading,
		searchTerm,
		data,
		deleteAsync,
		createAsync,
	} = useGenres()
	return (
		<Meta title="Users">
			<AdminNavigation />
			<Heading title={'Users'} />
			<AdminHeader
				handleSearch={handleSearch}
				searchTerm={searchTerm}
				onClick={createAsync}
			/>
			<AdminTable
				tableItems={data || []}
				isLoading={isLoading}
				headerItems={['Name', 'slug']}
				removeHandler={deleteAsync}
			/>
		</Meta>
	)
}

export default GenresList
