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
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    borderRadius: 25,
    backgroundColor: '#fff',
  },
  checkIcon: {
    paddingHorizontal: 4,
    paddingVertical: 3,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: '#000',
  },
  exclamationIcon: {
    paddingHorizontal: 9,
    paddingVertical: 3,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: '#000',
  },
  successTxt: {
    marginVertical: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  okBtn: {
    alignSelf: 'center',
    paddingHorizontal: 38,
    paddingVertical: 4,
    borderRadius: 5,
    backgroundColor: '#000',
  },
  okTxt: {
    textTransform: 'uppercase',
    fontFamily: 'OpenSans-Bold',
    fontSize: 10,
    color: '#fff',
  }
})

export default styles;
