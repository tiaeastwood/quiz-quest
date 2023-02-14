import React, { useEffect, useState } from 'react';
import { Image, View, Text, SafeAreaView, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

import styles from './Starter.style.js';

const Starter = () => {

  return (
    <SafeAreaView style={styles.container}>
          <Text style={styles.bold}>STORYLINE</Text>
    </SafeAreaView>
  );
};

export default Starter;
