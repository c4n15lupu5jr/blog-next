import * as Styled from './styled';
import React from 'react';

export type MainContainerProps = {
    children: React.ReactNode;
};

export const MainContainer = ({ children }: MainContainerProps) => {
    return <Styled.Container>{children}</Styled.Container>
}