import styled from '@emotion/styled';

export const Table = styled.table`
  margin-left: auto;
  margin-right: auto;
`;

export const Head = styled.thead`
  background-color: ${p => p.theme.colors.primary};
  color:${p => p.theme.colors.white};
`;

export const HeadRow = styled.tr`
  text-transform: uppercase;
`;

export const Body = styled.tbody``;

export const Cell = styled.th`
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[5]}px;
`;
