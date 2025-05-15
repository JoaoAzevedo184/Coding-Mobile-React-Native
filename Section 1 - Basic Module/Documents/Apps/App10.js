import React, {Component} from "react";
import {View, Text, Button} from 'react-native';


class App extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            nome: 'Lucas'
        }
        this.entrar = this.entrar.bind(this);
    }
    entrar(){
        this.setState({nome: 'Lucas2'});
    }
    render(){
        return(
            <View style={{marginTop: 30}}>
                <Button title="Entrar" onPress={() => this.entrar('Algun Texto')}/>
                <Text 
                style={{margin:25 ,fontSize: 30, color: 'blue', textAlign: 'center'}}>
                    Olá, {this.state.nome}!
                </Text>
            </View>
        )
  }
}
export default App;