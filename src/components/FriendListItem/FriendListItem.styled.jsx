import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.backgroundWhite};
  border-radius: ${p => p.theme.radii.normal};
  width: 30%;
  gap: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
  margin-left: auto;
  margin-right: auto;
`;
export const Status = styled.span`
  width: ${p => p.theme.fontSizes.m}px;
  height: ${p => p.theme.fontSizes.m}px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;
export const Avatar = styled.img``;
export const Name = styled.p``;
