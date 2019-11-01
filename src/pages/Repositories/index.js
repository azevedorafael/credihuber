import React, { Component } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";

import api from '~/services/api';

import RepositoryItem from "./RepositoryItem";
import styles from './styles';

AsyncStorage.clear();

export default class Repositories extends Component {
  state = {
    data: [],
    loading: true,
  };

  async componentDidMount() {
    const { data } = await api.get(`/users/azevedorafael/repos`);

    this.setState({ data, loading: false });
  }

  renderListItem = ({ item }) => {
    <RepositoryItem repository={item} />;
  };

  renderList = () => {
    const { data } = this.state;

    return (
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <RepositoryItem repository={item} />}
      />
    );
  };

  render() {
    const { loading } = this.state;

    return (
      <View>
        {loading ? (
          <ActivityIndicator style={styles.loading} />
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}
