import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import styles from './styles';

const RepositoryItem = ({ repository, navigation }) => (
  <>
    <Text style={styles.title}>{repository.name}</Text>
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Commits', {
              name: repository.name,
            })
          }
        >
          <View style={styles.infoContainer}>
            <View style={styles.info}>
              <Text style={styles.infoText}>{repository.description}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  </>
);

RepositoryItem.propTypes = {
  repository: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default withNavigation(RepositoryItem);
