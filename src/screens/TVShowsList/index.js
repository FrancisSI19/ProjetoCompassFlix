import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {FlatList, TouchableOpacity, Text} from 'react-native';

import {ContainerVote, Vote, Image, Container} from '../MovieList/styles';

export default function TVShowsList() {
  const navigation = useNavigation();

  const [tvshows, setTvshows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <TouchableOpacity>
      <Text>TVShows</Text>
    </TouchableOpacity>
  );
}
