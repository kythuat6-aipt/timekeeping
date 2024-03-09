import { useState } from 'react';
import styles from "styles"
import { Entypo } from '@expo/vector-icons';
import {
  View, TextInput, Text,
  TouchableOpacity, Image
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Button } from '@ant-design/react-native';
import { Form, Input, Spin } from 'antd';
import TimeKeeping from './timekeeping';
import HistoryTime from './historyTime';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
const HomePage = () => {

  const Tab = createBottomTabNavigator();
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Tab.Navigator>
          <Tab.Screen
            name="Trang chủ"
            options={{ tabBarIcon: () => <FontAwesome name="home" size={24} color="black" /> }}
            component={TimeKeeping} />

          <Tab.Screen
            name="Lịch sử"
            options={{ tabBarIcon: () => <MaterialIcons name="event-note" size={24} color="black" /> }}
            component={HistoryTime} />
        </Tab.Navigator>


      </View >

    </View>

  )
}

export default HomePage