import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000'
  },
  logo: {
    position: 'absolute',
    top: 208
  },
  loginText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 24,
    color: '#fff'
  },
  loginDescription: {
    fontFamily: 'OpenSans-SemiBold',
    marginBottom: 10,
    fontSize: 13,
    color: '#fff'
  },
  signInBtn: {
    fontFamily: 'OpenSans-SemiBold',
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 40,
    borderRadius: 30,
    backgroundColor: '#E9A6A6'
  },
  enterTxt: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    color: '#1F1D36'
  }
});

export default styles;
