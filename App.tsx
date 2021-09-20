import React, { FC } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import MusicPlayer from './components/MusicPlayer';

const App: FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <MusicPlayer />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
