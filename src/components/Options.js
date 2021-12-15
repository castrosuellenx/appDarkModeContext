import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Theme} from '../context/Theme';

export default function Options() {
  const theme = useContext(Theme);
  const darkMode = theme.state.darkMode;

  return (
    <View style={styles.container}>
      <View style={[styles.optionBox, darkMode ? {} : {}]}>
        <Text style={styles.optionDesc}>Options</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '92%',
    alignSelf: 'flex-end',
  },
  optionBox: {
    borderBottomWidth: 1,
  },
  optionDesc: {},
});
