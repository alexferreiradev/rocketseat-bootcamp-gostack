import styled from 'styled-components/native';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #fff;
`;
export const Card = styled.View`
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 14px;
  margin: 10px 0px;
`;
export const InfoHeader = styled.View`
  flex-direction: row;
  padding: 0px;
`;
export const InfoTitle = styled.Text`
  margin: 0px 8px;
  font-size: 14px;
`;

export const Label = styled.Text`
  margin: 5px 0px;
  font-size: 14px;
  font-weight: bold;
  color: #999;
`;

export const LabelText = styled.Text`
  font-size: 14px;
  font-weight: 100;
  color: #666;
`;

export const Situacao = styled.View``;

export const EncomendaOptions = styled.View`
  background-color: #0000001a;
  flex-direction: row;
  border-radius: 4px;
  min-height: 100px;
  justify-content: space-between;
`;
export const OptionBt = styled(RectButton)`
  background-color: #f8f9fd;
  margin-left: 1px;
  justify-content: center;
  /* border-radius: 4px; */
  align-items: center;
  min-width: 58px;
  flex-grow: 1;
`;
export const OptionBtText = styled.Text`
  color: #999999;
  font-size: 12px;
`;
