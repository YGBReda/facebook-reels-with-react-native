import React, {useState, useEffect, useRef, useContext} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import Videos from '../constants/videos';
import Images from '../constants/images';
import {LogBox} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

LogBox.ignoreLogs(['ViewPropTypes will be removed from React Native']);
const ProfileVideos = ({navigation}) => {
  const dataList = [
    {
      id: 1,
      link: Videos.production_ID_4434132,
      thumb: Images.thumb1,
      nbrvu: 1.5,
    },
    {
      id: 2,
      link: Videos.production_ID_4678261,
      thumb: Images.thumb2,
      nbrvu: 1.2,
    },
    {
      id: 3,
      link: Videos.production_ID_4434164,
      thumb: Images.thumb3,
      nbrvu: 1,
    },
    {
      id: 4,
      link: Videos.production_ID_4434160,
      thumb: Images.thumb4,
      nbrvu: 1.7,
    },
    {
      id: 5,
      link: Videos.production_ID_4434159,
      thumb: Images.thumb5,
      nbrvu: 1,
    },
    {
      id: 6,
      link: Videos.production_ID_4434150,
      thumb: Images.thumb6,
      nbrvu: 1.7,
    },
  ];

  return (
    <View
      style={{
        paddingVertical: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
    >
      {dataList.map((item, i) => {
        return (
          <TouchableOpacity
            key={i}
            style={{
              width: '33%',
              height: 200,
              marginBottom: 2,
            }}
            activeOpacity={1}
            onPress={() => {
              let indexOfCurrentItem = dataList.indexOf(item);
              navigation.navigate('Reels', {
                indexOfCurrentItem,
                dataList,
              });
            }}
          >
            <Image
              source={item.thumb}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
            <View
              style={{
                position: 'absolute',
                flexDirection: 'row',
                bottom: 8,
                left: 12,
                alignItems: 'center',
              }}
            >
              <Icon name="play" size={14} color="#fff" />
              <Text
                style={{
                  color: '#fff',
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginLeft: 6,
                }}
              >
                {item.nbrvu}M
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ProfileVideos;
