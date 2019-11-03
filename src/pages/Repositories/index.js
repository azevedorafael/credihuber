import React, { Component } from 'react';
import { View, Image,FlatList } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";

import api from '~/services/api';

import RepositoryItem from "./RepositoryItem";
import {Loader, Input} from './styles'

import logo from '~/assets/logo_small.png';

AsyncStorage.clear();

export default class Repositories extends Component {
  state = {
    data: [],
    loading: true,
    search: null,
  };

  async componentDidMount() {
    const { data } = await api.get(`/users/creditas/repos`);

    this.setState({ data, loading: false });
  }

  renderListItem = ({ item }) => {
    <RepositoryItem repository={item} />;
  };

  renderList = () => {
    const { data } = this.state;

    return (
      <>
      <Image source={logo} style={{ alignSelf: 'center',width: 250, height: 100 }} />
      <Input
          placeholder={"Repository Search"}
          onChangeText={text => {
            this.setState({ search: text });
          }}
          value={this.state.search}
        />
      <FlatList
          data={data.filter(repo => {
            return (
              !this.state.search ||
              repo.name
                .toLowerCase()
                .indexOf(this.state.search.toLowerCase()) > -1
            );
          })}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <RepositoryItem repository={item} />}
      />
      </>
    );
  };

  render() {
    const { loading } = this.state;

    return (
      <View>
        {loading ? (
          <Loader />
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}
