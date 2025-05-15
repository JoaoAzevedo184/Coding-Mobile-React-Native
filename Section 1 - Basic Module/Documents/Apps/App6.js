import React, {Component} from "react";
import {View, Text, Image} from 'react-native';

class App extends Component{
  render(){
    return(//chamando o componente Uninassau e atribuindo novas props
        <View>
          <Text>Olá, galera! </Text>
          <Uninassau largura={300} altura={300}/>
        
        </View>
    )
  }
}
export default App;

class Uninassau extends Component{//criando seu próprio componente
  render(){
    const img = 'https://logo.uninassau.edu.br/img/png/uninassau_share.png';
    return(
      <Image
      source = {{ uri: img}}//é obrigatório colocar largura e altura
      style={{width: this.props.largura, height: this.props.altura}}
      />  
    )
    }
}
