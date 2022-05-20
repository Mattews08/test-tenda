import styled from 'styled-components'

export const FormsContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 32px;
  width: 384px;
  height: 475.42px;
  margin-top: 64px;
  background: #E9DAC1;
  box-shadow: 0 16px 40px -5px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
`;

export const Select = styled.select`
  border: 2px solid #00484C;
  width: 100%;
  margin: 8px 0;
  outline: none;
  padding:8px 0 8px 50px;
  transition: 0.3s;
  height: 48px;
  background-color: transparent;
  border-radius: 4px;
  color: #00484C;
  font-weight: bold;
  
  ::placeholder {
    color: #00484C;
    font-weight: bold;
  }

  option {
    color: white;
    background: #00484C;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
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

export const ButtonSubmit = styled.button`
  width: 100%;
  border-radius: 4px;
  background: #00484C;
  color: white;
  padding: 0.75rem 2rem;
  margin-top: 4rem;
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