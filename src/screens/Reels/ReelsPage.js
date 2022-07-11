import React, {useState, useEffect, useRef, useContext} from 'react';
import {StyleSheet, Text, View, StatusBar, ScrollView} from 'react-native';
import KeepAwake from 'react-native-keep-awake';
import Colors from '../../constants/Colors';
import VideoPlayer from 'react-native-video-player';
import {screenHeight, screenWidth, windowHeight} from '../../helpers';
import Swiper from 'react-native-swiper';
import ReelsHeader from '../../components/Headers/ReelsHeader';
import CounterSection from '../../components/CounterSection';
import CommentsSection from '../../components/CommentsSection';
import PageName from '../../components/PageName';

function ReelsPage({navigation, route}) {
  const {indexOfCurrentItem, dataList} = route.params;

  function renderVideos() {
    return dataList.map((item, index) => {
      return (
        <View
          style={{
            height: windowHeight,
          }}
          key={index}
        >
          <VideoPlayer
            video={item.link}
            autoplay={true}
            thumbnail={item.thumb}
            videoWidth={screenWidth}
            videoHeight={screenHeight}
            resizeMode={'cover'}
            pauseOnPress={true}
            disableFullscreen={false}
          />
          <PageName />
          <CounterSection />
          <CommentsSection />
        </View>
      );
    });
  }

  return (
    <View style={styles.container}>
      <KeepAwake />
      <StatusBar backgroundColor="transparent" barStyle={'light-content'} />
      <ReelsHeader navigation={navigation} />
      <Swiper
        horizontal={false}
        showsPagination={false}
        showsButtons={false}
        loop={false}
        autoplay={false}
        index={indexOfCurrentItem}
      >
        {renderVideos()}
      </Swiper>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: Colors.BACKGROUND_SCREEN,
  },
});
export default ReelsPage;
