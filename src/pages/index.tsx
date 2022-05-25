import React from 'react'
import {GetServerSideProps} from 'next'
import {Form} from '../components/Form'
import styled from 'styled-components'
import {Title} from '../components/Title'
import Head from 'next/head'

const Container = styled.section`
  background: url('/img/bg.jpg') center center no-repeat;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  
`;

const NewSection = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 80px);
  max-width: 1170px;

  @media screen and (max-width: 720px) {
    width:100%;
    display: flex;
    flex-direction: column;
  }
`;

export default function Home({ datas }: any) {

    return (
        <Container>
            <Head>
                <title>Loja Virtual</title>
            </Head>
            <NewSection>
                <Title/>
                {/* eslint-disable-next-line react/prop-types */}
                <Form estado={datas.map((est: any, index: number) => (
                    <option key={index} value={est.estado}>
                        {est.estado}
                    </option>
                ))} />
            </NewSection>
        </Container>
    )
}


export const getServerSideProps: GetServerSideProps = async () => {   
    const req = await fetch(`${process.env.NEXT_API_TENDA}`) 
    const data = await req.json();
    return {
        props: {
            datas: data
        }
    } 
} 