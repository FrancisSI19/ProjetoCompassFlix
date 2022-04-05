import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1px;
    background-color: #000000;
    padding: 10px;
    align-items: center;
    justify-content: center;

`;

export const Title = styled.Text`
    font-size: 28px;
    color: #f8f8ff;
    font-weight: bold;
    text-align: center;
    margin-top: 60px;

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

