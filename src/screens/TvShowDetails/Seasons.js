import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';

import { API_KEY } from '../../constants/constants';
import api from '../../services/api';
import Loading from '../../components/Loading';

export default function Season({ seasons, tvShowId }) {

  const [loading, setLoading] = useState(true);

  const [content, setContent] = useState([]);

  const getSeasonDetails = async () => {
    try {
      for (let index = 0; index < seasons.length; index++) {
        const queryString = `tv/${tvShowId}/season/${seasons[index].season_number}?api_key=${API_KEY}&language=pt-BR`;
        const { data } = await api.get(queryString);
        const season = {};

        season.title = seasons[index].name;
        season.content = data.episodes;

        setContent(prevContent => [...prevContent, season]);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    getSeasonDetails();
  }, [])

  const [activeSections, setActiveSections] = useState([]);
  const setSections = (sections) => {
    setActiveSections(sections.includes(undefined) ? [] : sections);
  }

  const renderHeader = (section, _, isActive) => {
    return (
      <View
        style={[styles.season]}
      >
        <View style={styles.seasonTextContainer}>
          <Text style={styles.seasonText}>{section.title}</Text>
          <Ionicons name={isActive ? 'chevron-up' : 'chevron-down'} size={14} color='#fff' />
        </View>

        <View style={[styles.seasonBorder, isActive ? styles.active : styles.inactive]} />
      </View>
    );
  };

  const renderContent = (section, _, isActive) => {
    return (
      <>
        {section.content.map(episode => {
          return (
            <View
              style={[styles.episode]}
              key={episode.id}
            >
              <Animatable.Text
                style={styles.episodeText}
                animation={isActive ? 'bounceIn' : undefined}
                duration={600}
              >
                T{episode.season_number < 10 ? `0${episode.season_number}` : episode.season_number} |
                E{episode.episode_number < 10 ? `0${episode.episode_number}` : episode.episode_number}
              </Animatable.Text>

              <Animatable.Text
                style={styles.episodeName}
                animation={isActive ? 'bounceIn' : undefined}
                duration={600}
              >
                {episode.name}
              </Animatable.Text>
            </View>
          )
        })}
      </>
    );
  }

  return loading ? <Loading size={40} /> : (
    <Accordion
      activeSections={activeSections}
      sections={content}
      touchableComponent={TouchableOpacity}
      renderHeader={renderHeader}
      renderContent={renderContent}
      duration={400}
      onChange={setSections}
      renderAsFlatList={false}
    />
  );
}

const styles = StyleSheet.create({
  season: {
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  seasonTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 13,
    paddingBottom: 9,
  },
  seasonText: {
    marginRight: 5,
    fontFamily: 'OpenSans-Bold',
    fontSize: 14,
    color: '#fff',
  },
  seasonBorder: {
    width: '100%',
    height: 4,
    borderBottomStartRadius: 5,
    borderBottomEndRadius: 5,
  },
  episode: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  episodeText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 12,
    color: '#fff',
  },
  episodeName: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 10,
    color: '#fff',
  },
  active: {
    backgroundColor: '#E9A6A6',
  },
  inactive: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  }
});

// const styles = StyleSheet.create({
//   seasonContainer: {
//     width: '100%',
//     alignSelf: 'center',
//     marginBottom: 10,
//     borderRadius: 5,
//     backgroundColor: 'rgba(255, 255, 255, 0.5)'
//   },
//   seasonTextContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginLeft: 14,
//     marginTop: 12
//   },
//   seasonText: {
//     marginRight: 8,
//     color: '#fff',
//     fontFamily: 'OpenSans-Bold'
//   },
//   seasonBorder: {
//     width: '100%',
//     height: 5,
//     marginTop: 8,
//     borderBottomStartRadius: 5,
//     borderBottomEndRadius: 5
//   },
//   episodeContainer: {
//     width: '100%',
//     alignSelf: 'center',
//     paddingHorizontal: 14,
//     paddingVertical: 8,
//     marginBottom: 10,
//     borderRadius: 5,
//     backgroundColor: 'rgba(255, 255, 255, 0.5)'
//   },
//   episodeNumberContainer: {
//     flexDirection: 'row'
//   },
//   episodeNumberText: {
//     fontFamily: 'OpenSans-Bold',
//     fontSize: 12,
//     color: '#fff'
//   },
//   episodeDescription: {
//     fontFamily: 'OpenSans-SemiBold',
//     fontSize: 9,
//     color: '#fff'
//   }
// });
