import React, { FC } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import MusicPlayer from './components/MusicPlayer';

const App: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />
      <MusicPlayer />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
