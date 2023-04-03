import { FC } from 'react'

import Heading from '@/components/ui/Heading'
import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'
import AdminHeader from '@/components/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/components/ui/admin-table/AdminTable'

import Meta from '@/utils/meta/Meta'

import { useMovies } from './useMovies'

const MovieList: FC = () => {
	const {
		handleSearch,
		isLoading,
		searchTerm,
		data,
		deleteAsync,
		createAsync,
	} = useMovies()
	return (
		<Meta title="Movies">
			<AdminNavigation />
			<Heading title={'Movies'} />
			<AdminHeader
				handleSearch={handleSearch}
				searchTerm={searchTerm}
				onClick={createAsync}
			/>
			<AdminTable
				tableItems={data || []}
				isLoading={isLoading}
				headerItems={['Title', 'Genres', 'Rating']}
				removeHandler={deleteAsync}
			/>
		</Meta>
	)
}

export default MovieList
