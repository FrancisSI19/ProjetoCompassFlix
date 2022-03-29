import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
const styles1 = StyleSheet.create({
  imagem: {
    width: 78,
    height: 78,
    left: 100,
    top: 98,
    borderRadius: 40,
  },
});
export const Container = styled.View`
    flex: 1;
    padding: 10px;
    background-color: #000000;
    
`;
export const Imagem = styled.Image`
    position: absolute;
    width: 78px;
    height: 78px;
    left: 160px;
    top: 75px;
    border-radius:40px;

`;

export const Title = styled.Text`
    margin-top: 10px;
    font-size: 18px;
    color: #f8f8ff;
`;
export const Name = styled.Text`

  position: absolute;
  left: 150px;
  top: 176px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  color: #FFFFFF;`

export const Icon1 = styled.Image`
position: absolute;
width: 25.76px;
height: 25.76px;
left: 84px;
top: 310px;`

export const Icon2 = styled.Image`
position: absolute;
width: 30px;
height: 30px;
left: 266px;
top: 310px;`

export const Linha1 = styled.View`
position: absolute;
width: 380px;
height: 0px;
left: 6px;
top: 290px;

border: 1px solid rgba(255, 255, 255, 0.19);
`

export const Linha2 = styled.View`
position: absolute;
width: 380px;
height: 0px;
left: 0px;
top: 350px;

border: 1px solid rgba(255, 255, 255, 0.19);`
export const Meio = styled.View`

position: absolute;
width: 50px;
height: 0px;
left: 185px;
top: 320px;

border: 1px solid rgba(255, 255, 255, 0.19);
transform: rotate(-90deg);`

export const Botão = styled.TouchableOpacity`
  position: absolute;
  width: 50.4px;
  height: 14px;
  left: 300px;
  top: 45px;
  background: #E9A6A6;
  border-radius: 5px;`

export const TxtBotão = styled.Text`
  position: absolute;
  width: 23.8px;
  height: 14px;
  left: 20px;
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 800;
  font-size: 10px;
  line-height: 13px;
  text-align: center;
  color: #000000;`

export const Sair = styled.Image`
  position: absolute;
  width: 11.2px;
  height: 11.2px;
  left: 307px;
  top: 46px;

`
export const ImagemSeriesFilmes = styled.Image`
width: 67px;
height: 80px;
left: 2px;
top: 410px;
border-radius: 7px;
`


export const ViewImagensSeriesFilmes = styled.View`
flex-direction: row;
justify-content:space-around
`
export const SeriesFilmesUsuario = styled.Text`
position: absolute;
width: 114px;
height: 14px;
left: 20px;
top: 384px;

font-family: 'Open Sans';
font-style: normal;
font-weight: 600;
font-size: 10px;
line-height: 14px;
/* identical to box height */


color: #FFFFFF;
`
export const Vermais = styled.TouchableOpacity`
position: absolute;
width: 38px;
height: 12px;
left: 317px;
top: 385px;
`
export const TxtVertudo = styled.Text`
font-family: 'Open Sans';
font-style: normal;
font-weight: 600;
font-size: 9px;
line-height: 12px;
text-align: right;

/* Second Color */

color: #E9A6A6;`
  export default styles1
