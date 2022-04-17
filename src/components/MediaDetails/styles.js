import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
    backgroundColor: '#fff',
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
    backgroundColor: '#fff',
  },
  mainSection: {
    padding: 20
  },
  poster: {
    position: 'absolute',
    top: -40,
    left: 20
  },
  posterImg: {
    width: 116,
    height: 178,
    borderRadius: 6
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
  infoContainer: {
    width: '64%',
    position: 'absolute',
    top: 4,
    right: 20,
  },
  title: {
    fontSize: 22,
    fontFamily: 'OpenSans-Bold',
    color: '#fff',
  },
  timeInfoContainer: {
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  releaseYear: {
    fontSize: 12,
    fontFamily: 'OpenSans-Regular',
    color: '#fff',
  },
  runtime: {
    fontSize: 10,
    fontFamily: 'OpenSans-Regular',
    color: '#fff',
  },
  directionText: {
    fontSize: 10,
    fontFamily: 'OpenSans-Regular',
    color: '#fff',
  },
  directorName: {
    fontFamily: 'OpenSans-Bold',
  },
  ratingContainer: {
    marginTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  voteAverage: {
    fontSize: 30,
    color: '#E9A6A6',
  },
  voteCountContainer: {
    alignItems: 'center',
    marginLeft: 40,
  },
  voteCount: {
    fontSize: 12,
    fontFamily: 'OpenSans-Regular',
    color: '#fff',
  },
  containerAddMovie: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: '#C4C4C4',
  },
  btnAddMovie: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  txtAddMovie: {
    marginHorizontal: 8,
    marginVertical: 6,
    fontFamily: 'OpenSans-Bold',
    fontSize: 9,
    color: '#000'
  },
  overview: {
    marginTop: 160,
    fontFamily: 'OpenSans-Regular',
    color: '#fff'
  },
});

export default styles;
