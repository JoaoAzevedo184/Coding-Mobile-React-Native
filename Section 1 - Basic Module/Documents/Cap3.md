# Entendendo Props no React Native

## O que são Props?

Props (abreviação de "properties" ou propriedades) são um conceito fundamental no React Native que permite passar dados de um componente pai para um componente filho. As props funcionam como parâmetros de função que tornam os componentes dinâmicos e reutilizáveis.

### Características principais das Props:

- **Unidirecional**: Os dados fluem apenas de cima para baixo (do componente pai para o filho)
- **Imutável**: Uma vez definidas pelo componente pai, as props não podem ser alteradas pelo componente filho
- **Flexível**: Podem conter qualquer tipo de dado (strings, números, objetos, funções, etc.)
- **Nomeadas**: Cada prop tem um nome que a identifica

## Como utilizar Props

### Passando Props para Componentes

Para passar props para um componente, você simplesmente adiciona atributos ao componente quando o utiliza, similar a atributos HTML:

```jsx
// Componente pai passando props
import React from 'react';
import { View } from 'react-native';
import PerfilUsuario from './PerfilUsuario';

export default function App() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <PerfilUsuario 
        nome="Maria Silva" 
        idade={28} 
        profissao="Desenvolvedora Mobile" 
        fotoPerfil="https://exemplo.com/foto.jpg" 
        online={true}
      />
    </View>
  );
}
```

### Recebendo Props em Componentes Funcionais

Em componentes funcionais, as props são recebidas como um objeto parâmetro da função:

```jsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Desestruturando as props diretamente nos parâmetros
function PerfilUsuario({ nome, idade, profissao, fotoPerfil, online }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: fotoPerfil }} style={styles.foto} />
      <View style={styles.info}>
        <Text style={styles.nome}>{nome}</Text>
        <Text>Idade: {idade} anos</Text>
        <Text>Profissão: {profissao}</Text>
        <Text style={{ color: online ? 'green' : 'red' }}>
          {online ? 'Online' : 'Offline'}
        </Text>
      </View>
    </View>
  );
}

// Alternativa: recebendo o objeto props completo
function PerfilUsuarioAlternativo(props) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: props.fotoPerfil }} style={styles.foto} />
      <View style={styles.info}>
        <Text style={styles.nome}>{props.nome}</Text>
        <Text>Idade: {props.idade} anos</Text>
        <Text>Profissão: {props.profissao}</Text>
        <Text style={{ color: props.online ? 'green' : 'red' }}>
          {props.online ? 'Online' : 'Offline'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
    marginBottom: 10,
  },
  foto: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  info: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PerfilUsuario;
```

### Recebendo Props em Componentes de Classe

Em componentes de classe, as props são acessadas através de `this.props`:

```jsx
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class PerfilUsuario extends Component {
  render() {
    // Desestruturando this.props para facilitar o acesso
    const { nome, idade, profissao, fotoPerfil, online } = this.props;
    
    return (
      <View style={styles.container}>
        <Image source={{ uri: fotoPerfil }} style={styles.foto} />
        <View style={styles.info}>
          <Text style={styles.nome}>{nome}</Text>
          <Text>Idade: {idade} anos</Text>
          <Text>Profissão: {profissao}</Text>
          <Text style={{ color: online ? 'green' : 'red' }}>
            {online ? 'Online' : 'Offline'}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
    marginBottom: 10,
  },
  foto: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  info: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PerfilUsuario;
```

## Props Padrão (Default Props)

É uma boa prática definir valores padrão para props que podem não ser fornecidas pelo componente pai.

### Em Componentes Funcionais:

```jsx
import React from 'react';
import { Text } from 'react-native';

function Saudacao({ nome, tipo }) {
  return (
    <Text>
      {tipo}, {nome}!
    </Text>
  );
}

// Definindo props padrão
Saudacao.defaultProps = {
  nome: 'Visitante',
  tipo: 'Olá'
};

// Alternativa mais moderna com ES6 (parâmetros padrão)
function SaudacaoES6({ nome = 'Visitante', tipo = 'Olá' }) {
  return (
    <Text>
      {tipo}, {nome}!
    </Text>
  );
}

export default Saudacao;
```

### Em Componentes de Classe:

```jsx
import React, { Component } from 'react';
import { Text } from 'react-native';

class Saudacao extends Component {
  static defaultProps = {
    nome: 'Visitante',
    tipo: 'Olá'
  };
  
  render() {
    return (
      <Text>
        {this.props.tipo}, {this.props.nome}!
      </Text>
    );
  }
}

export default Saudacao;
```

## Children Props

O React Native permite passar elementos filhos entre as tags de abertura e fechamento de um componente, acessíveis através da prop especial `children`.

```jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Componente que aceita conteúdo filho
function Card({ titulo, children }) {
  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>{titulo}</Text>
      <View style={styles.conteudo}>
        {children}
      </View>
    </View>
  );
}

// Uso do componente com children
function App() {
  return (
    <View style={styles.container}>
      <Card titulo="Informações do Usuário">
        <Text>Nome: Carlos Santos</Text>
        <Text>Email: carlos@exemplo.com</Text>
        <Text>Telefone: (11) 98765-4321</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 6,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  conteudo: {
    paddingTop: 5,
  },
});

export default App;
```

## PropTypes para Validação de Props

Para aplicações mais robustas, é recomendado validar as props recebidas pelos componentes. Isso pode ser feito usando a biblioteca `prop-types`:

```jsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types'; // Importe a biblioteca

function PerfilUsuario({ nome, idade, profissao, fotoPerfil, online }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: fotoPerfil }} style={styles.foto} />
      <View style={styles.info}>
        <Text style={styles.nome}>{nome}</Text>
        <Text>Idade: {idade} anos</Text>
        <Text>Profissão: {profissao}</Text>
        <Text style={{ color: online ? 'green' : 'red' }}>
          {online ? 'Online' : 'Offline'}
        </Text>
      </View>
    </View>
  );
}

// Definindo validações para as props
PerfilUsuario.propTypes = {
  nome: PropTypes.string.isRequired,
  idade: PropTypes.number,
  profissao: PropTypes.string,
  fotoPerfil: PropTypes.string.isRequired,
  online: PropTypes.bool
};

// Definindo props padrão
PerfilUsuario.defaultProps = {
  idade: 0,
  profissao: 'Não informada',
  online: false
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
    marginBottom: 10,
  },
  foto: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  info: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PerfilUsuario;
```

## Props x State

É importante entender a diferença entre props e state:

| Props | State |
|-------|-------|
| Passadas de um componente pai para um filho | Gerenciado internamente pelo componente |
| Não podem ser modificadas pelo componente que as recebe | Pode ser alterado pelo próprio componente |
| Usadas para personalizar componentes no momento da renderização | Usado para dados que mudam com o tempo ou interações |
| Atualizações nas props vêm de renderizações do componente pai | Atualizações no state causam re-renderização do componente |

## Dicas e Boas Práticas para Props

1. **Nomeie props com clareza**: Use nomes descritivos que indiquem o propósito da prop.

2. **Minimize o número de props**: Se um componente precisa de muitas props, considere dividi-lo em componentes menores.

3. **Use desestruturação**: Torna o código mais limpo e legível.
   ```jsx
   // Com desestruturação
   function MeuComponente({ nome, idade, perfil }) {
     // usar nome, idade, perfil diretamente
   }
   
   // Sem desestruturação
   function MeuComponente(props) {
     const nome = props.nome;
     const idade = props.idade;
     const perfil = props.perfil;
     // continuar...
   }
   ```

4. **Sempre defina props padrão** para props opcionais.

5. **Use PropTypes** em desenvolvimento para capturar bugs cedo.

6. **Evite modificar props**: React e React Native trabalham com o princípio de imutabilidade.

7. **Passar funções como props**: É uma prática comum para permitir comunicação do filho para o pai.
   ```jsx
   function Pai() {
     const handleClick = () => {
       console.log('Botão clicado no filho');
     };
     
     return <Filho onBotaoClick={handleClick} />;
   }
   
   function Filho({ onBotaoClick }) {
     return (
       <Button title="Clique-me" onPress={onBotaoClick} />
     );
   }
   ```

8. **Evite passar todo o estado como prop**: Passe apenas o que o componente filho realmente precisa.

9. **Props de spread com cautela**: Embora conveniente, passar todas as props de uma vez (`{...props}`) pode tornar o código menos explícito.
