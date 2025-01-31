import React from "react";
import styled from "styled-components";
import CloseIcon from "../../assets/images/close_icon.svg";
import { useProjectDetail } from "../../hooks/useProjectDetail";

const Container = styled.div`
    width: 25vw;
    padding: 20px;
    background-color: #262626;
    border: 1px solid #999999;
    border-radius: 1vw;
    color: #999999;
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

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.div`
    font-size: 0.8vw;
    font-weight: bold;
`;

const CloseButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;

    img {
        width: 20px;
        height: 20px;
    }
`;

const ListBox = styled.div`
    margin-top: 20px;
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

const ListWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding: 10px;
    background-color: #333333;
    border-radius: 0.3vw;
`;

const Contributer_ID = styled.span`
    font-weight: bold;
    margin-left: 10px;
    margin-right: 10px;
`;

const Contributer_Role = styled.span`
    margin-left: 10px;
    margin-right: 10px;
`;

const Contributer_Univ = styled.span`
    margin-left: 10px;
    margin-right: 10px;
`;

const ContributerList = ({ project_id, onClose }) => {
    const { projectDetail, error } = useProjectDetail(project_id);

    if (error) {
        return <p>데이터 로드 중 에러 발생: {error.message}</p>;
    }

    if (!projectDetail) {
        return <p>로딩 중...</p>;
    }

    return (
        <Container>
            <Row>
                <Title>참여자 상세보기</Title>
                <CloseButton onClick={onClose}>
                    <img src={CloseIcon} alt="Close" />
                </CloseButton>
            </Row>
            <ListBox>
                {projectDetail.collaborator.map((collab, index) => (
                    <ListWrapper key={index}>
                        <Contributer_ID>{collab.nickname}</Contributer_ID>
                        |
                        <Contributer_Role>{collab.role}</Contributer_Role>
                        |
                        <Contributer_Univ>
                            {projectDetail.project_university[index] || "N/A"}
                        </Contributer_Univ>
                    </ListWrapper>
                ))}
            </ListBox>
        </Container>
    );
};

export default ContributerList;
