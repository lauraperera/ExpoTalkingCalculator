import * as React from 'react'; //importa tudo do react
import {Text, TouchableOpacity, TextInput, View, StyleSheet, StatusBar} from 'react-native'; //componentes do react native
import * as Speech from 'expo-speech';
import arquivoEstilo from './arquivoEstilo';

export default class App extends React.Component{
  state={
    valor1:0.0,
    valor2:0.0,
    resultado:0.0
  }

  atualizaValor1=(number)=>{
    this.setState({valor1:number})
  }

  atualizaValor2=(number)=>{
    this.setState({valor2:number})
  }
  
  falar(){
    Speech.speak(this.state.resultado.toString(), {
      language: "pt-BR"
    });
  }


  soma(){
    this.state.resultado = parseFloat(this.state.valor1) + parseFloat(this.state.valor2);
    alert(this.state.resultado);
    this.falar();
  }

  sub(){
    this.state.resultado = parseFloat(this.state.valor1) - parseFloat(this.state.valor2);
    alert(this.state.resultado);
    this.falar();
  }

  mult(){
    this.state.resultado = parseFloat(this.state.valor1) * parseFloat(this.state.valor2);
    alert(this.state.resultado);
    this.falar();
  }  

  div(){
    this.state.resultado = parseFloat(this.state.valor1) / parseFloat(this.state.valor2);
    alert(this.state.resultado);
    this.falar();
  }

  render(){
    return(
      <View>
        <StatusBar backgroundColor="black"/>

        <TextInput style={arquivoEstilo.TextInput}
          //esse tbm nao
          placeholder="Valor 1"
          //esse nao da p tirar
          onChangeText={this.atualizaValor1}
        />

        <TextInput style={arquivoEstilo.TextInput}
          placeholder="Valor 2"
          onChangeText={this.atualizaValor2}
        />

        <TouchableOpacity onPress={()=>this.soma(this.state.valor1, this.state.valor2, this.state.resultado)}>
          <Text style={arquivoEstilo.submitButton}>Somar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>this.sub(this.state.valor1, this.state.valor2, this.state.resultado)}>
          <Text style={arquivoEstilo.submitButton}>Subtrair</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>this.mult(this.state.valor1, this.state.valor2, this.state.resultado)}>
          <Text style={arquivoEstilo.submitButton}>Multiplicar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>this.div(this.state.valor1, this.state.valor2, this.state.resultado)}>
          <Text style={arquivoEstilo.submitButton}>Dividir</Text>
        </TouchableOpacity>

      </View>
    )
  }
}