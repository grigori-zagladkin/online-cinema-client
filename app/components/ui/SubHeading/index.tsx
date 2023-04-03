import { FC } from 'react'

const SubHeading: FC<{ title: string }> = ({ title }) => {
	return <h1 className={`text-white font-semibold mb-5 text-xl`}>{title}</h1>
}

export default SubHeading
