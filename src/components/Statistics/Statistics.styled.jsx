import styled from '@emotion/styled';

export const Stats = styled.section`
  margin: 0 auto;
  background-color: ${p => p.theme.colors.backgroundWhite};
  width: 50%;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.text};
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;
