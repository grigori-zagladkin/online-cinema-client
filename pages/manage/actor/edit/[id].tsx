import ActorEdit from '@/components/screens/Admin/actor/ActorEdit'

import { NextPageAuth } from '@/shared/types/auth.types'

export const ActorEditPage: NextPageAuth = () => {
	return <ActorEdit />
}

ActorEditPage.isOnlyAdmin = true

export default ActorEditPage
