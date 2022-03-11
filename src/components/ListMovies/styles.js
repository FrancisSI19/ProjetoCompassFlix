import { StyleSheet } from 'react-native';

const StyledListMovies = StyleSheet.create({
  information: {
    flex: 1,
        padding: 24,
        backgroundColor: '#000000',
        alignItems: 'center'
    },
    image: {
        marginTop: 10,
        alignSelf: 'center',
        width: 70,
        height: 70,
    },
    title: {
        marginTop: 10,
        alignSelf: 'center',
        fontSize: 20,
        color: '#f8f8ff'
    },
    subtitle: {
            marginTop: 10,
            alignSelf: 'center',
            fontSize: 20,
            color: '#f8f8ff'
    },
    titleList: {
        marginTop: 10,
        alignSelf: 'center',
        fontSize: 20,
        color: '#f8f8ff'
        },
    
           
 });

export default StyledListMovies;