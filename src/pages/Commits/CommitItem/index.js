import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, TouchableOpacity, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const CommitItem = ({ commit, navigation }) => (
  <View style={styles.container}>
    <Image source={{ uri: commit.commit.committer.avatar_url }} />
    <Text style={styles.title}>{commit.commit.message}</Text>
  </View>
);

CommitItem.propTypes = {
  commit: PropTypes.shape({
    message: PropTypes.string,
  }).isRequired,
};

export default withNavigation(CommitItem);
