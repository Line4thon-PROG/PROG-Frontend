import React from "react";
import * as S from "./AIHeaderStyled"
import backIcon from "../../assets/images/move_back_arrow.svg";
import { useNavigate, useParams } from "react-router-dom";


const AIHeader = () =>{
    const navigate = useNavigate();

    return (
        <S.container>
        <S.Icon
            src={backIcon}
            alt="뒤로 가기"
            onClick={() => navigate(-1)}
        />            
        </S.container>
    );
};

export default AIHeader;