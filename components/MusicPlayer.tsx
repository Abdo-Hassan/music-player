import React, { FC } from 'react';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import Slider from '@react-native-community/slider';
const { width } = Dimensions.get('window');

const MusicPlayer: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* album coVER */}
      <View style={styles.mainContainer}>
        <View style={styles.albumSong}>
          <Image
            source={require('../assets/albumCover3.jpg')}
            style={styles.albumSongImage}
          />
        </View>

        {/* artist name */}
        <View>
          <Text style={styles.title}>Song Title</Text>
          <Text style={styles.artist}>Song Artist Name</Text>
        </View>

        <View>
          <Slider
            style={styles.progressContainer}
            value={10}
            minimumValue={0}
            maximumValue={100}
            thumbTintColor='#FFD369'
            minimumTrackTintColor='#FFD369'
            maximumTrackTintColor='#FFF'
            onSlidingComplete={() => {}}
          />

          <View style={styles.progressLabelContainer}>
            <Text style={styles.progressLabelTxt}>0:00</Text>
            <Text style={styles.progressLabelTxt}>3.55</Text>
          </View>
        </View>

        {/* player buttons */}
        <View style={styles.musicContainer}>
          <TouchableOpacity>
            <Ionicons name='play-skip-back-outline' size={40} color='#FFD369' />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name='ios-pause-circle' size={40} color='#FFD369' />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name='play-skip-forward-outline'
              size={40}
              color='#FFD369'
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* bottom tabs */}
      <View style={styles.bottomContainer}>
        <View style={styles.bottomControls}>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name='heart-outline'
              size={24}
              color='#777777'
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons name='repeat' size={24} color='#777777' />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name='share-outline'
              size={24}
              color='#777777'
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name='ellipsis-horizontal' size={24} color='#777777' />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MusicPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    borderTopColor: '#393e46',
    borderTopWidth: 1,
    width: width,
    alignItems: 'center',
    paddingVertical: 15,
  },
  bottomControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  albumSong: {
    width: 300,
    height: 340,
    marginBottom: 25,
    // shadow for IOS
    shadowColor: '#ccc',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    // shadow for android
    elevation: 5,
  },
  albumSongImage: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: '#EEEEEE',
  },
  artist: {
    fontSize: 14,
    fontWeight: '200',
    textAlign: 'center',
    color: '#CCCCCC',
  },
  progressContainer: {
    width: 350,
    height: 40,
    marginTop: 45,
    flexDirection: 'row',
  },
  progressLabelContainer: {
    width: 350,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  progressLabelTxt: {
    color: '#fff',
  },
  musicContainer: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});
