import React, { Component } from 'react';

import {
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { withNavigation } from "react-navigation";

import CommitItem from "./CommitItem";
import {Input, StyledIcon,Loader} from './styles';
import api from "~/services/api";


class Commits extends Component {
  state = {
    data: [],
    loading: true,
    search: null,
    commits: []
  };

  async componentDidMount() {
    const { navigation } = this.props;
    const repoName = navigation.getParam("name", '');
    const { data } = await api.get(`repos/azevedorafael/${repoName}/commits`);

    this.setState({ data: data.slice(0, 19), loading: false });
  }

  back = () => {
    const { navigation } = this.props;

    navigation.navigate('Repositories');
  };

  renderList = () => {
    const { data } = this.state;

    return (
      <>
        <TouchableOpacity onPress={this.back}>
          <StyledIcon name="arrow-left" size={24}  />
        </TouchableOpacity>
        <Input
          placeholder={"Live search"}
          onChangeText={text => {
            this.setState({ search: text });
          }}
          value={this.state.search}
        />
        <FlatList
          data={data.filter(commit => {
            return (
              !this.state.search ||
              commit.commit.message
                .toLowerCase()
                .indexOf(this.state.search.toLowerCase()) > -1
            );
          })}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <CommitItem commit={item} />}
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

export default withNavigation(Commits);
