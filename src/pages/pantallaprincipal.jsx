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
    // Estilos del componente
    const styles = StyleSheet.create({
      container: {
        flex: 1, // Ocupa todo el espacio disponible
        justifyContent: 'center',  // Centra verticalmente el contenido
        alignItems: 'center', // Centra horizontalmente el contenido
      },
      title: {
        fontSize: 24, // Tamaño de fuente del título
        fontWeight: 'bold', // Estilo de fuente en negrita
        marginBottom: 10, // Espacio inferior de 10 unidades
      },
      subtitle: {
        fontSize: 18, // Tamaño de fuente del subtítulo
        color: 'gray', // Color gris del texto
      },
    });

    export default HomeScreen;