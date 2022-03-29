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
  top: 330px;`

export const Icon2 = styled.Image`
  position: absolute;
  width: 30px;
  height: 30px;
  left: 266px;
  top: 329px;`

export const Linha1 = styled.View`
  position: absolute;
  width: 380px;
  height: 0px;
  left: 6px;
  top: 317px;
  border: 1px solid rgba(255, 255, 255, 0.19);
`

export const Linha2 = styled.View`
  position: absolute;
  width: 380px;
  height: 0px;
  left: 0px;
  top: 368px;
  border: 1px solid rgba(255, 255, 255, 0.19);`

export const LinhaMeio = styled.View`
  position: absolute;
  width: 50px;
  height: 0px;
  left: 185px;
  top: 345px;
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
export default styles1