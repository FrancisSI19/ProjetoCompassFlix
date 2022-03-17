import React from 'react';
import {Modal} from 'react-native';
import MovieList from '../../screens/MovieList';
import { Container, Title, SubTitle, TitleList } from './styles';


function ListMovies() {
  return (
    <>
      
      <Container>
            <Title>Olá, Compasses</Title>
                <SubTitle>Reveja ou acompanhe os filmes que você assistiu...</SubTitle>
                  <TitleList>Filmes populares este mês</TitleList>
          
                  <MovieList/>
              </Container>
    </>
  );
}

export default ListMovies;
