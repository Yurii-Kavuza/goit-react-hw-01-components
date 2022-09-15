import styled from '@emotion/styled';

export const Transaction = styled.tr`
  background-color: ${p => p.theme.colors.backgroundWhite};
  text-transform: capitalize;

  &:nth-of-type(2n) {
    background-color: ${p => p.theme.colors.backgroundGrey};
  }
`;

export const Cell = styled.td`
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[5]}px;
`;
