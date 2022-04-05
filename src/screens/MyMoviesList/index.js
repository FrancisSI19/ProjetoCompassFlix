import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import AntDesing from "react-native-vector-icons/AntDesign";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Container, ButtonAdd, IconBack, Title } from './styles';
import { useNavigation } from '@react-navigation/native';

const MyMoviesList = () => {

  const navigation = useNavigation();
  const clickHandler = () => {
    alert('Botão Clicado');
  };

  return (

    <Container>
      <IconBack
        onPress={() => navigation.navigate('Profile')}
      >
        <Ionicons name='arrow-back' size={26} color='#000' />
      </IconBack>
      <ScrollView>
        <Container>

          <Title>
            Minhas Listas
          </Title>
        </Container>
      </ScrollView>
      <ButtonAdd
        onPress={clickHandler}
      >
        <AntDesing name="pluscircle" size={50} color="#E9A6A6" />

      </ButtonAdd>
    </Container>
  );
};


export default MyMoviesList;

