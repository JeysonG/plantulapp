/* Taildwind css */

import { StyleSheet } from 'react-native';
import { color, t } from 'react-native-tailwindcss';

export const customStyles = {
  touchableHighlight: [t.rounded, t.p3, t.mT4, t.bgGreen400, t.colorWhite],
  textTouchable: [t.textCenter, t.textWhite],
};

export const styles = StyleSheet.create({
  scrollViewContentContainer: {
    paddingVertical: 50,
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 25,
    marginBottom: 30,
    color: color.green500,
    fontWeight: 'bold',
  },
  textTouchable: {
    color: color.white,
  },
  textExistAccount: {
    fontSize: 12,
    marginTop: 20,
    color: color.green500,
    fontWeight: 'bold',
  },
});
