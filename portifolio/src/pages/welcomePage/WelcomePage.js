import React, { useRef, useState } from 'react';
import { EscritaAutomatica } from "../../components/EscritaAutomatica"
import './welcomePage.css'
import { SiInstagram, SiGithub, SiGmail } from "react-icons/si";
import { FaAngleDown, FaAnglesUp } from "react-icons/fa6";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from './imagens/logo.png'
import styled from 'styled-components';

const Geral = styled.main`
    transform: ${(props) => props.transform};
`;

function WelcomePage() {
    const escrita = { tempo: 250, text: "Welcome!" }
    const [scrollStyle, setScrollStyle] = useState({
        transform: 'translate(0px, 0px)'
    });

    const mainRef = useRef(null);
    const descer = (event) => {
        // Verifica a direção do evento de roda
        const delta = event.deltaY;
        const h = window.innerHeight;

        // Ajusta o tamanho do texto com base na direção
        if (delta < 0) {
            setScrollStyle({
                transform: 'translate(0px, 0px)'
            });
        } else {
            setScrollStyle({
                transform: `translate(0px, -${h}px)`
            });
        }
    };

    return (
        <Geral id='main' transform={scrollStyle.transform} onWheel={descer}>
        <div className='welcomePageBg'>
            <Container fluid className='centerContainer'>
                <div className='content'>
                    <Row>
                    <Col className='col-8 logo_div'>
                            <img src={Logo} alt='vazio' className="logo" /> 
                        </Col>
                        <Col>
                        <ul className='redes_sociais'>
                            <div className='redes_sociais_div'>
                                <li>
                                    <SiInstagram/>
                                </li>
                            </div>
                            <div className='redes_sociais_div'>
                                <li>
                                    <SiGithub/> 
                                </li>
                            </div>
                            <div className='redes_sociais_div'>
                                <li>
                                    <SiGmail/>
                                </li>
                            </div>
                        </ul>
                            
                        </Col>
                    </Row>
                        
                    <Row>
                        <Col className='col-7 h1'>
                            <EscritaAutomatica
                                props={escrita}
                            />
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
                            <Col className='srolldownMessage'>
                                <p className='escrita_vertical'><FaAnglesUp className='escrita_vertical'/> Scroll Down</p>
                            </Col>
                            <Col >
                            <button class="botao">
                                <span>Sobre nós    <FaAngleDown /></span>
                            </button>
                            </Col>
                            
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
        <div className='welcomePageBg'>
            <Container fluid className='centerContainer'>
                <div className='content'>
                    <Row>
                    <Col className='col-8 logo_div'>
                            <img src={Logo} alt='vazio' className="logo" /> 
                        </Col>
                        <Col>
                        <ul className='redes_sociais'>
                            <div className='redes_sociais_div'>
                                <li>
                                    <SiInstagram/>
                                </li>
                            </div>
                            <div className='redes_sociais_div'>
                                <li>
                                    <SiGithub/> 
                                </li>
                            </div>
                            <div className='redes_sociais_div'>
                                <li>
                                    <SiGmail/>
                                </li>
                            </div>
                        </ul>
                            
                        </Col>
                    </Row>
                        
                    <Row>
                        <Col className='col-7 h1'>
                            <EscritaAutomatica
                                props={escrita}
                            />
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
                            <Col className='srolldownMessage'>
                                <p className='escrita_vertical'><FaAnglesUp className='escrita_vertical'/> Scroll Down</p>
                            </Col>
                            <Col >
                            <button class="botao">
                                <span>Sobre nós    <FaAngleDown /></span>
                            </button>
                            </Col>
                            
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    </Geral>
    );
}

export default WelcomePage;