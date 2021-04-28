import '../styles/globals.css'
import React from 'react'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { AnimateSharedLayout } from 'framer-motion'
import { AppProvider } from '../components/hoc'
import Head from 'next/head'

const MyApp: NextPage<AppProps> = (props: AppProps) => {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>Cory Ball</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="Cory Ball's web development journey"
        />
        <meta name="keywords" content="Portfolio" />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <div className="flex flex-col h-screen w-screen">
        <AppProvider>
          <AnimateSharedLayout>
            <Component {...pageProps} />
          </AnimateSharedLayout>
        </AppProvider>
      </div>
    </>
  )
}

export default MyApp
