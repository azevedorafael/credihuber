import React from 'react';
import PropTypes from 'prop-types';

import { withNavigation } from 'react-navigation';

import { MainContainer, CommitContainer, Text, OwnerAvatar } from './styles';

const CommitItem = ({ commit }) => (
  <MainContainer>
    <OwnerAvatar source={{ uri: commit.commit.committer.avatar_url }} />
    <CommitContainer>
      <Text>{commit.commit.message}</Text>
    </CommitContainer>
  </MainContainer>
);

CommitItem.propTypes = {
  commit: PropTypes.shape({
    message: PropTypes.string,
    commit: PropTypes.shape({
      commit: PropTypes.string,
      message: PropTypes.string,
      committer: PropTypes.shape({
        avatar_url: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default withNavigation(CommitItem);
