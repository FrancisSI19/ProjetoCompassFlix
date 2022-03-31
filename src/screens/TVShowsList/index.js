import React, {useEffect, useState} from 'react';
import {FlatList, TouchableOpacity, View, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {ContainerVote, Vote, Image, Container} from '../styles';
import {fetchTVShow} from "../../services/api";
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
  function FooterList({load}){
    if(!load) return null;
    return(
      <View style = {{padding: 10,}}>
        <ActivityIndicator size={25} color = '#E9A6A6'/>
      </View>
    )
  }
  return (
    <FlatList
      data={tvshows}
      numColumns={4}
      keyExtractor={( item, index) => String(index)}
      onEndReached={loadMoreItem}
      onEndReachedThreshold={0.1}
      ListFooterComponent = { <FooterList load={loading} />}
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
