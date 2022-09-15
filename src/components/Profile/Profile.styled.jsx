import styled from '@emotion/styled';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
  width: 400px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.2);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px;
  align-items: center;
`;

export const Stats = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  align-content: center;
  width: 100%;
  background-color: #f3f6f9;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  background-color: #f3f6f9;
  width: 50%;
  object-fit: cover;
`;

export const Username = styled.p`
  color: #2e2e2e;
  font-size: 24px;
  font-weight: 700;
`;
export const Tag = styled.p`
  color: #919191;
`;
export const Location = styled.p`
  color: #919191;
`;
