import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { API_KEY } from '../../constants/constants';
import api from '../../services/api';
import Loading from '../../components/Loading';

export default function Season({ seasonsCount, tvShowId }) {
  const {
    seasonContainer,
    seasonText,
    seasonBorder,
    episodeContainer,
    episodeNumberContainer,
    episodeNumberText,
    episodeDescription,
    seasonTextContainer
  } = styles;

  const [collapsed, setCollapsed] = useState(true);
  const [loading, setLoading] = useState(true);

  const toggleExpanded = () => {
    setCollapsed(!collapsed);
  };

  const [episodes, setEpisodes] = useState([]);

  const getSeasonDetails = async () => {
    console.log(tvShowId);
    try {
      const queryString = `tv/${tvShowId}/season/${1}?api_key=${API_KEY}&language=pt-BR`;
      const { data } = await api.get(queryString);

      setEpisodes(data.episodes);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    getSeasonDetails();
  }, [])

  return loading ? <Loading size={40} /> : (
    <View>
      <TouchableOpacity onPress={toggleExpanded}>
        <View style={seasonContainer}>
          <View style={seasonTextContainer}>
            <Text style={seasonText}>Temporada 1</Text>
            <Ionicons  name={collapsed ? 'chevron-down' : 'chevron-up'} size={16} color='#fff' />
          </View>

          <View style={[seasonBorder, { backgroundColor: collapsed ? 'rgba(255, 255, 255, 0.5)' : '#E9A6A6' }]} />
        </View>
      </TouchableOpacity>

      <Collapsible collapsed={collapsed} align="center">
      {
        episodes.map(episode => {
          return (
            <View style={episodeContainer} key={episode.id}>
              <View style={episodeNumberContainer}>
                <Text style={episodeNumberText}>
                  T{episode.season_number < 10 ? `0${episode.season_number}` : episode.season_number}
                  |
                  {episode.episode_number < 10 ? `0${episode.episode_number}` : episode.episode_number}
                </Text>
              </View>
              <Text style={episodeDescription}>
                {episode.overview !== ''
                ? episode.overview
                : 'Resumo do episódio não disponível no momento.'}
              </Text>
            </View>
          );
        })
      }
      </Collapsible>
    </View>
  );
}

const styles = StyleSheet.create({
  seasonContainer: {
    width: '100%',
    alignSelf: 'center',
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
  },
  seasonTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 14,
    marginTop: 12
  },
  seasonText: {
    marginRight: 8,
    color: '#fff',
    fontFamily: 'OpenSans-Bold'
  },
  seasonBorder: {
    width: '100%',
    height: 5,
    marginTop: 8,
    borderBottomStartRadius: 5,
    borderBottomEndRadius: 5
  },
  episodeContainer: {
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
  },
  episodeNumberContainer: {
    flexDirection: 'row'
  },
  episodeNumberText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 12,
    color: '#fff'
  },
  episodeDescription: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 9,
    color: '#fff'
  }
});

// const styles = StyleSheet.create({
//   header: {
//     backgroundColor: '#F5FCFF',
//     padding: 10,
//   },
//   headerText: {
//     textAlign: 'center',
//     fontSize: 16,
//     fontWeight: '500',
//   },
//   content: {
//     padding: 20,
//     backgroundColor: '#fff',
//   },
// });
