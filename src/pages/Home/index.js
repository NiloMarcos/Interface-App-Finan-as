import React from 'react';

import { View, StyleSheet, Text, FlatList } from 'react-native';

import Header from '../../components/Header';

import Balance from '../../components/Balance';
import Movement from '../../components/Movement';
import Actions from '../../components/Actions';

const list = [
  { 
    id: 1,
    label: 'Boleto conta de luz',
    valor: '300,90',
    date: '17/09/2022',
    type: 0 // gastos
  },
  
  { 
    id: 2,
    label: 'Boleto conta de agua',
    valor: '127,63',
    date: '18/09/2022',
    type: 0 // gastos
  },
  
  { 
    id: 3,
    label: 'Pix cliente X',
    valor: '3,750,00',
    date: '20/09/2022',
    type: 1 // receita
  }
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Nilo Marcos" />

      <Balance saldo="9.250,90" gastos="-527,00" />

      <Actions />

      <Text style={styles.title}>Ultimas movimentações</Text>

      <FlatList 
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movement data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },
  list: {
    marginStart: 14,
    marginEnd: 14
  }
});