import styled from "styled-components";

export const container = styled.div`
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
    cursor: pointer;
`;

export const IconBox = styled.div`
    width: fit-content;
    gap: 1.5vw;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding-right: 1vw;
`; 