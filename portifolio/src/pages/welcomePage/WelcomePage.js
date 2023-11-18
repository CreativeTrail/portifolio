import React from 'react';
import './welcomePage.css'
import { SiInstagram } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from './imagens/logo.png'

function WelcomePage (){
  return (
    <div className='welcomePageBg'>
        <Container fluid className='centerContainer'>
            <div className='content'>
                <Row className='logo_div'>
                    <Col>
                        <img src={Logo} alt='vazio' className="logo" /> 
                    </Col>
                </Row>
                <Row>
                    <Col className='col-8'>
                        <h1>Welcome!</h1> 
                    </Col>
                    <Col>
                    <ul className='redes_sociais'>
                        <li>
                        <SiInstagram/>
                        </li>
                        <li>
                        <SiGithub/> 
                        </li>
                        <li>
                        <SiGmail/>
                        </li>
                    </ul>
                        
                    </Col>
                </Row>
                <Row className='display_conteudo'>
                    <Col className='col-8 posicao_paragrafo'>
                        <div className='div_paragrafo'></div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim tellus, sodales aliquet justo dictum, ornare sollicitudin leo. Aenean aliquam rhoncus lectus. Donec blandit et turpis in pharetra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin sed felis massa. Donec sem elit, varius nec porttitor eu, sagittis eget felis.
                        </p>
                    </Col>
                    <Col className='posicao_menu_projects'>
                        <h3>Projetos</h3>
                        <Col className='link_projeto'>
                            <Row>
                                <p>
                                    projeto 1
                                </p>
                            </Row> 
                            <Row>
                                <p>
                                    projeto 2
                                </p>
                            </Row> 
                            <Row>
                                <p>
                                    projeto 3
                                </p>
                            </Row> 
                        </Col>
                        
                    </Col>
                </Row>
            </div>
        </Container>
    </div>
  );
}

export default WelcomePage;