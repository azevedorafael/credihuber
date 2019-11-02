import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  border-width: 0.5;
  border-radius: 3;
  padding: 20px;
  margin: 5px 20px 30px;
`;

export const Title = styled.Text`
  font-size: 14;
  font-weight: bold;
  padding: 5px 20px 5px;
`;

export const MainContainer = styled.View`
  flex-direction: column;
  justify-content: space-between;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;

export const Info = styled.View`
  flex-direction: column;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
`;

export const InfoText = styled.Text`
  color: #000;
  font-size: 12;
  margin-left: 10px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 10px;
`;

export const Button = styled.TouchableOpacity`
  background: #19b3ae;
  border-radius: 3;
  width: 80px;
  height: 30px;
  justify-content: center;
  align-items: center;
`;
