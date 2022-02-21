/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const App = () => {
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

      <Text style={[styles.text, styles.workSans_black]}>
        WorkSans-Black Text text text text
      </Text>

      <View style={styles.division} />

      <Text style={[styles.text, styles.kintoSans_light]}>
        KintoSans-Light てきすと　テキスト
      </Text>

      <Text style={[styles.text, styles.kintoSans_regular]}>
        KintoSans-Regular てきすと　テキスト
      </Text>

      <Text style={[styles.text, styles.kintoSans_medium]}>
        KintoSans-Medium てきすと　テキスト
      </Text>

      <Text style={[styles.text, styles.kintoSans_bold]}>
        KintoSans-Bold てきすと　テキスト
      </Text>

      <Text style={[styles.text, styles.kintoSans_black]}>
        KintoSans-Black てきすと　テキスト text
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
  division: {
    height: 40,
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
  workSans_black: {
    fontFamily: 'WorkSans-Black',
  },
  kintoSans_light: {
    fontFamily: 'KintoSans-Light',
  },
  kintoSans_regular: {
    fontFamily: 'KintoSans-Regular',
  },
  kintoSans_medium: {
    fontFamily: 'KintoSans-Medium',
  },
  kintoSans_bold: {
    fontFamily: 'KintoSans-Bold',
  },
  kintoSans_black: {
    fontFamily: 'KintoSans-Bold',
  },
});

export default App;
