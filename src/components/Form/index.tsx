import React from 'react'
import {
    FormsContainer,
    InputForm,
    ButtonSubmit,
    InputContainer,
    Select,
    IconAreaSelect,
    IconAreaInput
} from './style'
import {AiOutlineUser, AiOutlineWhatsApp} from 'react-icons/ai'
import { ImLocation2} from 'react-icons/im'

export const Form = () => {
    return (
        <FormsContainer>
            <InputContainer>
                <IconAreaSelect>
                    <ImLocation2 color="#00484C" />
                </IconAreaSelect>
                <Select name="select" placeholder="Selecione onde quer morar">
                    <option value="valor1">Valor 1</option>
                    <option value="valor2" selected>Valor 2</option>
                    <option value="valor3">Valor 3</option>
                </Select>
            </InputContainer>
            <InputContainer>
                <IconAreaInput>
                    <AiOutlineUser color="#00484C" />
                </IconAreaInput>
                <InputForm placeholder="Digite seu nome" />
            </InputContainer>
            <InputContainer>
                <IconAreaInput>
                    <AiOutlineWhatsApp color="#00484C" />
                </IconAreaInput>
                <InputForm placeholder="Digite seu WhatsApp" />
            </InputContainer>

            <ButtonSubmit>
                Digite seu WhatsApp
            </ButtonSubmit>
        </FormsContainer>
    )
}