// web/src/pages/HomePage/HomePage.js

import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <ArticlesCell />
    </>
  )
}

export default HomePage
