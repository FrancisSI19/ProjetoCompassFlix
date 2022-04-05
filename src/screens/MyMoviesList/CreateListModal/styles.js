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
    paddingVertical: 4,
    width: 277,
    left:-90,
    top:-10,
    textAlign: 'center',
    fontSize: 14,
    borderRadius: 50,
    backgroundColor: 'rgba(196, 196, 196, 0.35)',
    color: '#000', height: 26,
  },

  width: 277,
  left:-90,
  top:-10,
  textAlign: 'center',
  fontSize: 14,
  borderRadius: 5,
  backgroundColor: 'rgba(196, 196, 196, 0.35)',
  color: '#000', height: 26,


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
    top:40,
    right:80
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
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#000',
    top:25,
    left:65
  },
  textOk: {
    textTransform: 'uppercase',
    fontSize: 10,
    fontFamily: 'OpenSans-Bold',
    color: '#fff'
  }
});

export default styles;
