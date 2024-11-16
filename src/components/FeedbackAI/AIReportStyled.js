import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
    background-color: #262626;
    border-radius: 1vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1vw;
    margin-top: 1vw;
    position: relative; 
    padding: 1.5vw 1.2vw;
    color: white;
    #error{
        color: white;
    }
`;

export const Row = styled.div`
    color: white;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 0.5vw;
`;

export const Report_Title = styled.div`
    color: white;
    font-size: 1.2vw;
`;

export const Report_When = styled.div`
    color: #999999;
    font-size: 0.8vw;
`;

export const Summary_Title = styled.div`
    color: white;
    font-size: 1vw;
    padding: 0.2vw 0;
`;

export const Summary_Summary = styled.div`
    color: #999999;
    font-size: 0.8vw;
    padding: 0.2vw 0;

`;

export const Summary_Solution = styled.div`
    color: #999999;
    font-size: 0.8vw;
    padding: 0.2vw 0;
    line-height:1.5vw;
`;

export const ReportDownload = styled.div`
    position: absolute; 
    top: 0.5vw;
    right: 0.5vw;
    img{
        width:8vw;
    }
`;
