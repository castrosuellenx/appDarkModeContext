import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';

import {Theme} from '../context/Theme';
import {colorsLight, colorsDark} from '../config/colors';

import Avatar from '../components/Avatar';
import Options from '../components/Options';
import ButtonTheme from '../components/ButtonTheme';

export default function Main() {
  const theme = useContext(Theme);
  const darkMode = theme.state.darkMode;

  return (
    <View
      style={[
        styles.container,
        darkMode
          ? {backgroundColor: colorsDark.background}
          : {backgroundColor: colorsLight.background},
      ]}>
      <Avatar name="Tasun Prasad" accountLvl="Premium" />

      <Options iconName="person" optionDesc="Account" />
      <Options iconName="notifications" optionDesc="Notifications" />
      <Options iconName="settings" optionDesc="Settings" />
      <Options iconName="info" optionDesc="Help" />
      <Options iconName="logout" optionDesc="Logout" />

      <ButtonTheme />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
