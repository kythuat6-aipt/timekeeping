import { useState } from 'react';
import styles from "styles"
import { Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from '@ant-design/react-native';
import { AIPT_TOKEN } from "utils/constants/config"

const HistoryTime = ({ navigation }) => {
  const logout = async () => {
    try {
      await AsyncStorage.removeItem(AIPT_TOKEN);
      navigation.navigate('login');
    } catch (error) {
      console.error('Lỗi khi đăng xuất:', error);
      Alert.alert('Lỗi', 'Đã xảy ra lỗi khi đăng xuất.');
    }
  };

  return (
    <Button style={styles.button} onPress={logout}>
    <Text style={styles.buttonText}>Đăng xuất</Text>
  </Button>
          
 
  )
}

export default HistoryTime