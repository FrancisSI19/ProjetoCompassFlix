import styled from "styled-components/native";

export const Container = styled.View`
   background-color: #000;
    
`;

export const MovieBackground = styled.Image`
    width: 100%;
    height: 160px;
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
export const ContainerDetails = styled.View`
    padding: 20px;
`;

export const MovieSection = styled.View`
    flex-direction: row;
    align-items: flex-end;
    position: relative;
    top: -58px;
`

export const Image = styled.Image`
    margin-top: 15px;
    width: 116px;
    height: 182px;
    border-radius: 6px;
    
`;

export const MovieInformationContainer = styled.View`
    flex: 1;
    flex-wrap: wrap;
    margin-left: 20px;
`;

export const MovieInformation = styled.View`
    flex-direction: row;
    align-items: baseline;
    flex-wrap: wrap;
`;

export const Title = styled.Text`
    margin-right: 10px;
    font-size: 22px;
    font-family: OpenSans-Bold;
    color: #fff;
`;

export const ContainerText = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const MovieYear = styled.Text`
    font-size: 12px;
    font-family: OpenSans-Regular; 
    color: #fff;
`;

export const MovieDuration = styled.Text`
    margin-left: 20px;
    font-size: 10px;
    font-family: OpenSans-Regular;
    color: #fff;
`;

export const Direction = styled.Text`
    font-size: 10px; 
    font-family: OpenSans-Regular;
    color: #fff;
`;
export const Director = styled.Text`
    font-family: OpenSans-Bold;
`;

export const ContainerRating = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
`;
export const VoteAverage = styled.Text`
    font-size: 30px; 
    color: #E9A6A6;
`;

export const ContainerVote = styled.View`
    align-items: center;
    margin-left: 50px;
`;

export const VoteCount = styled.Text`
    font-size: 12px; 
    font-family: OpenSans-Regular;
    color: #fff;
`;

export const Overview = styled.Text`
    margin-top: -22px;
    font-family: OpenSans-Regular;
    color: #fff;
`;

export const CastTag = styled.View`
    align-items: center;
    align-self: flex-start;
    margin-top: 24px;
`;

export const Cast = styled.Text`
    padding-vertical: 2px;
    padding-horizontal: 8px;
    border-radius: 50px;
    font-size: 12px;
    font-family: OpenSans-SemiBold;
    background-color: #9C4A8B;
    color: #fff;
`;

export const Border = styled.View`
    width: 28px;
    margin-top: 4px; 
    border-width: 0.8px;
    border-radius: 10px;
    border-color: #9C4A8B;
`;

export const CastContainer = styled.View`
    flex-direction: row;
    align-items: center; 
    margin-top: 20px
`;

export const CastImage = styled.Image`
    width: 46px;
    height: 46px;
    border-radius: 30px;
`;
export const ContainerCastInfo = styled.View`
    margin-left: 14px;
`;

export const NameCast = styled.Text`
    font-size: 16px; 
    font-family: OpenSans-Bold;
    color: #fff;
`;
export const NameCharacter = styled.Text`
    font-size: 10px;
    font-family: OpenSans-Regular;
    color: #fff;
`;