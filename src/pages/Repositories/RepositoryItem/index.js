import React from 'react';
import PropTypes from 'prop-types';

import { Text } from 'react-native';
import { withNavigation } from 'react-navigation';

import {
  Title,
  Container,
  MainContainer,
  InfoContainer,
  Info,
  InfoText,
  ButtonContainer,
  Button,
} from './styles';

const RepositoryItem = ({ repository, navigation }) => (
  <>
    <Title>{repository.name}</Title>

    <Container>
      <MainContainer>
        <InfoContainer>
          <Info>
            <InfoText>{repository.description}</InfoText>
          </Info>
        </InfoContainer>

        <ButtonContainer>
          <Button
            onPress={() =>
              navigation.navigate('Commits', {
                name: repository.name,
              })
            }
          >
            <Text>Commits</Text>
          </Button>
        </ButtonContainer>
      </MainContainer>
    </Container>
  </>
);

RepositoryItem.propTypes = {
  repository: PropTypes.shape({
    name: PropTypes.string,
    stargazers_count: PropTypes.number,
    forks_count: PropTypes.number,
    watchers_count: PropTypes.number,
  }).isRequired,
};

export default withNavigation(RepositoryItem);
