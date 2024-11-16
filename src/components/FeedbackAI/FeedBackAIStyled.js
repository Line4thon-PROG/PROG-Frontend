import styled from "styled-components";

// 기존 Container 스타일 유지
export const Container = styled.div`
    width: 100%;
    border-radius: 1vw;
    padding: 1vw;
    gap: 3vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    gap: 0.2vw;
    #title{
        font-size: 1.5vw;
        font-weight: 100;
        color: white;
    }
    #about{
        font-size: 0.7vw;
        color: #999999;
    }
`;
export const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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
    img{
        cursor: pointer;
    }
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
export const MyPoint = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4vw;
    color: white;
    font-size: 0.7vw;
    margin-right: 1.6vw;
    img{
        width: 1vw;
    }
`;

// 추가 스타일 정의
export const FeedbackListContainer = styled.div`
    padding-bottom: 50px;
    width: 100%;
    height: auto;
`;

export const SelectedFeedbackContainer = styled.div`
    padding: 20px 30px;
    width: 100%;
    min-height: 280px;
    background-color: rgba(38, 38, 38, 1);
    border: 1px solid rgba(153, 153, 153, 1);
    border-radius: 12px;

    h3 {
        font-size: 24px;
        color: #fff;
    }
    ::-webkit-scrollbar {
        width: 0.4vw; /* 스크롤바 너비 */
    }

    ::-webkit-scrollbar-thumb {
        background-color: rgba(153, 153, 153, 0.6); /* 스크롤바 색상 */
        border-radius: 4px; /* 스크롤바 둥근 모서리 */
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: rgba(255, 255, 255, 0.8); /* 스크롤바 색상 (호버 시) */
    }

    ::-webkit-scrollbar-track {
        background-color: rgba(38, 38, 38, 1); /* 스크롤 트랙 색상 */
        border-radius: 4px; /* 스크롤 트랙 둥근 모서리 */
    }
`;

export const NoSelectedFeedback = styled.div`
    margin-top: 55px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;

    img {
        width: 20%;
    }

    p {
        color: rgba(153, 153, 153, 1);
        font-size: 13px;
    }
`;

export const SelectedFeedbackWrapper = styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 15px;
    overflow-y: auto;
    max-height: 500px;

    /* 스크롤바 스타일 */
    ::-webkit-scrollbar {
        width: 8px; /* 스크롤바 너비 */
    }

    ::-webkit-scrollbar-thumb {
        background-color: rgba(153, 153, 153, 0.6); /* 스크롤바 색상 */
        border-radius: 4px; /* 스크롤바 둥근 모서리 */
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: rgba(255, 255, 255, 0.8); /* 스크롤바 색상 (호버 시) */
    }

    ::-webkit-scrollbar-track {
        background-color: rgba(38, 38, 38, 1); /* 스크롤 트랙 색상 */
        border-radius: 4px; /* 스크롤 트랙 둥근 모서리 */
    }
`;


export const SelectedFeedback = styled.div`
    background-color: rgba(51, 51, 51, 1);
    border-radius: 8px;
    width: 100%;
    height: auto;
    cursor: pointer;
    padding: 0.6vw 1vw;
    &:hover {
        background-color: rgba(75, 75, 75, 1);
    }

    p {
        font-size: 12px;
        font-weight: 200;
        color: #ccc;
        padding-bottom: 0.5vw;
    }
`;

export const InfonDetailBtnWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        color: white;
        font-size: 11px;
        border: none;
        border-radius : 1vw;
        padding: 1px 10px;
        font-weight: 400;
        img {
            width: 12px;
        }

        &:hover {
            background-color: rgba(0, 0, 0, 0.1);
        }
    }
`;

export const NickNamenDateWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;

    h5 {
        font-size: 12px;
        color: #fff;
    }

    h6 {
        color: rgba(153, 153, 153, 1);
        font-size: 12px;
    }
`;
