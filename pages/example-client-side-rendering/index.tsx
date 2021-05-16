import { useEffect, useState } from 'react';
import Head from 'next/head';
import { Container, MainContainer, MainTitle, P } from '../../components/general';
import PostCard from '../../components/PostCard/PostCard';
import Link from 'next/link';

const ServerSideRendering = () => {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let postList = await fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json());
            setPostList(postList);
        }
        fetchData();
    }, []);

    return (
        <Container>
            <Head>
                <title>Client side Rendering</title>
                <meta name="description" content="Html generated on backend/server side" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainContainer>
                <MainTitle>
                    <span>client-side</span> rendering
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