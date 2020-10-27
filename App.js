import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm
import { TextInput, Button } from 'react-native-paper';

export default class App extends React.Component {
  // Valores globais do React
  state = {
    peso: 0,
    altura: 0,
    imc: 0,
    status: ' ',
    cor: '#e74c3c'
  }
  //Função que calcula o IMC
   calcularImc = () => {
     this.setState({
       imc: this.state.peso / (this.state.altura * this.state.altura)
     });

  // Lógica de condição dos Status
     if(this.state.peso == 0 || this.state.altura == 0){
       this.setState({
         status: 'Valor incorreto',
         cor: '#e74c3c'
       });
     }else if(this.state.imc < 18.5){
       this.setState({
         status: 'Magreza',
         cor: '#e74c3c'
       });
     }else if(this.state.imc >= 18.5 && this.state.imc < 25){
       this.setState({
         status: 'Normal',
         cor: '#e74c3c'
       });
     }else if(this.state.imc >= 25 && this.state.imc < 30){
       this.setState({
         status: 'Sobrepeso',
         cor: '#e74c3c'
       });
     }else if(this.state.imc >= 30 && this.state.imc < 40){
       this.setState({
         status: 'Obesidade',
         cor: '#e74c3c'
       });
     }else if(this.state.imc >= 40){
       this.setState({
         status: 'Obesidade Grave',
         cor: '#e74c3c'
       });
     }
    }

  render() {    
    return (
      <View style={styles.app}>
       <Text style={styles.legenda}>Vamos calcular seu IMC</Text>
       <View style={[styles.results, {backgroundColor: this.state.cor}]}>
        <Text style={styles.resultado}>{this.state.imc.toFixed(2)}</Text>
        <Text style={styles.diagnostico}>{this.state.status}</Text>
       </View>
       <View>
        <TextInput 
        style={styles.peso}
        label="Peso"
        onChangeText={valor => {
          this.setState({peso: valor});
        }}
        />
        <TextInput 
        style={styles.altura}
        label="Altura"
        onChangeText={valor => {
          this.setState({altura: valor.replace(',', '.')});
        }}
        />
        <Button mode='contained' onPress={this.calcularImc}>
          Calcular
        </Button>
       </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  app: {
   margin: 20, 
   padding: 30,
  },
  results:{
    borderRadius: 5,
    padding: 8,
    marginVertical: 20,
    width: 200,
    alignSelf: 'center'
  },
  legenda:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  resultado:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
  diagnostico:{
    textAlign: 'center',
    fontSize: 18,
  },
  peso:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    marginVertical: 10
  },
   altura:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    marginVertical: 10
  }
});
