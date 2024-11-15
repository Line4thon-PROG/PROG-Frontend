import React from "react";
import styled from "styled-components";
import FooterIMG from "../../assets/images/footer_img.svg";

const Container = styled.div`   
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 100%;
    }
`;

const Footer = () =>{
    return(
        <Container>
            <img src={FooterIMG}></img>
        </Container>
        
    );
};

export default Footer;