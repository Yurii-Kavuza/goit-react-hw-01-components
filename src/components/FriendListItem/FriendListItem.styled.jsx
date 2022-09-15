import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px;
  background-color: #fff;
  border-radius: 4px;
  width: 30%;
  gap: 8px;
  margin-bottom: 8px;
  margin-left: auto;
  margin-right: auto;
`;
export const Status = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;
export const Avatar = styled.img``;
export const Name = styled.p``;
