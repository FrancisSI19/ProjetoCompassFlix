import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '75%'
  },
  input: {
    fontFamily: 'OpenSans-Regular',
    width: '100%',
    height: 45,
    paddingLeft: 40,
    marginTop: 16,
    borderRadius: 30,
    backgroundColor: 'rgba(196, 196, 196, 0.35)',
  },
  icon: {
    position: 'absolute',
    top: 28,
    left: 14
  }
});

export default styles;
