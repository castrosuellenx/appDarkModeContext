import React, {useContext, useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';

import {Theme} from '../context/Theme';
import {colorsLight, colorsDark} from '../config/colors';
import Avatar from '../components/Avatar';
import Options from '../components/Options';

export default function Main() {
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
    <View
      style={[
        styles.container,
        darkMode
          ? {backgroundColor: colorsDark.background}
          : {backgroundColor: colorsLight.background},
      ]}>
      <Avatar name="Tasun Prasad" accountLvl="Premium" />
      <Options optionDesc="Account" />
      <Options optionDesc="Notifications" />
      <Options optionDesc="Settings" />
      <Options optionDesc="Help" />
      <Options optionDesc="Logout" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
