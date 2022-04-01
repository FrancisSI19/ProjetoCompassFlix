import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
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
  posterEnvelope: {
    position: 'absolute',
    top: -40,
    left: 20
  },
  poster: {
    width: 116,
    height: 178,
    borderRadius: 6
  },
  btnRate: {
    alignItems: 'center',
    marginTop: -4,
    padding: 4,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: '#E9A6A6'
  },
  txtRate: {
    textTransform: 'uppercase',
    fontSize: 10,
    fontFamily: 'OpenSans-Bold',
    color: '#000'
  },
  btnRated: {
    alignItems: 'center',
    marginTop: -4,
    padding: 4,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: '#8BE0EC'
  },
  txtRated: {
    textTransform: 'capitalize',
    fontSize: 10,
    fontFamily: 'OpenSans-Bold',
    color: '#000'
  },
  icon: {
    position: 'absolute',
    top: -4,
    right: -4,
    padding: 1,
    borderRadius: 30,
    backgroundColor: '#C4C4C4'
  },
  mediaInfoEnvelope: {
    width: '64%',
    position: 'absolute',
    top: 10,
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
  directionText: {
    fontSize: 10,
    fontFamily: 'OpenSans-Regular',
    color: '#fff'
  },
  directorName: {
    fontFamily: 'OpenSans-Bold'
  },
  ratingEnvelope: {
    marginTop: 10,
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
    color: '#fff',
    marginBottom: 20
  },
  seasonContainer: {
    width: '100%',
    alignSelf: 'center',
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
  },
  seasonText: {
    color: '#fff',
    fontFamily: 'OpenSans-Bold',
    marginLeft: 14,
    marginTop: 12
  },
  seasonBorder: {
    width: '100%',
    height: 4,
    marginTop: 8,
    borderBottomStartRadius: 5,
    borderBottomEndRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
  }
});

export default styles;
