import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, } from 'react-native';

export default function App() {
  //parte com super variaveis
  const [Real, setREAL] = useState('');
  const [Cotacao, setCOTACAO] = useState('');
  //funcion basica
  function Calculo(){
    const n1= parseFloat(Real);
    const n2= parseFloat(Cotacao);
    const total= n1/n2;
    
    alert("O total de Dollar é: " + total.toFixed(2));
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Aplicativo de Cotação do Dollar</Text>
      <TextInput style={styles.text}
      placeholder='Digite Total em Reais.'
      keyboardType='numeric'
      onChangeText={(Real) => setREAL(Real)}/>

      <TextInput style={styles.text}
      placeholder='Digite Cotação do dia em Dollar.'
      keyboardType='numeric'
      onChangeText={(Cotacao) => setCOTACAO(Cotacao)}/>

      <TouchableOpacity style={styles.botao} 
      onPress={Calculo}>
        <Text> CALCULAR</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F4F4F',
  },
  titulo: {
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 40,
    fontSize: 38,
    color: '#FFF',
    marginLeft: 100,
    marginRight: 100
  },
  text:{
    backgroundColor: '#FFF',
    borderRadius: 30,
    margin: 15,
    padding: 15,
    fontSize: 15,
    color:'#191970',
    marginLeft: 150,
    marginRight: 150,
    
  },
  botao:{
    justifyContent:'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#FFF',
    padding: 15,
    marginLeft: 150,
    marginRight: 150,
  },
});
