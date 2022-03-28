import React, {useEffect, useState} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {ContainerVote, Vote, Image, Container} from '../styles';
import {fetchTVShow} from "../../services/api";
import Loading from '../../components/Loading';
import IconStar from '../../components/IconStar';
import VoteAverage from '../../components/VoteAverage';

export default function TVShowsList() {
  const navigation = useNavigation();

  const [tvshows, setTvshows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetchTVShow(pageNumber)
      .then((data) => {
        setTvshows([...tvshows, ...data]);
        setLoading(false);

      }).catch(error => error)
  }, [pageNumber])

  const loadMoreItem = () => setPageNumber(pageNumber + 1);

  return loading ? (<Loading />) : (
    <FlatList
      data={tvshows}
      numColumns={4}
      keyExtractor={( item, index) => String(index)}
      onEndReached={loadMoreItem}
      onEndReachedThreshold={0.5}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => {
        return (
          <Container>
            <TouchableOpacity onPress={ () => navigation.navigate('', {tvshowId: item.id})}>
              <Image source={{uri: `https://image.tmdb.org/t/p/w780${item.poster_path}`}}/>
            </TouchableOpacity>
            <ContainerVote>
              <IconStar/>
              <Vote>
                {item.vote_average}<VoteAverage/>
              </Vote>
            </ContainerVote>
          </Container>
        );
      }}
    />
  );
}
