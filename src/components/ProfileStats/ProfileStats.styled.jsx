import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
  flex-basis: 33.33%;
  padding: ${p => p.theme.space[4]}px;
  border: ${p => p.theme.borders.normal}${p => p.theme.colors.border};
`;

export const Label = styled.span`
  color: ${p => p.theme.colors.text2};
`;

export const Quantity = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.text2} #2e2e2e;
`;
