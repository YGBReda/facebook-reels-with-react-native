import React, {useState, useEffect, useRef, useContext} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Header as HeaderRNE} from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../constants/Colors';

const Header = ({title}) => {
  return (
    <HeaderRNE
      backgroundColor={'#fff'}
      leftComponent={
        <View style={styles.headerBtn}>
          <TouchableOpacity style={{padding: 5}}>
            <Icon name="arrow-left" size={21} color={Colors.TEXT} />
          </TouchableOpacity>
        </View>
      }
      rightComponent={
        <View style={styles.headerBtn}>
          <TouchableOpacity style={{padding: 5}}>
            <Icon name="ellipsis-h" size={21} color={Colors.TEXT} />
          </TouchableOpacity>
        </View>
      }
      centerComponent={{text: title, style: styles.heading}}
      containerStyle={{
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
      }}
    />
  );
};
const styles = StyleSheet.create({
  heading: {
    color: Colors.PRIMARY,
    fontSize: 19,
    fontWeight: 'bold',
    includeFontPadding: false,
    paddingVertical: 10,
  },
  headerBtn: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
});
export default Header;
