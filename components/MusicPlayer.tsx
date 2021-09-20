import React, { FC, useEffect, useRef, useState } from 'react';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,
  Animated,
} from 'react-native';
import Slider from '@react-native-community/slider';
import { songs } from '../constants/Data';
const { width } = Dimensions.get('window');

const MusicPlayer: FC = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [songIndex, setSongIndex] = useState(0);

  useEffect(() => {
    scrollX.addListener(({ value }) => {
      const index = Math.round(value / width);
      setSongIndex(index);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* album coVER */}
      <View style={styles.mainContainer}>
        {/* list of songs */}
        <Animated.FlatList
          data={songs}
          renderItem={({ item }) => (
            <Animated.View
              style={{
                width: width,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <View style={styles.albumSong}>
                <Image source={item.image} style={styles.albumSongImage} />
              </View>
            </Animated.View>
          )}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: { x: scrollX },
                },
              },
            ],
            { useNativeDriver: true }
          )}
        />

        {/* artist name */}
        <View>
          <Text style={styles.title}>{songs[songIndex].title}</Text>
          <Text style={styles.artist}>{songs[songIndex].artist}</Text>
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
            <Ionicons
              name='play-skip-back-outline'
              size={40}
              color='#FFD369'
              style={{ marginTop: 25 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name='ios-pause-circle' size={75} color='#FFD369' />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name='play-skip-forward-outline'
              size={40}
              color='#FFD369'
              style={{ marginTop: 25 }}
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
              size={28}
              color='#777777'
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons name='repeat' size={28} color='#777777' />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name='share-outline'
              size={28}
              color='#777777'
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name='ellipsis-horizontal' size={28} color='#777777' />
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
    marginVertical: 20,
  },
});
