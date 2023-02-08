import Head from 'next/head'

const Meta = () => {
  return (
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
      
      <meta property="og:url" content="https://skill-calc.llamarpg.com/" />
      <meta property="og:type" content="website"/>
      <meta property="og:title" content="Skill Calculator - LLAMA RPG"/>
      <meta property="og:description" content="Skill Calculator - LLAMA RPG"/>
      <meta property="og:image" content="https://www.llamarpg.com/assets/blog/Bad.jpg"/>

      <meta name="twitter:card" content="summary_large_image"/>
      <meta property="twitter:domain" content="llamarpg.com"/>
      <meta property="twitter:url" content="https://skill-calc.llamarpg.com/"/>
      <meta name="twitter:title" content="Skill Calculator - LLAMA RPG"/>
      <meta name="twitter:description" content="Skill Calculator - LLAMA RPG"/>
      <meta name="twitter:image" content="https://www.llamarpg.com/assets/blog/Bad.jpg"/>
    </Head>
  )
}

export default Meta
