import React from 'react';
import { PostData } from '../domain/posts/post';
import { GetStaticProps } from 'next';

const getPosts = async (): Promise<PostData[]> => {
    const posts = await fetch(
        'https://evening-retreat-45125.herokuapp.com/posts',
    );
    const jsonPosts = await posts.json();
    return jsonPosts;
};

export type HomeProps = {
    posts: PostData[];
};

export default function Home() {
    return (
        <div>
            {posts.map((post) => (
                <h2 key={post.slug}>{post.title}</h2>
            ))}
        </div>
    );
}

export const getStaticProps: GetStaticProps = async (context) => {
    const posts = await getPosts();

    return {
        props: { posts },
        // revalidate: 5,
    };
};
