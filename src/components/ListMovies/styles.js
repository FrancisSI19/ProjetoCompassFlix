import { StyleSheet } from 'react-native';

const StyledListMovies = StyleSheet.create({
  information: {
    flex: 1,
        padding: 12,
        backgroundColor: '#000000',
      
    },
    image: {
        marginTop: 15,
      
        width: 75,
        height: 95,
        borderRadius: 10,
        marginHorizontal: 8,
        marginVertical: 8
    },
    title: {
        marginTop: 10,
        fontSize: 18,
        color: '#f8f8ff'
    },
    subtitle: {
            marginTop: 10,
            fontSize: 12,
            color: '#f8f8ff'
    },
    titleList: {
        marginTop: 14,
        fontSize: 20,
        color: '#f8f8ff'
    },
    vote: {
        marginLeft: 8,
        fontSize: 8,
        color: '#f8f8ff',
        
    },
    icon: {
        fontSize: 8,
        color: 'red',
        marginTop: 2
    },
    view_vote: {
        flexDirection: 'row',
        marginLeft: 12,
        
    }
    
           
 });

export default StyledListMovies;
