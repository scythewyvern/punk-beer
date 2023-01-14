import { Inter } from '@next/font/google'
import Header from '~components/header'
import '~styles/colors.css'
import '~styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={inter.className}>
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />

			<body className="container">
				<Header />
				{children}
			</body>
		</html>
	)
}
