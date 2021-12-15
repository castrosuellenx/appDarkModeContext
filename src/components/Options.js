import React, {useContext} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Theme} from '../context/Theme';
import {colorsLight, colorsDark} from '../config/colors';

export default function Options({iconName, optionDesc}) {
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
            name={iconName}
            size={30}
            color={darkMode ? colorsDark.regular : colorsLight.regular}
            style={styles.optionIcon}
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
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingVertical: '5%',
    alignItems: 'center',
  },
  optionIcon: {
    paddingLeft: '3%',
  },
  optionDesc: {
    fontSize: 18,
    fontFamily: 'GothamBook',
    paddingLeft: '5%',
  },
});
