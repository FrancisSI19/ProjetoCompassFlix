import React, { useEffect, useState } from "react";
import { View, FlatList, Image, Text } from "react-native";
import { getPopular } from "../../constants/urls";
import AntDesing from "react-native-vector-icons/AntDesign";


import api from '../../services/api';
import StyledListMovies from "../ListMovies/styles";

function FlatMovies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        function getStorage() {
            api.get(`/${getPopular}`)
                .then(response => {
                const data = (response.data.results)
                setMovies(data)
                })
                .catch(error => console.log(error))
            }
            getStorage()
    }, [])
    
    // function renderItem({ item }) {
   
    //     return (
    //         <TouchableOpacity onPress={ListView}>
    //             <ListMovies {...item} />
    //         </TouchableOpacity>
    //     );
    //   }
    

    return (
        
        <View>
            <FlatList
                numColumns={4} 
                data={movies}
                keyExtractor={ item => item.id.toString()}
                renderItem={({ item }) => {
                    return(
                        <View>
                            <Image
                                style={StyledListMovies.image}
                                source={{ uri: `https://image.tmdb.org/t/p/w342/${item.poster_path}` }}>
                            </Image>
                            
                            <View style={StyledListMovies.view_vote}>
                                <AntDesing name="staro" style={StyledListMovies.icon} />
                                <Text style={StyledListMovies.vote}>{item.vote_average}/10</Text>
                            </View>
                            
                        </View>
                    )
                }}/>
                     
        </View>  

    );
}
export default FlatMovies;
