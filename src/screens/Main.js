import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';

import {Theme} from '../context/Theme';
import {colorsLight, colorsDark} from '../config/colors';
import Avatar from '../assets/avatar.png';

export default function Main({name = 'Tasun Prasad', accountLvl = 'Premium'}) {
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
      <View
        style={[
          styles.avatar,
          darkMode
            ? {borderColor: colorsDark.primary}
            : {borderColor: colorsLight.primary},
        ]}>
        <Image source={Avatar} style={styles.avatarPicture} />
      </View>

      <Text
        style={[
          styles.name,
          darkMode
            ? {color: colorsDark.secondary}
            : {color: colorsLight.secondary},
        ]}>
        {name}
      </Text>
      <Text
        style={[
          styles.accountLvl,
          darkMode ? {color: colorsDark.primary} : {color: colorsLight.primary},
        ]}>
        {accountLvl}
      </Text>

      <TouchableOpacity onPress={onChangeTheme}>
        <Text>Mudar tema</Text>
      </TouchableOpacity>
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  avatar: {
    width: windowWidth / 2.5,
    height: windowWidth / 2.5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderRadius: 100,
  },
  avatarPicture: {
    width: '100%',
    height: '100%',
  },
  name: {
    fontSize: 27,
    fontFamily: 'GothamMedium',
    textAlign: 'center',
  },
  accountLvl: {
    fontSize: 20,
    fontFamily: 'GothamBook',
    textAlign: 'center',
  },
});
