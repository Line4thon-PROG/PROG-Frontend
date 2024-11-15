import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: #181818;
    border-radius: 1vw;
    padding: 1vw;
    gap: 2vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const OneLiner = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1.6vw 0.5vw;
    background-color: #262626;
    border: 1px solid white;
    border-radius: 5px;
    font-size: 1vw;
    color: white;
`;

export const Content = styled.div`
    color: white;
    width: 100%;
`;

export const Gallery = styled.div`
    width: 100%;
    gap:0;
    img{
        width: 100%;
    }
`;

export const FeedbackBlock = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.7vw;
    color: #999999;
    gap: 0.8vw;
`;


export const GoFeedBack = styled.button`
    width: 30vw;
    height: fit-content;
    padding: 1vw 1.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3vw;
    background-color: #FFA500;
    font-weight: bold;
    border-radius: 0.4vw;
    img{
        width: 1vw;
    }
    
`;
