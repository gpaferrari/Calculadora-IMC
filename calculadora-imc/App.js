import * as React from 'react';
import { Text, View,  StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm
import { TextInput,Button } from 'react-native-paper';

//import { Button } from 'react-native-paper';



export default class App extends React.Component {
  state={
    peso: 0,
    altura: 0,
    imc: 0,
    legenda:'indeterminado',
    cor: '#95a5a6', 
  }
  
  calcularIMC = () => {
    
    const resultado = this.state.peso/ (this.state.altura * this.state.altura);
    
    this.setState({
      imc:Math.ceil(resultado)      
    });

    if(resultado<18.5){
      this.setState({
        legenda:'Magreza',
        cor:'#f39c12'
      });
    } else if(resultado >= 18.5 && resultado < 25){
      this.setState({
        legenda:'Normal',
        cor:'#2ecc71'
      });
    } else if(resultado >= 25 && resultado < 30){
      this.setState({
        legenda:'Sobrepeso',
        cor:'#e67e22'
      });
    } else if(resultado >= 30 && resultado < 40){
      this.setState({
        legenda:'Obesidade 1',
        cor:'#d35400'
      }); 
    } else if (resultado >= 40){
      this.setState({
        legenda:'Obesidade Grave',
        cor:'#c0392b'
      });
    }
  }

  render() {

    const imc = 25;
    const legenda = 'Normal';



    return (
      <View style={styles.app}>
        <Text style={styles.legenda}>Seu IMC</Text>

        <View style={[styles.painel, {backgroundColor: this.state.cor}]}>
          <Text style={styles.resultado}>{this.state.imc}</Text>
          <Text style={styles.diagnostico}>{this.state.legenda}</Text>
        </View>

        <View>
          <TextInput 
          style={styles.peso}
          label='Peso' 
          onChangeText={valor => {
            this.setState({peso: valor.replace(',','.')});
          }}
          />
          <TextInput 
          style={styles.altura}
          label='Altura'
          onChangeText={(valor) => {
            this.setState({altura: valor.replace(',','.')})
          }}
           />
          <Button mode= 'outlined' onPress={this.calcularIMC}>
          Calcular
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    padding: 30,
  },
  painel:{
    
    alignSelf:'center',
    borderRadius: 5,
    width: 150,
    marginVertical: 10,
    padding:8, 
  },

  legenda: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  resultado: {
    textAlign: 'center',
    fontSize: '22',
    fontWeight: 'bold',
  },
  diagnostico: {
    textAlign: 'center',
    fontSize: '16',
    fontWeight: 'bold',
  },
  peso: {
   marginVertical: 10
  },
  altura: {
   marginVertical: 10 
  },
});

//const styles = StyleSheet.create({
//container: {
// flex: 1,
// justifyContent: 'center',
//paddingTop: Constants.statusBarHeight,
//backgroundColor: '#ecf0f1',
//padding: 8,
// },
//});
