import React, { useEffect, useState } from "react";
import { View, FlatList, Image, Text } from "react-native";
import { getPopular } from "../../constants/urls";
import ListMovies from "../ListMovies";

import api from '../../services/api';
import StyledListMovies from "../ListMovies/styles";

function FlatMovies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function getStorage() {
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
                            <Text style={StyledListMovies.subtitle}>{item.vote_average}</Text>
                        </View>
                    )
                }}/>
                     
        </View>  

    );
}
export default FlatMovies;
