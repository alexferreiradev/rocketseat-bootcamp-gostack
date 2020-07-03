import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #eee;
`;

export const PerfilImg = styled.View`
  flex: 1;
`;

export const Dados = styled.View`
  flex: 1;
`;

export const Label = styled(Text)`
  flex: 1;
`;

export const LabelText = styled(Text)`
  flex: 1;
`;

export const LogoutBt = styled(RectButton)`
  flex: 1;
`;
