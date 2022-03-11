import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { getPopular } from "../../constants/urls";
import ListMovies from "../ListMovies";

import api from '../../services/api';

function FlatMovies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function getStorage() {
            api.get(`/${getPopular}`)
                .then(response => {
                    
                const data = response.data
                setMovies(data)
                })
                .catch(error => console.log(error))
            }
            getStorage()
    }, [])

    function renderItem({ item }) {
   
        return (
            <TouchableOpacity onPress={ListView}>
                <ListMovies {...item} />
            </TouchableOpacity>
        );
      }
    

    const columns = 5;
    return (
        
        <View>
            <FlatList
                numColumns={columns} 
                data={movies}
                keyExtractor={ item => item.id.toString()}
                renderItem={renderItem}
            />
      </View>  

    );
}
export default FlatMovies;