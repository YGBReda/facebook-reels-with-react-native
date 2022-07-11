import React, {useState, useEffect, useRef, useContext} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {Avatar, Button} from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Images from '../../constants/images';
const ReelsHeader = ({navigation}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.header, {top: insets.top + 5}]}>
      <View style={styles.headerBtnleft}>
        <TouchableOpacity
          style={{padding: 5}}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon name="arrow-left" size={20} color={'#fff'} />
        </TouchableOpacity>
      </View>
      <View style={styles.headerBtnright}>
        <TouchableOpacity
          style={{
            paddingVertical: 10,
            paddingHorizontal: 20,
            backgroundColor: '#ddd',
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 20,
          }}
        >
          <Icon name="camera" size={17} color={'#333'} />
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              marginLeft: 5,
              color: '#333',
            }}
          >
            Create
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 13,
            backgroundColor: '#2d2e2c9c',
            borderRadius: 30,
            marginHorizontal: 5,
          }}
        >
          <Icon name="search" size={16} color={'#fff'} />
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 5}}>
          <Avatar size={40} rounded source={Images.avatar} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 999,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  headerBtnleft: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  headerBtnright: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
export default ReelsHeader;
