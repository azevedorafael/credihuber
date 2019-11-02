import React from 'react';
import PropTypes from 'prop-types';

import { Image } from 'react-native';
import { withNavigation } from 'react-navigation';

import { Container, Text } from './styles';

const CommitItem = ({ commit, navigation }) => (
  <Container>
    <Image source={{ uri: commit.commit.committer.avatar_url }} />
    <Text>{commit.commit.message}</Text>
  </Container>
);

CommitItem.propTypes = {
  commit: PropTypes.shape({
    message: PropTypes.string,
  }).isRequired,
};

export default withNavigation(CommitItem);
