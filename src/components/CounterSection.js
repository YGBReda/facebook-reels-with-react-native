import React, {useState, useEffect, useRef, useContext} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CounterSection = () => {
  return (
    <View style={{position: 'absolute', bottom: 40, right: 12}}>
      <TouchableOpacity
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: 8,
        }}
      >
        <Icon
          name="thumbs-up"
          size={20}
          color={'#fff'}
          style={{
            paddingHorizontal: 12,
            paddingVertical: 10,
            backgroundColor: '#dddddd57',
            borderRadius: 30,
          }}
        />
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: '#fff',
          }}
        >
          3.1 k
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: 8,
        }}
      >
        <Icon
          name="comment"
          size={20}
          color={'#fff'}
          style={{
            padding: 10,
            backgroundColor: '#dddddd57',
            borderRadius: 30,
          }}
        />
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',

            color: '#fff',
          }}
        >
          2k
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: 8,
        }}
      >
        <Icon
          name="share"
          size={20}
          color={'#fff'}
          style={{
            padding: 10,
            backgroundColor: '#dddddd57',
            borderRadius: 30,
          }}
        />
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: '#fff',
          }}
        >
          1k
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: 5,
        }}
      >
        <Icon
          name="ellipsis-h"
          size={20}
          color={'#fff'}
          style={{
            paddingHorizontal: 12,
            paddingVertical: 10,
            backgroundColor: '#dddddd57',
            borderRadius: 30,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CounterSection;
