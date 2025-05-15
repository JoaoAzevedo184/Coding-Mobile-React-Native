import React, {Component} from "react";
import {View, Text, Image} from 'react-native';


class App extends Component{
    render(){
        let nome = 'Lucas'; 
        let img = 'https://example.com/image.png'; // URL da imagem
        return(
            <View>
                <Text 
                style={{margin:25 ,fontSize: 30, color: 'blue', textAlign: 'center'}}>
                    Olá, galera!
                </Text>

                <Image
                    source={{uri: img}}
                    style={{width: 100, height: 100}}/>
                <Text 
                style={{margin:25 ,fontSize: 30, color: 'blue', textAlign: 'center'}}>
                    Olá, {nome}!
                </Text>
            </View>
        )
  }
}
export default App;