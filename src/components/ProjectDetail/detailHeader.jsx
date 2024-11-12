import React, { useState } from "react";
import * as S from "./detailHeaderStyled"
import backIcon from "../../assets/images/move_back_arrow.svg";
import fixIcon from "../../assets/images/fix.svg";
import deleteIcon from "../../assets/images/delete_trashcan.svg";


const detailHeader = () =>{

    return (
        <S.container>
            <Icon src={backIcon}></Icon>;
            <S.iconbox>
                <Icon src={fixIcon}></Icon>
                <Icon src={deleteIcon}></Icon>
            </S.iconbox>
        </S.container>
    );
};

export default detailHeader;