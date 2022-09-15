import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 8px;
  flex-grow: 1;
  color: #fff;
  background-color: ${props => props.color};

  box-shadow: 0 0 4px 1px rgba(243, 196, 196, 0.2);
`;

export const Label = styled.span``;
export const Percentage = styled.span`
  font-size: 16px;
`;
