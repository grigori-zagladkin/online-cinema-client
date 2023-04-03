import GenresList from '@/components/screens/Admin/genres/genresList'

import { NextPageAuth } from '@/shared/types/auth.types'

const GenresListPage: NextPageAuth = () => {
	return <GenresList />
}

GenresListPage.isOnlyAdmin = true

export default GenresListPage
