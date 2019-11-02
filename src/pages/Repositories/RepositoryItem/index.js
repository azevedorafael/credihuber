import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const RepositoryItem = ({ repository, navigation }) => (
  <>
    <Text style={styles.title}>{repository.name}</Text>

    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.infoContainer}>
          <View style={styles.info}>
            <Text style={styles.infoText}>{repository.description}</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('Commits', {
                name: repository.name,
              })
            }
          >
            <Text style={styles.buttonText}>Commits</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
