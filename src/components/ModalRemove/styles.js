import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  container: {
    width: '95%',
    padding: 30,
    borderRadius: 25,
    backgroundColor: '#fff',
  },
  attention: {
    fontWeight: 'bold',
    color: '#000',
  },
  description: {
    marginTop: 20,
    fontSize: 13,
    color: '#8E8E8E',
  },
  btnsContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '64%',
    height: 24,
    marginTop: 40,
  },
  btnNo: {
    width: 84,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#000'
  },
  textNo: {
    textTransform: 'uppercase',
    fontSize: 10,
    fontFamily: 'OpenSans-Bold',
    color: '#fff'
  },
  btnYes: {
    width: 84,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
  },
  textYes: {
    textTransform: 'uppercase',
    fontSize: 10,
    fontFamily: 'OpenSans-Bold',
    color: '#000'
  },
});

export default styles;
