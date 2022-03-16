import React from 'react';
import {Modal} from 'react-native';
import MovieList from '../../screens/MovieList';
import { Container, Title, SubTitle, TitleList } from './styles';


function ListMovies() {
  return (
    <>
      <Modal animationType="slide">
        <Container>
            <Title>Olá, Compasses</Title>
                <SubTitle>Reveja ou acompanhe os filmes que você assistiu...</SubTitle>
                  <TitleList>Filmes populares este mês</TitleList>
          
                  <MovieList/>
              </Container>
              
      </Modal>
      
    </>
  );
}

export default ListMovies;
