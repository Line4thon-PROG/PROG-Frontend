import React from "react";
import styled from "styled-components";
import { deleteProject } from "../../api/projectDetail"; // DELETE 메서드 임포트
import { useNavigate } from "react-router-dom";
import DeleteIcon from "../../assets/images/delete_icon.svg";
import CloseIcon from "../../assets/images/close_icon.svg";

const Container = styled.div`
    background-color: #262626;
    width: 15vw;
    height: 14vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.2vw;
    border: 1px solid #999999;
    border-radius: 0.6vw;
    position: relative;
    .deleteMessage {
        color: #de5e56;
        font-size: 1vw;
        padding-bottom: 0.4vw;
    }
    .message {
        color: #999999;
        font-size: 0.5vw;
        padding-bottom: 0.1vw;
    }
`;

const CloseButton = styled.button`
    position: absolute;
    top: 0.5vw;
    right: 0.5vw;
    background: none;
    border: none;
    cursor: pointer;

    img {
        width: 0.7vw;
        cursor: pointer;

    }
`;

const DeleteImage = styled.div`
    width: 1vw;
    height: 1vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2vw;
    margin-top: 1vw;
    img {
        width: 3.5vw;
    }
`;

const Buttons = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.5vw;
    margin-top: 1vw;
`;

const CancleButton = styled.div`
    width: 3.5vw;
    height: 1.5vw;
    background-color: white;
    color: black;
    border-radius: 0.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const DeleteButton = styled.div`
    width: 3.5vw;
    height: 1.5vw;
    background-color: #de5e56;
    color: white;
    border-radius: 0.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const DeletePopup = ({ project_id, onClose }) => {
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            await deleteProject(project_id); // 프로젝트 삭제 요청
            alert("프로젝트가 성공적으로 삭제되었습니다."); // 성공 알림
            onClose(); // 팝업 닫기
            navigate("/"); // 삭제 후 홈 페이지로 리디렉션
        } catch (error) {
            console.error("삭제 실패:", error);
            alert("프로젝트 삭제 중 문제가 발생했습니다.");
        }
    };

    return (
        <Container>
            <CloseButton onClick={onClose}>
                <img src={CloseIcon} alt="Close" />
            </CloseButton>
            <DeleteImage>
                <img src={DeleteIcon} alt="Delete Icon" />
            </DeleteImage>
            <p className="deleteMessage">프로젝트 삭제</p>
            <p className="message">해당 프로젝트를 삭제하시겠습니까?</p>
            <p className="message">삭제된 프로젝트는 복구할 수 없습니다.</p>
            <Buttons>
                <CancleButton onClick={onClose}>취소</CancleButton>
                <DeleteButton onClick={handleDelete}>삭제</DeleteButton>
            </Buttons>
        </Container>
    );
};

export default DeletePopup;
