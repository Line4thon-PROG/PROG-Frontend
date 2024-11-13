import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap:0.5vw;
    margin-top: 3vw;
`;

export const Selecter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: fit-content;
    gap: 1px;
`;

export const ProejctInfo = styled.div`
    width: 4.5vw;
    font-size: 0.75vw;
    height: fit-content;
    color: white;
    padding: 0.5vw 0;
    border-bottom: 1px solid #00C13A;
    text-align: center;
`;

export const ProjectDiscuss = styled.div`
    width: 4.5vw;
    height: fit-content;
    font-size: 0.75vw;
    color: #999999;
    padding: 0.5vw 0;
    border-bottom: 1px solid #999999 hidden;
    text-align: center;
`;
