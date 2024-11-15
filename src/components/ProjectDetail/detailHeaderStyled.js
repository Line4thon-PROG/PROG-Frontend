import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5vw;
`;

export const Icon = styled.img`
    width: 1.8vw;
    height: 1.8vw;
`;

export const IconBox = styled.div`
    width: fit-content;
    gap: 1.5vw;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding-right: 1vw;
`; 

//gpt.....ㅎㅎ 움하하
export const PopupWrapper = styled.div`
    position: fixed;
    top: -10vw;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000; 
`;

// 팝업 뒤 배경 투명도 처리
export const PopupOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.01); 
    z-index: 999;
`;