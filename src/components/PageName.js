import React, {useState, useEffect, useRef, useContext} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Avatar, Button} from '@rneui/themed';
import Images from '../constants/images';
import Icon from 'react-native-vector-icons/FontAwesome';
import AutoScroll from '@homielab/react-native-auto-scroll';

const PageName = () => {
  return (
    <View style={{position: 'absolute', bottom: 40, left: 12}}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 8,
        }}
      >
        <Avatar size={40} rounded source={Images.avatar} />
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: '#fff',
            marginHorizontal: 10,
          }}
        >
          Reda Yagoub
        </Text>
        <Icon name="globe" size={15} color={'#fff'} />
      </TouchableOpacity>

      <AutoScroll
        endPaddingWidth={30}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#dddddd57',
          paddingHorizontal: 5,
          paddingVertical: 5,
          borderRadius: 20,
          width: 180,
        }}
      >
        <TouchableOpacity
          style={{
            overflow: 'hidden',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Avatar size={30} rounded source={Images.avatar} />
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: '#fff',
              marginHorizontal: 10,
            }}
          >
            Reda Ygaoub . Original Audio
          </Text>
        </TouchableOpacity>
      </AutoScroll>
    </View>
  );
};

export default PageName;
