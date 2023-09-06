import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ESI educacion sexual integral</Text>
      <Text style={styles.subtitle}>pantalla principal</Text>
    </View>
     );
    };
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      subtitle: {
        fontSize: 18,
        color: 'gray',
      },
    });

    export default HomeScreen;