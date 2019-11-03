import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Header = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput`
  margin: 10px;
`;

export const StyledIcon = styled(Icon).attrs({
  name: props => props.name,
  size: props => props.size,
})`
  margin: 20px;
`;

export const Loader = styled.ActivityIndicator`
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  align-self: center;
`;
