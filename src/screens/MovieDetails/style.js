import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: '#000'
  },
  movieBackground: {
    width: '100%'
  },
  backBtn: {
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
  mainContent: {
    padding: 20,
  },
  movieSection: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    position: 'relative',
    top: -58
  },
  movieCover: {
    borderRadius: 6
  },
  movieInfo: {
    flex: 1,
    marginBottom: 10,
    marginLeft: 20,
  },
  movieTitle: {
    fontSize: 22,
    fontFamily: 'OpenSans-Bold',
    color: '#fff'
  },
  mainInfo: {
    flexDirection: 'row', 
    alignItems: 'baseline',
    justifyContent: 'space-between'
  },
  movieYear: {
    marginLeft: -20,
    fontSize: 12, 
    fontFamily: 'OpenSans-Regular', 
    color: '#fff'
  },
  movieDuration: {
    fontSize: 10, 
    fontFamily: 'OpenSans-Regular' ,
    color: '#fff'
  },
  direction: {
    fontSize: 10, 
    fontFamily: 'OpenSans-Regular',
    color: '#fff'
  },
  director: {
    fontFamily: 'OpenSans-Bold'
  },
  ratingContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop: 10
  },
  voteAverage: {
    fontSize: 30, 
    color: '#E9A6A6'
  },
  voteCountContainer: {
    marginLeft: 50
  },
  voteCount: {
    fontSize: 12, 
    fontFamily: 'OpenSans-Regular',
    color: '#fff'
  },
  overview: {
    marginTop: -24, 
    fontFamily: 'OpenSans-Regular',
    color: '#fff'
  },
  castTag: {
    alignItems: 'center', 
    alignSelf: 'flex-start', 
    marginTop: 24
  },
  castTxt: {
    paddingVertical: 2, 
    paddingHorizontal: 8, 
    borderRadius: 50, 
    fontSize: 12, 
    fontFamily: 'OpenSans-SemiBold',
    backgroundColor: '#9C4A8B', 
    color: '#fff', 
  },
  castBorder: {
    width: 28, 
    marginTop: 4, 
    borderWidth: 0.8,
    borderRadius: 10,
    borderColor: '#9C4A8B'
  },
  actorContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop: 20
  },
  actorPic: {
    width: 46, 
    height: 46,
    borderRadius: 30,
  },
  actorInfo: {
    marginLeft: 14
  },
  actorName: {
    fontSize: 16, 
    fontFamily: 'OpenSans-Bold',
    color: '#fff'
  },
  actorCharacter: {
    fontSize: 10, 
    fontFamily: 'OpenSans-Regular',
    color: '#fff',
  }
});

export default styles;
