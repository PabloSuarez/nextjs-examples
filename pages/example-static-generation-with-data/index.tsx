import React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Container, GridContainer, MainContainer, MainTitle, P } from '../../components/general';
import PostCard from '../../components/PostCard/PostCard';
import Link from 'next/link';

export async function getStaticProps(context: GetStaticProps) {
    let postList = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json());
    return {
        props: {
            postList
        },
    }
};

const ServerSideRendering = ({ postList }) => {
    return (
        <Container>
            <Head>
                <title>Static Generation with data</title>
                <meta name="description" content="Html generated on backend/server side" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainContainer>
                <MainTitle>
                    <span>server-side</span> static generation
                    <P> Using <Link href="https://jsonplaceholder.typicode.com/posts">jsonplaceholder</Link> as data server, lets display a list of Post. </P>
                </MainTitle>
                <div style={{ width: '80vw', marginTop: '20px' }}>
                    {
                        postList.map(({ id, title, body }) => (
                            <PostCard title={title} description={body} id={id} key={id} />
                        ))
                    }
                </div>
            </MainContainer>
        </Container>
    );
};

export default ServerSideRendering;