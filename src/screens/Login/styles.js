<<<<<<< HEAD
import styled from 'styled-components/native';

export const Container = styled.View`
    flex:;
    align-Items: center;
    backgroundColor: #000
`;

export const ImageLogo = styled.Image`
    position: absolute;
    top: 208px
`;

export const Login1 = styled.Text`
    font-family: 'Open Sans';
    font-Size:24px;
    color: #fff;
    font-style: normal;
    font-weight: 700;
    line-height: 33px;
    text-align: center;
`;

export const LoginDescri = styled.Text`
    font-family: Open Sans;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
    color:#FFFFFF;
`;

export const Button = styled.TouchableOpacity`
    position: absolute;
    width: 95px;
    height: 35px;
    left: 140px;
    top: 599px;
    background: #E9A6A6;
    border-radius: 30px;
`;

export const Entrar = styled.Text`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    top: 8px;
    font-size: 15px;
    line-height: 19px;
    color: #000;
    text-align: center;
`;
=======
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
  enterBtn: {
    fontFamily: 'OpenSans-SemiBold',
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 40,
    marginTop: 40,
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
>>>>>>> 7a0ce2821bf59a8bc63e7a1001f50493ee230322
