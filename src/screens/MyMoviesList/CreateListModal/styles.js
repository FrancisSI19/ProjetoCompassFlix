import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  envelope: {
    alignItems: 'center',
    width: '88%',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20
  },
  title: {
    fontSize: 18,
    fontFamily: 'OpenSans-Bold',
    color: '#000'
  },
  ratingEnvelope: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
  },
  icon: {
    position: 'absolute',
    top: 4,
    left: 4
  },
  inputEnvelope: {
    width: '28%',
  },
  input: {
    width: 277,
    height: 42,
    paddingVertical: 4,
    fontSize: 14,
    borderRadius: 5,
    backgroundColor: 'rgba(196, 196, 196, 0.35)',
    color: '#000', height: 26,
    right:85
  },
  input2: {
    width: 277,
    height: 42,
    left: -85,
    top: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(196, 196, 196, 0.35)',
  },
  maxVote: {
    fontSize: 18,
    fontFamily: 'OpenSans-Bold',
    color: '#000'
  },
  invalidRating: {
    marginTop: 6,
    fontSize: 12,
    fontFamily: 'OpenSans-Regular',
    color: '#EC2626'
  },
  btnsEnvelope: {
    width: '64%',
    height: 24,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  btnCancel: {
    width: 84,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    right: 50,
    top:25
  },
  textCancel: {
    textTransform: 'uppercase',
    fontSize: 10,
    fontFamily: 'OpenSans-Bold',
    color: '#000'
  },
  btnOk: {
    width: 84,
    alignItems: 'center',
    borderWidth: 1,
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#000',
    left:50,
    top:10
  },
  textOk: {
    textTransform: 'uppercase',
    fontSize: 10,
    fontFamily: 'OpenSans-Bold',
    color: '#fff'
  },

});

export default styles;
