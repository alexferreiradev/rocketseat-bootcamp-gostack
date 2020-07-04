import styled from 'styled-components/native';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #fff;
`;

export const Header = styled.View`
  flex: 1;
  padding: 4px;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
`;

export const Welcome = styled.View`
  flex: 1;
  padding: 4px;
  margin: 4px;
`;

export const NameText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin: 4px 8px;
`;

export const Image = styled.View`
  height: 68px;
  width: 68px;
  border-radius: 50px;
  background: #f4effc;
  justify-content: center;
  align-content: center;
`;
export const ImageText = styled.Text`
  color: #7159c1;
  font-size: 16px;
  font-weight: bold;
  align-self: center;
`;
export const SairBt = styled.Text`
  color: #e74040;
  font-size: 10px;
`;
export const EntregaList = styled.View``;
export const ListHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 16px 4px;
`;
export const Encomenda = styled.View`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 3px;
`;
export const ListFilter = styled.View`
  flex-direction: row;
`;
export const FilterText = styled.Text``;
export const ListTitle = styled.Text`
  font-size: 16px;
`;
export const List = styled.FlatList``;
export const TitleEncomenda = styled(Text)``;
export const DataStartEncomenda = styled.View``;
export const Label = styled(Text)``;
export const LabelText = styled(Text)``;
export const CidadeEncomenda = styled.View``;
export const DetalhesButton = styled.View``;
export const DetalhesButtonText = styled(Text)``;
