import React from 'react';
import { View } from 'react-native';
import PageHeader from '../../components/pageHeader';

import styles from './styles';

const Favorites: React.FC = () => {
  return (
    <View style={styles.container}>
      <PageHeader title="Proffys disponíveis" />
    </View>
  );
};

export default Favorites;
