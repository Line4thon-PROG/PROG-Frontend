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

export const ContentWrapper = styled.div`
    width: 100%;
    height: 10.5vw; 
    display: flex;
    align-items: center;
    gap: 1vw;
    background-color: #333333;
    padding: 0.7vw;
    border-radius: 0.5vw;
    position: relative;
`;

export const ContentThumbnail = styled.div`
    width: 18%;
    position: relative;
    
    img {
        width: 100%;
        height: 100%;
    }

    .thumb{
        border-radius: 0.5vw;
    }
    .arrow_left, .arrow_right {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 1vw; /* Size of the arrow button */
        display: flex;
        border-radius: 0;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: background-color 0.3s;
        background-color: rgba(0, 0, 0, 0.01); 

        &:hover {
            background-color: rgba(0, 0, 0, 0.7); /* Darker on hover */
        }

        img {
            width: 1vw; /* Arrow icon size */
            height: auto;
        }
    }

    .arrow_left {
        left: -0.01vw; /* Position the left arrow */
    }

    .arrow_right {
        right: 0.01vw; /* Position the right arrow */
    }
`;

export const ContentText = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.5vw;
    padding-top: 0.1vw;
`;

export const Content_Who = styled.div`
    color: #FFFFFF;
    font-weight: 400;
    font-size: 0.6vw;
`;

export const Content_Title = styled.div`
    color: #FFFFFF;
    font-size: 1.1vw;
    font-weight: 400;
`;

export const Content_What = styled.div`
    color: #FFFFFF;
    font-size: 0.8vw;
    font-weight: 100;
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