import React from 'react';
import PropTypes from 'prop-types';

import { MainContainer, CommitContainer, Text, OwnerAvatar } from './styles';

export default function CommitItem({ commit }) {
  const avatar_url = commit.committer ? commit.committer.avatar_url : '';

  return (
    <MainContainer>
      <OwnerAvatar source={{ uri: avatar_url }} />
      <CommitContainer>
        <Text>{commit.commit.message}</Text>
      </CommitContainer>
    </MainContainer>
  );
}

CommitItem.propTypes = {
  commit: PropTypes.shape({
    commit: PropTypes.shape({
      message: PropTypes.string,
    }),
    committer: PropTypes.shape({
      avatar_url: PropTypes.string,
    }),
  }).isRequired,
};
