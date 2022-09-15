import styled from '@emotion/styled';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${p => p.theme.space[4]}px;
  width: 400px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.backgroundWhite};
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.2);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[5]}px;
  align-items: center;
`;

export const Stats = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  align-content: center;
  width: 100%;
  background-color: ${p => p.theme.colors.muted};
`;

export const Avatar = styled.img`
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => p.theme.colors.muted};
  width: 50%;
  object-fit: cover;
`;

export const Username = styled.p`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.space[4]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
`;
export const Tag = styled.p`
  color: ${p => p.theme.colors.text2};
`;
export const Location = styled.p`
  color: ${p => p.theme.colors.text2};
`;
