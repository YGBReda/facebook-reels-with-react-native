import React, {useState, useEffect, useRef, useContext} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const CommentsSection = () => {
  return (
    <View
      style={{
        height: 50,
        position: 'absolute',
        bottom: -30, // adjute this value for responsive
        right: 0,
        left: 0,
        zIndex: 9999,
        backgroundColor: '#202020',
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: '#202020',
          height: 50,
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <Text
          style={{
            fontSize: 15,

            color: '#ddd',
            marginLeft: 20,
            marginBottom: 4,
          }}
        >
          Add a comment ...
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CommentsSection;
