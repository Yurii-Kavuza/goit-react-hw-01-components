import styled from '@emotion/styled';

export const Transaction = styled.tr`
  background-color: #fff;
  text-transform: capitalize;

  &:nth-of-type(2n) {
    background-color: #ecf1f4;
  }
`;

export const Cell = styled.td`
  padding: 10px 50px;
`;
