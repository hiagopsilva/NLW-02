import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

import landingImg from '../../assets/images/landing.png';

const Landing: React.FC = () => (
  <View style={styles.container}>
    <Image source={landingImg} />
  </View>
);

export default Landing;
