import localFont from 'next/font/local'
import './globals.css'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import StoreProvider from './store-provider'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {' '}
        <StoreProvider>
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </StoreProvider>
      </body>
    </html>
  )
}
