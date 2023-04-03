import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import LogoImage from '@/assets/images/logo.svg'

const Logo: FC = () => {
	return (
		<Link href="/">
			<div className="px-layout mb-10">
				<Image
					src={LogoImage}
					alt={'app logotype'}
					width={247}
					height={34}
					draggable={false}
				/>
			</div>
		</Link>
	)
}

export default Logo
