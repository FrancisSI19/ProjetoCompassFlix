import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {fetchCredits, fetchDetails} from '../../services/api';
import Loading from '../../components/Loading';
import {
  Container, ContainerDetails, IconBack, MovieBackground, MovieSection,
  Image, MovieInformationContainer, MovieInformation, Title,
  ContainerText, MovieYear, MovieDuration, Direction,
  ContainerRating, VoteAverage, ContainerVote, VoteCount,
  Overview, CastTag, Cast, Border, CastContainer, CastImage,
  ContainerCastInfo, NameCast, NameCharacter, Director
} from './styles';
import { ScrollView } from 'react-native';

  const MovieDetails = ({ navigation, route }) => {
  const [credits, setCredits] = useState(null);
  const [loading, setLoading] = useState(true);
  const [director, setDirector] = useState('');

  const [backdrop, setBackdrop] = useState('');
  const [poster, setPoster] = useState('');
  const [title, setTitle] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [runtime, setRuntime] = useState('');
  const [voteAverage, setVoteAverage] = useState('');
  const [voteCount, setVoteCount] = useState('');
  const [overview, setOverview] = useState('');
  const [cast, setCast] = useState([]);

  const {movieId} = route.params;
  

  useEffect(() => {
    setLoading(true);

    fetchDetails(movieId).then((data) => {
      setBackdrop(data.backdrop);
      setPoster(data.poster);
      setTitle(data.title);
      setReleaseYear(new Date(data.releaseDate).getFullYear());
      setRuntime(data.runtime);
      setVoteAverage(data.voteAverage);
      setVoteCount(data.voteCount);
      setOverview(data.overview);
    })

    fetchCredits(movieId).then((data) => {
      setCredits(data.credits);
      setDirector(data.director);
      setCast(data.cast);
    });

    setLoading(false);
  }, []);

  return loading ? <Loading /> : (
    <Container>
      <ScrollView>
        <MovieBackground
          source={{ uri: `https://image.tmdb.org/t/p/w780${backdrop}` }}
        />

        <IconBack onPress={() => navigation.navigate('ListMovies')}>
          <Icon name='arrow-back' size={24} color='#000' />
        </IconBack>

        <ContainerDetails>
          <MovieSection>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w780${poster}` }} 
            />

            <MovieInformationContainer>
              <MovieInformation>
                <Title>{title}</Title>
                <ContainerText>
                  <MovieYear>{releaseYear}</MovieYear>
                  <MovieDuration>{runtime} min</MovieDuration>
                </ContainerText>
              </MovieInformation>

              <Direction>
                Direção por 
                <Director> {director?.name}</Director>
              </Direction>

              <ContainerRating>
                <VoteAverage>{voteAverage}/10</VoteAverage>

                <ContainerVote>
                  <Icon name='heart' size={24} color='#EC2626' />
                  <VoteCount>{voteCount >= 1000 ? `${(voteCount/1000).toFixed(0)}k` : voteCount}</VoteCount>
                </ContainerVote>
              </ContainerRating>
            </MovieInformationContainer>
          </MovieSection>

          <Overview>
            {overview}
          </Overview>
          
          <CastTag>
            <Cast>Elenco</Cast>
            <Border/>
          </CastTag>
          
          {
            cast.map(item => {
              return (
                <CastContainer key={item.id}>
                  <CastImage
                    source={{ uri: `https://image.tmdb.org/t/p/w780${item.profilePath}` }} 
                  />
                  <ContainerCastInfo>
                    <NameCast>{item.originalName}</NameCast>
                    <NameCharacter>{item.characterName}</NameCharacter>
                  </ContainerCastInfo>
                </CastContainer>
              );
            })
          }
          </ContainerDetails>
        </ScrollView>
    </Container>
  );
};

export default MovieDetails;
