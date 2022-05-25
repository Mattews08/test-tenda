import React from 'react'
import {
    Container,
    FormsContainer,
    InputForm,
    InputTel,
    ButtonSubmit,
    InputContainer,
    Select,
    IconAreaSelect,
    IconAreaInput, CheckedLabel, CheckedArea
} from './style'
import {AiOutlineUser, AiOutlineWhatsApp} from 'react-icons/ai'
import {ImLocation2} from 'react-icons/im'

type Iprops = {
    estado: string
}

export function Form(props: Iprops) {

    return (
        <Container>
            <FormsContainer>
                <InputContainer>
                    <IconAreaSelect>
                        <ImLocation2 color="#00484C"/>
                    </IconAreaSelect>
                    <Select>
                        <option selected value="" disabled hidden>Selecione onde quer morar</option>
                        {props.estado}
                    </Select>
                </InputContainer>
                <InputContainer>
                    <IconAreaInput>
                        <AiOutlineUser color="#00484C"/>
                    </IconAreaInput>
                    <InputForm type="text" placeholder="Digite seu nome"/>
                </InputContainer>
                <InputContainer>
                    <IconAreaInput>
                        <AiOutlineWhatsApp color="#00484C"/>
                    </IconAreaInput>
                    <InputTel placeholder="Digite seu WhatsApp" mask="(99) 99999-9999" value="" onChange={() => console.log('')} />
                </InputContainer>

                <ButtonSubmit>
                    Digite seu WhatsApp
                </ButtonSubmit>
               <CheckedArea>
                   <input type="checkbox"/>
                   <CheckedLabel>
                       Concordo e estou ciente que após o envio da minha documentação para análise de crédito de
                       financiamento imobiliário pela Caixa Econômica Federal, uma nova avaliação de financiamento somente
                       poderá ocorrer após 90 dias contados a partir do envio das documentações, seja pela própria Tenda ou
                       por outra construtora.
                   </CheckedLabel>
               </CheckedArea>

                <CheckedArea>
                    <input type="checkbox" />
                    <CheckedLabel>
                        Quero receber promoções exclusivas por e-mail e telefone.
                    </CheckedLabel>
                </CheckedArea>
            </FormsContainer>
        </Container>
    )
}