import React, {useContext} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Theme} from '../context/Theme';
import {colorsLight, colorsDark} from '../config/colors';

export default function Options({optionDesc}) {
  const theme = useContext(Theme);
  const darkMode = theme.state.darkMode;

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View
          style={[
            styles.optionBox,
            darkMode
              ? {borderColor: colorsDark.border}
              : {borderColor: colorsLight.border},
          ]}>
          <Icon
            name="settings"
            size={30}
            color={darkMode ? colorsDark.regular : colorsLight.regular}
          />
          <Text
            style={[
              styles.optionDesc,
              darkMode
                ? {color: colorsDark.regular}
                : {color: colorsLight.regular},
            ]}>
            {optionDesc}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'flex-end',
  },
  optionBox: {
    borderBottomWidth: 1,
  },
  optionDesc: {
    fontSize: 18,
    fontFamily: 'GothamBook',
    paddingVertical: '5%',
  },
});
