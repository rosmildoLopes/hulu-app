import Image from 'next/image'
import { Content, Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Results from '@/components/Results'
import requests from '@/utils/requests'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Hulu App</title>
        <link rel='icon' href='/favicon.ico'></link>
      </Head>
      <Header />
      <Nav />
      {/* Results */}
      <Results />
    </>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url ||
requests.fetchTrending.url}`)
}
