import { FC } from 'react'

import Heading from '@/components/ui/Heading'
import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'
import AdminHeader from '@/components/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/components/ui/admin-table/AdminTable'

import Meta from '@/utils/meta/Meta'

import { useActors } from './useActors'

const ActorsList: FC = () => {
	const {
		handleSearch,
		isLoading,
		searchTerm,
		data,
		deleteAsync,
		createAsync,
	} = useActors()
	return (
		<Meta title="Actors">
			<AdminNavigation />
			<Heading title={'Actors'} />
			<AdminHeader
				handleSearch={handleSearch}
				searchTerm={searchTerm}
				onClick={createAsync}
			/>
			<AdminTable
				tableItems={data || []}
				isLoading={isLoading}
				headerItems={['Name', 'Count movies']}
				removeHandler={deleteAsync}
			/>
		</Meta>
	)
}

export default ActorsList
