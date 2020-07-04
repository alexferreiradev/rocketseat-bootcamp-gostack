import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #fff;
`;

export const ImageBackground = styled.View`
  flex: 1;
  flex-direction: column;
  border: 1px solid #eee;
  align-items: center;
  justify-content: flex-end;
`;
export const ImageBt = styled(RectButton)`
  background-color: #0000004d;
  height: 61px;
  width: 61px;
  border-radius: 50px;
  margin: 22px;
  justify-content: center;
  align-items: center;
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
