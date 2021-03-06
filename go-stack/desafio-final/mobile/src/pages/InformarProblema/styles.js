import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Input from '../../components/Input';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 30px;
  background: #eee;
`;

// export const Form = styled(RSForm)``;
export const Form = styled.View``;

export const FormInput = styled(Input)`
  min-height: 300px;
  height: 300px;
  border: 1px solid #0000001a;
  justify-content: flex-start;
  border-radius: 4px;
`;

export const SubmitButton = styled(RectButton)`
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
