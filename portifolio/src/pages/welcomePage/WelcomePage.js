import React from 'react';
import './welcomePage.css'
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
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim tellus, sodales aliquet justo dictum, ornare sollicitudin leo. Aenean aliquam rhoncus lectus. Donec blandit et turpis in pharetra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin sed felis massa. Donec sem elit, varius nec porttitor eu, sagittis eget felis. Proin at erat non metus tristique dapibus ut non justo. Aenean at magna ipsum. Praesent a lorem nec urna congue gravida. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce pharetra augue at dui vehicula efficitur. Aenean at dolor nisi. Duis consectetur luctus rhoncus.

                                Mauris ullamcorper semper suscipit. Fusce sed lacus porta dui tincidunt semper. Nunc gravida ac tortor sit amet sodales. Nullam quis ornare nibh, nec semper nulla. Cras fringilla suscipit justo, sit amet ultrices mauris vulputate eget. Nunc at velit id arcu accumsan aliquet a eu libero. Nullam tincidunt purus ante.
                            </p>
                        </div>
                         
                    </Col>
                    <Col>
                        <h3>Menu de projects</h3> 
                    </Col>
                </Row>
            </div>
        </Container>
    </div>
  );
}

export default WelcomePage;