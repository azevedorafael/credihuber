import styled from 'styled-components/native';

export const MainContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 10px;
`;

export const CommitContainer = styled.View`
  background-color: #fff;
  border-radius: 3;
  border-width: 0.5;
  flex-direction: row;
  padding: 20px;
  margin: 10px;
`;

export const Text = styled.Text`
  font-size: 14;
  font-weight: bold;
`;

export const OwnerAvatar = styled.Image`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  background: #eee;
`;
