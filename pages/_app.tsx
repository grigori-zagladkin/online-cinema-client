import type { AppProps } from 'next/app'
import App from 'next/app'
import MainProvider from 'provider/MainProvider'

import { TypeComponentAuthFields } from '@/shared/types/auth.types'

import '@/assets/styles/globals.scss'

type TypeAppProps = AppProps & TypeComponentAuthFields

const MyApp = ({ Component, pageProps }: TypeAppProps) => {
	return (
		<MainProvider Component={Component}>
			<Component {...pageProps} />
		</MainProvider>
	)
}
MyApp.getInitialProps = async (appContext: any) => {
	const appProps = await App.getInitialProps(appContext)
	return { ...appProps }
}

export default MyApp
