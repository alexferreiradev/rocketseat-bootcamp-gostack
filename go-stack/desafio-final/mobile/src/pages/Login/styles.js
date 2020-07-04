import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #7d40e7;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 10px;
`;
export const Form = styled.View`
  padding: 4px 32px;
`;
export const Input = styled.TextInput`
  background-color: #fff;
  color: #ccc;
  padding: 8px;
  min-height: 50px;
  border-radius: 3px;
`;
export const SubmitButton = styled(RectButton)`
  background-color: #82bf18;
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
export const Logo = styled.View`
  background-color: #fff;
  height: 50px;
  width: 50px;
  margin-bottom: 15px;
  align-self: center;
`;
