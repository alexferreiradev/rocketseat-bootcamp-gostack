import styled from 'styled-components/native';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 40px 30px;
  background: #fff;
`;

export const PerfilImg = styled.View`
  height: 136px;
  width: 136px;
  border-radius: 80px;
  background: #f4effc;
  justify-content: center;
  align-content: center;
  align-self: center;
  margin-bottom: 10px;
`;

export const ImageText = styled.Text`
  color: #7159c1;
  font-size: 60px;
  align-self: center;
`;

export const Dados = styled.View`
  padding: 4px;
  margin: 30px 0px;
`;

export const Label = styled.Text`
  font-size: 14px;
  font-weight: 100;
  color: #666;
`;

export const LabelText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #444;
`;

export const LogoutBt = styled(RectButton)`
  min-height: 40px;
  height: 40px;
  padding: 10px;
  background: #e74040;
  border-radius: 3px;
  flex-direction: column;
  align-items: center;
`;

export const LogoutBtText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  justify-content: center;
`;
