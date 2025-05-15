import React, {Component} from "react";
import {View, Text, Image} from 'react-native';

class App extends Component{
  render(){
    return(
        <View>
          <Text>Olá, galera! </Text> 
         <Image
          source = {{ uri: 'https://logo.uninassau.edu.br/img/png/uninassau_share.png'}}
          style={{width: 300, height: 300}}//é obrigatório colocar largura e altura
          />        
        </View>
    )
  }
}
export default App;