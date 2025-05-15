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

                <Logo largura={500} altura={200}/>
                
                <Text 
                style={{margin:25 ,fontSize: 30, color: 'blue', textAlign: 'center'}}>
                    Olá, {nome}!
                </Text>
            </View>
        )
  }
}
class Logo extends Component{
    render(){
        let img = 'https://example.com/image.png'; // URL da imagem
        return(
            <View>
                <Image
                    source={{uri: img}}
                    style={{width: this.props.largura, height: this.props.altura}}/>
            </View>
        )
  }
}
export default App;