import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1px;
    background-color: #000000;
    align-items: center;
`;

export const Title = styled.Text`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    color: #FFFFFF;
`;

export const ContainerLista = styled.View`
    flex-direction: row;
    margin-left: 12px;
`;

export const ButtonAdd = styled.TouchableOpacity`
    margin-top: 15px;
    width: 51px;
    height: 51px;
    border-radius: 30px;
    position: absolute;
    align-items: center;
    justify-content: center;
    right: 30px;
    bottom: 30px;
    color: #fff;
`;

export const IconBack = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 30px;
    position: absolute;
    top: 20px;
    left: 20px;
    background-color: #fff;
`;

export const ContainerList = styled.TouchableOpacity`
    width: 326px;
    height: 79px;
    padding-left:20px;
    margin-top: 200px;
    margin-Top: 10px;
    background: #8F9AFC;
    border-radius: 10px;
`;

export const ContainerDel = styled.TouchableOpacity`
    width: 27px;
    height: 79px
    top: -43px;
    margin-Top: 10px;
    left: 280px;
    background: #E9A6A6;
    border-radius: 8px
`;

export const TextoContagemFilmes = styled.Text`
    left: 62px;
    top: 211px;
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
    color: #FFFFFF;
`;
