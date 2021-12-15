import React, {useContext} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

import {Theme} from '../context/Theme';
import {colorsLight, colorsDark} from '../config/colors';

import LightIcon from '../assets/svg/light-mode.svg';
import DarkIcon from '../assets/svg/dark-mode.svg';

export default function ButtonTheme() {
  const theme = useContext(Theme);
  const darkMode = theme.state.darkMode;

  const onChangeTheme = () => {
    if (darkMode) {
      theme.dispatch({type: 'lightmode'});
    } else {
      theme.dispatch({type: 'darkmode'});
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={onChangeTheme}
        style={[
          styles.button,
          darkMode
            ? {
                backgroundColor: colorsDark.secondary,
                flexDirection: 'row-reverse',
              }
            : {
                backgroundColor: colorsLight.secondary,
                flexDirection: 'row',
              },
        ]}>
        <View
          style={[
            styles.containIcon,
            darkMode
              ? {backgroundColor: colorsLight.secondary}
              : {backgroundColor: colorsDark.secondary},
          ]}>
          {darkMode ? (
            <LightIcon width={20} height={20} />
          ) : (
            <DarkIcon width={20} height={20} />
          )}
        </View>
        <Text
          style={[
            styles.buttonText,
            darkMode
              ? {color: colorsLight.secondary, marginRight: '7%'}
              : {color: colorsDark.secondary, marginLeft: '7%'},
          ]}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
  button: {
    marginTop: '8%',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '1.5%',
    paddingRight: '2%',
  },
  containIcon: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  buttonText: {
    fontSize: 15,
    fontFamily: 'GothamMedium',
  },
});
