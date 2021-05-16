import Head from 'next/head'
import Footer from '../components/Footer';
import HomeCard from "../components/HomeCard";
import { P, MainTitle, Code, Container, MainContainer, GridContainer } from "../components/general";

const Home = () => {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainContainer>
        <MainTitle>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </MainTitle>

        <P>
          Pablo Suarez{' '}
          <Code>NextJS/examples</Code>
        </P>

        <GridContainer>
          <HomeCard urlLink={'/example-server-side-rendering'}>
            <h2>Server side Rendering &rarr;</h2>
            <div>The HTML is generated on server side on each request.</div>
          </HomeCard>
          <HomeCard urlLink={'/example-static-generation-with-data'}>
            <h2>Static Generation &rarr;</h2>
            <div>The HTML is generated at build time and will be reused on each request.</div>
          </HomeCard>
          <HomeCard urlLink={'/example-client-side-rendering'}>
            <h2>Client side Rendering &rarr;</h2>
            <div>The HTML is generated on client side.</div>
          </HomeCard>
          <HomeCard urlLink={'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'}>
            <h2>API &rarr;</h2>
            <div>How implement an API in NextJs to serve data.</div>
          </HomeCard>
        </GridContainer>
      </MainContainer>

      <Footer />
    </Container>
  );
}

export default Home;