import styled from 'styled-components/native';
import { View, Text } from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #fff;
`;
export const Title = styled(Text)`
  margin: 12px;
  align-self: center;
  font-size: 18px;
  text-transform: capitalize;
`;
export const ProblemaView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 16px;
  border: 1px solid #eee;
  border-radius: 4px;
  margin-bottom: 16px;
`;
export const Descricao = styled(Text)`
  color: #666666;
  font-size: 16px;
`;
export const Data = styled(Text)`
  color: #666666;
  font-size: 12px;
`;
export const List = styled.FlatList``;
