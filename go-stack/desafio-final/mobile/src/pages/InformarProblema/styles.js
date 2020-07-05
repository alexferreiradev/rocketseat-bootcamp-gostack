import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Form as RSForm, Input as RSInput } from '@unform/mobile';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #eee;
`;

export const Form = styled(RSForm)``;

export const Input = styled(RSInput)`
  min-height: 300px;
  border: 1px solid #0000001a;
  justify-content: flex-start;
  border-radius: 4px;
`;

export const SubmitButton = styled(RectButton).attrs({
  type: 'submit',
})`
  background-color: #7d40e7;
  padding: 10px;
  align-items: center;
  margin-top: 24px;
  border-radius: 3px;
`;
export const SubmitButtonText = styled.Text`
  font-weight: bold;
  color: #fff;
  justify-content: center;
`;
