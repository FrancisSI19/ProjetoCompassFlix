import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#000'
  },
  backdrop: {
    width: '100%',
    height: 160
  },
  btnBack: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    borderRadius: 30,
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: '#fff'
  },
  btnFavorite: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    borderRadius: 30,
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#fff'
  },
  mainSection: {
    padding: 20
  },
  poster: {
    width: 116,
    height: 182,
    position: 'absolute',
    top: -40,
    left: 20,
    borderRadius: 6
  },
  mediaInfoEnvelope: {
    width: '64%',
    position: 'absolute',
    top: 4,
    right: 20,
  },
  mainMediaInfo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'baseline'
  },
  title: {
    fontSize: 22,
    fontFamily: 'OpenSans-Bold',
    color: '#fff'
  },
  timeInfoEnvelope: {
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'baseline'
  },
  releaseYear: {
    fontSize: 12,
    fontFamily: 'OpenSans-Regular',
    color: '#fff'
  },
  runtime: {
    fontSize: 10,
    fontFamily: 'OpenSans-Regular',
    color: '#fff'
  },
  directionText: {
    fontSize: 10,
    fontFamily: 'OpenSans-Regular',
    color: '#fff'
  },
  directorName: {
    fontFamily: 'OpenSans-Bold'
  },
  ratingEnvelope: {
    marginTop: 6,
    flexDirection: 'row',
    alignItems: 'center'
  },
  voteAverage: {
    fontSize: 30,
    color: '#E9A6A6'
  },
  voteCountEnvelope: {
    alignItems: 'center',
    marginLeft: 40
  },
  voteCount: {
    fontSize: 12,
    fontFamily: 'OpenSans-Regular',
    color: '#fff'
  },
  overview: {
    marginTop: 160,
    fontFamily: 'OpenSans-Regular',
    color: '#fff'
  },
  castTag: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginTop: 24
  },
  castText: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 50,
    fontSize: 12,
    fontFamily: 'OpenSans-SemiBold',
    backgroundColor: '#9C4A8B',
    color: '#fff'
  },
  castBorder: {
    width: 28,
    marginTop: 4,
    borderWidth: 0.8,
    borderRadius: 10,
    borderColor: '#9C4A8B'
  },
  castEnvelope: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
  },
  castProfile: {
    width: 46,
    height: 46,
    borderRadius: 30
  },
  castInfoEnvelope: {
    marginLeft: 14
  },
  castName: {
    fontSize: 16,
    fontFamily: 'OpenSans-Bold',
    color: '#fff'
  },
  characterName: {
    fontSize: 10,
    fontFamily: 'OpenSans-Regular',
    color: '#fff'
  }
});

export default styles;
