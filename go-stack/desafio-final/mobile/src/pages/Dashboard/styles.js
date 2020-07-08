import styled from 'styled-components/native';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 30px;
  background: #fff;
`;

export const Header = styled.View`
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
export const EntregaList = styled.View`
  justify-content: space-evenly;
`;
export const ListHeader = styled.View`
  /* background-color: #eee; */
  flex-direction: row;
  justify-content: space-between;
  margin: 16px 4px;
`;
export const Encomenda = styled.View`
  border: 1px solid #eee;
  border-radius: 4px;
  margin: 10px 0px;
`;
export const ListFilter = styled.View`
  flex-direction: row;
`;
export const FilterText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #7d40e7;
  margin: 0 5px;
`;
export const ListTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #444;
`;
export const List = styled.FlatList``;
export const InfoHeader = styled.View`
  /* background-color: #eee; */
  flex-direction: row;
  padding: 0px;
  margin: 12px 14px;
`;
export const InfoTitle = styled.Text`
  margin: 0px 8px;
  font-size: 14px;
`;
export const EncomendaStatus = styled.View`
  /* background-color: #eee; */
  margin: 12px 20px 6px 20px;
  justify-content: center;
  /* align-items: ; */
`;
export const LinhaStatus = styled.View`
  height: 2px;
  background-color: #7159c1;
  margin: 0px 35px;
`;
export const StatusRowBox = styled.View`
  /* background-color: #eee; */
  min-height: 44px;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px 0px;
  margin-top: -5px;
`;
export const StatusBox = styled.View`
  /* background-color: #eee; */
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0px 17px;
`;
export const StatusPoint = styled.View`
  background: #7159c1;
  height: 9px;
  width: 9px;
  border-radius: 50px;
  align-self: center;
  margin-bottom: 5px;
`;
export const StatusText = styled.Text`
  max-width: 44px;
  /* flex-wrap: wrap; */
  /* flex-flow: column wrap; */
  font-size: 8px;
  color: #999999;
  justify-content: center;
  align-items: center;
  align-self: center;
  flex-direction: column;
`;
export const EncomendaFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 18px;
  background: #f8f9fd;
`;
export const FooterBlock = styled.View`
  flex-direction: column;
`;
export const Label = styled(Text)`
  font-size: 8px;
  font-weight: bold;
  color: #999999;
`;
export const LabelText = styled(Text)`
  font-size: 12px;
  font-weight: bold;
  color: #444;
`;
export const DetalhesButton = styled.View``;
export const DetalhesButtonText = styled(Text)`
  font-size: 12px;
  font-weight: bold;
  color: #7d40e7;
`;
