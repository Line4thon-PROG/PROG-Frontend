import React from "react";
import * as S from "./detailHeaderStyled"
import backIcon from "../../assets/images/move_back_arrow.svg";
import fixIcon from "../../assets/images/fix.svg";
import deleteIcon from "../../assets/images/delete_trashcan.svg";


const detailHeader = () =>{

    return (
        <S.container>
            <S.Icon src={backIcon}></S.Icon>
            <S.IconBox>
                <S.Icon src={fixIcon}></S.Icon>
                <S.Icon src={deleteIcon}></S.Icon>
            </S.IconBox>
        </S.container>
    );
};

export default detailHeader;