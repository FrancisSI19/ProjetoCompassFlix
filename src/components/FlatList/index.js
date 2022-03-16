import React, { useEffect, useState } from "react";
import {
    View,
    FlatList,
    Image,
    Text,
    ActivityIndicator,
    TouchableOpacity
} from "react-native";
import { getPopular } from "../../constants/urls";
import AntDesing from "react-native-vector-icons/AntDesign";
import api from '../../services/api';
import StyledListMovies from "../ListMovies/styles";
import { API_KEY } from "../../constants/constants";

function FlatMovies() {
    const [movies, setMovies] = useState([]);
    const [PAGE_NUMBER, setPAGE_NUMBER] = useState(1);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        function getStorage() {
            setIsLoading(true)
            api.get(`movie/popular?api_key=${API_KEY}&language=pt-BR&page=${PAGE_NUMBER}`)
                .then(response => {
                    //const data = (response.data.results)
                    setMovies([...response.data.results])
                    setIsLoading(false);
                })
                .catch(error => console.log(error))
            }
            getStorage()
    }, [PAGE_NUMBER])
    
    function renderItem({ item }) {
   
        return (
            <TouchableOpacity>
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
            </TouchableOpacity>
        );
      }
    
    const renderLoader = () => {
        return (
            isLoading ?
                <View>
                    <ActivityIndicator size="large" color="#aaa" />
                </View> : null
    
        );
    }
    const loadMoreItem = () => {
        setPAGE_NUMBER(PAGE_NUMBER + 1);
    }
    return (
        
      
            <FlatList
                numColumns={4} 
                data={movies}
                keyExtractor={ item => item.id}
                renderItem={renderItem}
                ListFooterComponent={renderLoader}
                onEndReached={loadMoreItem}
                onEndReachedThreshold={0}
            />
        

    );
}
export default FlatMovies;
