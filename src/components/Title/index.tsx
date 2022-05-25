import React from 'react'
import {Container, ImgSeta, Paragraph, SubTitle, Text} from './style'

export const Title = () => {
    const logo = `./img/logo.svg`
    const seta = `./img/seta.svg`

    return (
        <Container>
            <div style={{ display: 'block'}}>
                <Text>
                    Loja Virtual {' '}
                    <img src={logo} alt="" />
                </Text>
                <SubTitle>
                    A casa dos seus sonhos. Possível. Acessível. Viável.
                </SubTitle>
                <Paragraph>
                    Saia do aluguel e conquiste a sua Alea. Dê o primeiro passo agora!
                </Paragraph>
                <ImgSeta src={seta} alt="" />
            </div>
        </Container>
    )
}