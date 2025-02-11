import React from 'react';
import { Container } from './styled';
import { Date } from '../Date';

export type PostDetailsProps = {
    author: string,
    category: string,
    date: string,
}

export const PostDetails = ({ author, category, date }: PostDetailsProps) => {
    return (
        <Container>
            Publicado em <Date date={date} /> por {author} em {category}
        </Container>
    );
};
