import React from 'react';
import './LoadingPage.css'
import { SiInstagram } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from './imagens/logo.png'

function LoadingPage (){
  return (
    <div className='loadingPageBg'>
        <Container fluid className='ContainerCentral'>
            <div className='conteudo'>
            </div>
        </Container>
    </div>
  );
}

export default LoadingPage;