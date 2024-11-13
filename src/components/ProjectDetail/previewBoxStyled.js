import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1vw;
    margin-top: 1vw;
`;

export const LeftBox = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2vw;
`;

export const Img = styled.img`
    width: 100%;
`;

export const ChoiceBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 0.2vw;
`;

export const ChoiceLine = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 0.3vw;
`;

export const GerneContainer = styled.div`
    width: fit-content;
    border: 1px solid #00C13A;
    border-radius: 18px;
    color: #00C13A;
    padding: 0.4vw 0.6vw;
`;

export const StackContainer = styled.div`
    width: fit-content;
    border: 1px solid #00C13A;
    border-radius: 18px;
    color: #00C13A;
    padding: 0.4vw 0.6vw;
`;

export const RightBox = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const Title = styled.div`
    max-width: 98%;
    height: fit-content;
    font-size: 24px;
    color: white;
`;

export const SortText = styled.div`
    color: #999999;
    font-size: 14px;
    margin-top: 1vw;
    margin-bottom: 0.5vw;
`;

export const ContributeList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.5vw;
`;

export const CWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.2vw;
`;

export const Contributer = styled.div`
    color: white;
`;

export const Divide = styled.div`
    color: #999999;
`;

export const ContributerDetail = styled.div`
    color: #00C13A;
`;

export const ProjectLength = styled.div`
    color: white;
`;

export const LinkBox = styled.div`
    width: 100%;
    height: 2.5vw;
    font-size: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5vw;
`;

export const WebButton = styled.button`
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #999999;
    background-color: #262626;
    border-radius: 0.5vw;
    img{
        width: 16%;
    }
`;

export const IOSButton = styled.button`
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #999999; 
    background-color: #262626;
    border-radius: 0.5vw;
    img{
        width: 16%;
    }
`;

export const AndroidButton = styled.button`
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #999999;
    background-color: #262626;
    border-radius: 0.5vw;
    img{
        width: 16%;
    }
`;

export const LikeButton = styled.button`
    width: 100%;
    height: 3vw;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3vw;
    margin-top: 0.3vw;
    img{
        width: 36px;
        height: 36px; 
    }
`;
