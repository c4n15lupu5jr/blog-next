import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { countAllPosts } from '../../data/posts/count-all-posts';
import { getAllPosts } from '../../data/posts/get-all-posts';
import { getPost } from '../../data/posts/get-post';
import { PostData } from '../../domain/posts/post';
import { Post } from '../../containers/Post';

export type DynamicPostProps = {
    post: PostData;
};

const DynamicPost = ({ post }: DynamicPostProps) => {
    return <Post post={post} />;
};

export default DynamicPost;

export const getStaticPaths: GetStaticPaths = async () => {
    const numberOfPosts = await countAllPosts();
    const posts = await getAllPosts(`_limit=${numberOfPosts}`);

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            };
        }),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    if (!ctx.params || !ctx.params.slug) {
        return {
            notFound: true,
        };
    }

    const posts = await getPost(ctx.params.slug);

    return {
        props: { post: posts[0] },
        // revalidate: 5,
    };
};