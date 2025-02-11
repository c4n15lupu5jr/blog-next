import React from 'react';
import {DiscussionEmbed} from 'disqus-react'
import { title } from 'process';
import { Container } from './styled';
import { SITE_URL } from '../config/app-config';

export type CommentProps = {
    slug: string;
    title: string;
}

export const Comments = ({slug, title}: CommentProps) => {
    return (
    <Container>
        <DiscussionEmbed shortname='meublog-jubczsh3fh'
        config={{
            url: `${SITE_URL}/post/${slug}`,
            identifier: slug,
            title: title,
            language: 'pt_BR',
        }} />
    </Container>
    );
};