import React, {useState, useEffect, useRef, useContext} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import KeepAwake from 'react-native-keep-awake';
import Colors from '../../constants/Colors';
import Header from '../../components/Headers/Header';
import ActionHeader from '../../components/ActionHeader';
import ProfileVideos from '../../components/ProfileVideos';

const Profile = props => {
  const navigation = props.navigation;

  return (
    <View style={styles.container}>
      <Header title={"Reda Yagoub's Reels"} />
      <KeepAwake />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}
      >
        <ActionHeader />
        <ProfileVideos navigation={navigation} />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND_SCREEN,
  },
});
export default Profile;
