import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  season: {
    alignSelf: 'center',
    width: '90%',
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
    alignSelf: 'center',
    width: '90%',
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

export default styles;
