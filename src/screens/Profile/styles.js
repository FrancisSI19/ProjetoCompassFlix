import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,

    backgroundColor: '#000'
  },
  btnLeave: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: 28,
    top: 28,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 5,
    backgroundColor: '#E9A6A6'
  },
  txtLeave: {
    fontSize: 10,
    fontFamily: 'OpenSans-SemiBold',
    marginLeft: 6,
    color: '#000'
  },
  profilePic: {
    alignItems: 'center',
    width: 78,
    height: 78,
    marginTop: 60,
    borderRadius: 50
  },
  username: {
    fontSize: 18,
    fontFamily: 'OpenSans-Bold',
    color: '#fff'
  },
botãoVerLista: {
  backgroundColor: '#6C7BFC',
  marginTop: 18,
  borderRadius:5,
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal:6,
  paddingVertical: 4
},
VerListas: {

fontStyle: 'normal',
fontSize: 10,
color: '#FFFFFF',
}

});


export default styles;
