import styled, { css } from 'styled-components';

export const Container = styled.footer`
    ${({ theme }) => css`
        max-width: 100%;
        margin-bottom: ${theme.spacings.medium};
    `}
`;