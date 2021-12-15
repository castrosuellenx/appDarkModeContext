import React, {useContext} from 'react';
import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';

import {Theme} from '../context/Theme';
import {colorsLight, colorsDark} from '../config/colors';
import AvatarPicture from '../assets/avatar.png';

export default function Avatar({name, accountLvl}) {
  const theme = useContext(Theme);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <View
        style={[
          styles.avatar,
          darkMode
            ? {borderColor: colorsDark.primary}
            : {borderColor: colorsLight.primary},
        ]}>
        <Image source={AvatarPicture} style={styles.avatarPicture} />
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
    </>
  );
}

const windowWidth = Dimensions.get('window').width;
//const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
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
    marginTop: '7%',
  },
  accountLvl: {
    fontSize: 20,
    fontFamily: 'GothamBook',
    textAlign: 'center',
    marginTop: '1%',
    marginBottom: '5%',
  },
});
