import styled from 'styled-components'
import InputMask from 'react-input-mask'

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  padding-left: 15px !important;
  padding-right: 15px !important;
  width: 41.7%;

  @media screen and (max-width: 720px) {
    width:100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem !important;
  }
`;

export const FormsContainer = styled.form`
  background: #E9DAC1;
  box-shadow: 0 16px 40px -5px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  width: 384px;
  padding: 32px;
  height: 475.42px;

`;

export const Select = styled.select`
  border: 2px solid #00484C;
  width: 100%;
  margin: 8px 0;
  outline: none;
  padding: 8px 0 8px 50px;
  transition: 0.3s;
  height: 48px;
  background-color: transparent;
  border-radius: 4px;
  color: #00484C;
  font-weight: bold;

  option {
    color: white;
    background: #00484C;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
    height: 60px !important;

    @media screen and (max-width: 720px) {
      width:100%;
      height: 60px !important;
    }
  }
`;

export const InputForm = styled.input`
  border: 2px solid #00484C;
  border-left: 1px solid #00484C;
  width: 100%;
  margin: 0.5rem 0;
  outline: none;
  padding: 0.5rem;
  transition: 0.3s;
  height: 48px;
  background-color: transparent;
  border-radius: 0 4px 4px 0;
  color: #00484C;
  font-weight: bold;

  :focus {
    border-left: 2px solid #00484C;
  }

  ::placeholder {
    color: #00484C;
    font-weight: bold;
  }
`;

export const InputTel = styled(InputMask)`
  border: 2px solid #00484C;
  border-left: 1px solid #00484C;
  width: 100%;
  margin: 0.5rem 0;
  outline: none;
  padding: 0.5rem;
  transition: 0.3s;
  height: 48px;
  background-color: transparent;
  border-radius: 0 4px 4px 0;
  color: #00484C;
  font-weight: bold;

  :focus {
    border-left: 2px solid #00484C;
  }

  ::placeholder {
    color: #00484C;
    font-weight: bold;
  }
`;

export const ButtonSubmit = styled.button`
  width: 100%;
  border-radius: 4px;
  background: #00484C;
  color: white;
  padding: 0.75rem 2rem;
  margin: 1rem 0 1rem 0;
  border-color: transparent;
  cursor: pointer;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const IconAreaSelect = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 46px;
  width: 46px;
  border-right: 2px solid #00484c;
  border-radius: 4px 0 0 4px;
  margin: 8px 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.1);
`

export const IconAreaInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;
  border: 2px solid #00484C;
  border-right: 1px solid #00484c;
  border-radius: 4px 0 0 4px;
  margin: 8px 0;
  background-color: rgba(0, 0, 0, 0.1);
`

export const CheckedArea = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;

  input[type=checkbox] {
    position: relative;
    cursor: pointer;
    appearance: none;
    margin-right: 1.8rem;
  }

  input[type=checkbox]:before {
    content: "";
    display: block;
    position: absolute;
    width: 16px;
    height: 16px;
    border: 2px solid #00484C;
    background-color: white;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.1);
  }

  input[type=checkbox]:checked:after {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    border-width: 0 2px 2px 0;
    position: absolute;
    padding: 1px;
    background: #00484C;
    left: 4px;
    margin-top: 4px;
    border-radius: 4px;
  }
`;

export const CheckedLabel = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  /* or 117% */


  color: #000000;
`;