import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

// import { Container } from './styles';

const User = ({ navigation, route }) => {
  navigation.setOptions({
    title: route.params.user.name,
  });

  return <View />;
};

User.propTypes = {
  navigation: PropTypes.shape({
    setOptions: PropTypes.func,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};

export default User;
