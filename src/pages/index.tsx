import React from 'react'
import type {NextPage} from 'next'
import {Form} from '../components/Form'
import styled from 'styled-components'
import {Title} from '../components/Title'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Home: NextPage = () => {
    return (
        <Container>
            <Title />
            <Form />
        </Container>
    )
}

export default Home