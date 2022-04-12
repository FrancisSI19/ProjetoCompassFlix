import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  btnsContainer: {
    flexDirection: 'row',

    justifyContent: 'space-between',
    margin: 20,
  },
  goBackBtn: {
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 3,
    paddingVertical: 2,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  title: {
    alignSelf: 'center',
    width: '60%',
    marginTop: 20,
  },
  titleTxt: {
    textAlign: 'center',
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
    color: '#E9A6A6',
  },
  description: {
    alignSelf: 'center',
    marginTop: 30,
    fontFamily: 'OpenSans-Regular',
    fontSize: 11,
    color: '#fff',
  },
  movieList: {
    alignSelf: 'center',
    paddingTop: 20,
  },
  btnRemove: {
    alignSelf: 'flex-start',
    padding: 2,
    position: 'absolute',
    top: 4,
    right: 4,
    borderRadius: 20,
    backgroundColor: '#fff',
  }
});

export default styles;
