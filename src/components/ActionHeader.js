import React, {useState, useEffect, useRef, useContext} from 'react';
import {Text, View, Image} from 'react-native';
import {Avatar, Button} from '@rneui/themed';
import Images from '../constants/images';

const ActionHeader = () => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 15,
          paddingVertical: 20,
        }}
      >
        <Avatar size={55} rounded source={Images.avatar} />
        <View
          style={{
            paddingLeft: 15,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#000',
            }}
          >
            Reda Yagoub
          </Text>
          <View
            style={{
              flexDirection: 'row',
            }}
          >
            <Text
              style={{
                fontSize: 15,
                marginTop: 3,
                color: '#8d8d8d',
              }}
            >
              480 reels
            </Text>
            <Text
              style={{
                fontSize: 15,
                marginHorizontal: 6,
                color: '#8d8d8d',
              }}
            >
              .
            </Text>
            <Text
              style={{
                fontSize: 15,
                marginTop: 3,
                color: '#8d8d8d',
              }}
            >
              1.2M followers
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 15,
        }}
      >
        <Button
          buttonStyle={{
            backgroundColor: 'rgba(78, 116, 289, 1)',
            borderRadius: 7,
          }}
          containerStyle={{marginRight: 8, width: '60%'}}
        >
          <Image
            source={Images.follow}
            style={{
              width: 20,
              height: 20,
              marginRight: 5,
            }}
          />
          Follow
        </Button>
        <Button
          buttonStyle={{
            backgroundColor: '#f2f2f2',
            borderRadius: 7,
            paddingVertical: 10,
          }}
          containerStyle={{
            width: '18%',
            marginRight: 8,
          }}
        >
          <Image
            source={Images.messenger}
            style={{
              width: 20,
              height: 20,
            }}
          />
        </Button>
        <Button
          buttonStyle={{
            backgroundColor: '#f2f2f2',
            borderRadius: 7,
            paddingVertical: 14,
          }}
          containerStyle={{
            width: '18%',
          }}
        >
          <Image
            source={Images.caretdown}
            style={{
              width: 12,
              height: 12,
            }}
          />
        </Button>
      </View>
    </>
  );
};

export default ActionHeader;
