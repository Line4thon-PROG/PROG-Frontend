import React from "react";
import * as S from "./AIHeaderStyled"
import backIcon from "../../assets/images/move_back_arrow.svg";


const AIHeader = () =>{

    return (
        <S.container>
            <S.Icon src={backIcon}></S.Icon>
            
        </S.container>
    );
};

export default AIHeader;