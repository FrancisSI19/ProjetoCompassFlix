import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1px;
    padding: 20px;
    background-color: #000000;
`;

export const IconBack = styled.TouchableOpacity`
    align-self: flex-start;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 30px;
    background-color: #fff;
`;

export const Title = styled.Text`
    align-self: center;
    margin-top: 20px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #FFFFFF;
`;

export const ListContainer = styled.View`
    flex-direction: row;
    width: 100%;
    height: 80px;
    margin-top: 40px;
`;

export const ListContentContainer = styled.TouchableOpacity`
    width: 92%;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background-color: #8F9AFC;
    color: #FFF;
`;

export const ListContent = styled.View`
    justify-content: space-around;
    width: 40%;
    height: 100%;
    margin-left: 40px;
    color: #FFF;
`;

export const ListName = styled.Text`
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    color: #FFF;
`;

export const ListMovieText = styled.Text`
    font-size: 8px;
    font-weight: bold;
    text-transform: uppercase;
    color: #FFF;
`;

export const ListButtonDelete = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width: 8%;
    height: 100%;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: #E9A6A6;
`

export const ContainerList = styled.TouchableOpacity`
    width: 326px;
    height: 80px;
    padding-left:20px;
    margin-Top: 10px;
    background: #8F9AFC;
    border-radius: 10px;
`;

export const ButtonAdd = styled.TouchableOpacity`
    margin-top: 15px;
    width: 51px;
    height: 51px;
    border-radius: 30px;
    border: 1px;
    border-color: #FFFF;
    background-color: #E9A6A6;
    position: absolute;
    align-items: center;
    justify-content: center;
    right: 30px;
    bottom: 30px;
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

export const TextCounter = styled.Text`
    top: 38px;
    font-family: 'Open Sans';
    font-weight: 700, bold;
    font-size: 8px;
    line-height: 14px;
    color: #FFFFFF;
    weight: bold;
`;

export const TextName = styled.Text`
    top: 15px;
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
`;
