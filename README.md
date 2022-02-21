# How to add and utilize custom fonts in React Native

## 1. Download fonts

Download the font you want to use from Google Fonts, etc.

- [Google Fonts](https://fonts.google.com/)

## 2.　 Adding fonts to a project

Add the downloaded fonts to the project's assets/fonts.

## 3. Create react-native.config.js

Create a react-native.config.js file and add the following.

```js
module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./assets/fonts/'],
};
```

If you want to put fonts in src/fonts, change the path of assets in react-native.config.js to ./src/fonts/.

## 4. Link the font assets

In order to add a font to an IOS or android file, you need to link it using the link command.

```zsh
  npx react-native link
```

## 5. How to use the fonts you have added

In this repository, WorkSans is added and used.

Example

```tsx
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const App: React.VFC = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <Text style={[styles.text, styles.workSans_light]}>
        WorkSans-Light Text text text text
      </Text>

      <Text style={[styles.text, styles.workSans_regular]}>
        WorkSans-Regular Text text text text
      </Text>

      <Text style={[styles.text, styles.workSans_medium]}>
        WorkSans-Medium Text text text text
      </Text>

      <Text style={[styles.text, styles.workSans_semiBold]}>
        WorkSans-SemiBold Text text text text
      </Text>

      <Text style={[styles.text, styles.workSans_bold]}>
        WorkSans-Bold Text text text text
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginLeft: 8,
    marginRight: 8,
  },
  text: {
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: 16,
    paddingTop: 4,
  },
  workSans_light: {
    fontFamily: 'WorkSans-Light',
  },
  workSans_regular: {
    fontFamily: 'WorkSans-Regular',
  },
  workSans_medium: {
    fontFamily: 'WorkSans-Medium',
  },
  workSans_semiBold: {
    fontFamily: 'WorkSans-SemiBold',
  },
  workSans_bold: {
    fontFamily: 'WorkSans-Bold',
  },
});
```

## References

https://www.bigbinary.com/learn-react-native/adding-custom-fonts
