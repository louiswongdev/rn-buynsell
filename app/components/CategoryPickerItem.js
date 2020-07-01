import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppText from './AppText';
import Icon from './Icon';

function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    alignItems: 'center',
    width: '33%',
  },
  label: {
    marginTop: 8,
    textAlign: 'center',
  },
});

export default CategoryPickerItem;
