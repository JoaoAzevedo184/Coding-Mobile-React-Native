# Criando Componentes no React Native

## Fundamentos da Criação de Componentes

No desenvolvimento com React Native, componentes são os blocos fundamentais utilizados para construir a interface do usuário. Dominar a criação de componentes é essencial para desenvolver aplicações móveis eficientes e escaláveis.

### Tipos de Componentes no React Native

Existem dois principais tipos de componentes que você pode criar:

1. **Componentes Funcionais** - Mais modernos, simples e recomendados
2. **Componentes de Classe** - Abordagem tradicional baseada em classes ES6

## Componentes Funcionais

Os componentes funcionais são funções JavaScript que retornam elementos JSX. São a forma recomendada de criar componentes no React Native moderno, especialmente com a introdução dos Hooks.

### Estrutura Básica

```jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function NomeDoComponente(props) {
  // Lógica do componente (se necessário)
  
  // Retorno do JSX
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Olá, {props.nome}!</Text>
    </View>
  );
}

// Estilos do componente
const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  texto: {
    fontSize: 16,
    color: '#333',
  },
});

// Exportação do componente
export default NomeDoComponente;
```

### Com Arrow Functions

Os componentes funcionais também podem ser escritos como arrow functions, proporcionando uma sintaxe mais concisa:

```jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NomeDoComponente = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Olá, {props.nome}!</Text>
    </View>
  );
};

// Com retorno implícito (para componentes simples)
const ComponenteSimples = (props) => (
  <Text>Componente simples com {props.valor}</Text>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  texto: {
    fontSize: 16,
    color: '#333',
  },
});

export default NomeDoComponente;
```

## Componentes de Classe

Componentes de classe estendem `React.Component` e implementam um método `render()` que retorna JSX. Embora menos comuns em projetos novos, ainda são importantes de entender.

### Estrutura Básica

```jsx
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class NomeDoComponente extends Component {
  // Construtor (opcional)
  constructor(props) {
    super(props);
    // Inicialização do estado
    this.state = {
      contador: 0
    };
  }
  
  // Métodos do componente
  incrementarContador = () => {
    this.setState({ contador: this.state.contador + 1 });
  }
  
  // Método render (obrigatório)
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>
          Olá, {this.props.nome}! Contador: {this.state.contador}
        </Text>
        <Button 
          title="Incrementar" 
          onPress={this.incrementarContador} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  texto: {
    fontSize: 16,
    color: '#333',
  },
});

export default NomeDoComponente;
```

## Organização de Arquivos de Componentes

Uma boa organização de arquivos é crucial para manter seu projeto React Native escalável e fácil de manter.

### Estrutura de Pastas Recomendada

```
src/
├── components/
│   ├── comum/
│   │   ├── Botao.js
│   │   ├── Card.js
│   │   └── Input.js
│   ├── telas/
│   │   ├── TelaInicio/
│   │   │   ├── index.js
│   │   │   ├── Cabecalho.js
│   │   │   ├── ListaItens.js
│   │   │   └── styles.js
│   │   └── TelaPerfil/
│   │       ├── index.js
│   │       └── styles.js
│   └── navegacao/
│       └── TabBar.js
├── assets/
│   ├── imagens/
│   └── fontes/
├── utils/
├── services/
├── hooks/
└── App.js
```

### Estratégias de Organização

1. **Por tipo de componente**: Agrupar componentes semelhantes (buttons, cards, forms)
2. **Por funcionalidade**: Agrupar componentes relacionados a uma mesma feature
3. **Por tela**: Criar pastas para cada tela com seus componentes específicos

## Criando Componentes Reutilizáveis

Um dos principais benefícios do React Native é a capacidade de criar componentes reutilizáveis que podem ser usados em várias partes do aplicativo.

### Exemplo: Botão Personalizado Reutilizável

```jsx
// src/components/comum/BotaoPersonalizado.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BotaoPersonalizado = ({ 
  onPress, 
  titulo, 
  estilo, 
  estiloTexto,
  disabled = false,
  tipo = 'primario' 
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.botao,
        styles[tipo],
        disabled && styles.desabilitado,
        estilo
      ]}
    >
      <Text style={[
        styles.texto, 
        styles[`texto${tipo.charAt(0).toUpperCase() + tipo.slice(1)}`],
        disabled && styles.textoDesabilitado,
        estiloTexto
      ]}>
        {titulo}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  botao: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primario: {
    backgroundColor: '#007bff',
  },
  secundario: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#007bff',
  },
  perigo: {
    backgroundColor: '#dc3545',
  },
  sucesso: {
    backgroundColor: '#28a745',
  },
  desabilitado: {
    backgroundColor: '#cccccc',
    borderColor: '#bbbbbb',
  },
  texto: {
    fontSize: 16,
    fontWeight: '600',
  },
  textoPrimario: {
    color: '#ffffff',
  },
  textoSecundario: {
    color: '#007bff',
  },
  textoPerigo: {
    color: '#ffffff',
  },
  textoSucesso: {
    color: '#ffffff',
  },
  textoDesabilitado: {
    color: '#888888',
  },
});

export default BotaoPersonalizado;
```

### Uso do Componente Reutilizável

```jsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import BotaoPersonalizado from '../components/comum/BotaoPersonalizado';

const TelaLogin = () => {
  const fazerLogin = () => {
    // Lógica de login
    console.log('Login realizado');
  };
  
  const irParaCadastro = () => {
    // Navegação para tela de cadastro
    console.log('Navegando para cadastro');
  };
  
  return (
    <View style={styles.container}>
      {/* Form inputs iriam aqui */}
      
      <BotaoPersonalizado 
        titulo="Entrar" 
        tipo="primario" 
        onPress={fazerLogin} 
      />
      
      <BotaoPersonalizado 
        titulo="Criar Conta" 
        tipo="secundario" 
        onPress={irParaCadastro}
        estilo={styles.botaoCadastro}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  botaoCadastro: {
    marginTop: 16,
  }
});

export default TelaLogin;
```

## Componentes com Estado vs. Componentes sem Estado

Uma distinção importante é entre componentes com estado (stateful) e sem estado (stateless):

### Componentes Sem Estado (Stateless/Presentational)

- Focados apenas na apresentação visual
- Não gerenciam estado interno
- Recebem dados e callbacks via props
- Geralmente mais simples e reutilizáveis
- Ideais para interfaces de usuário puras

```jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Componente sem estado - apenas exibe dados
const InfoUsuario = ({ nome, email, tipo }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.email}>{email}</Text>
      <View style={[styles.badge, estilosPorTipo[tipo]]}>
        <Text style={styles.badgeText}>{tipo}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    color: '#666',
    marginVertical: 4,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});

const estilosPorTipo = {
  admin: {
    backgroundColor: '#007bff',
  },
  editor: {
    backgroundColor: '#28a745',
  },
  usuario: {
    backgroundColor: '#6c757d',
  },
};

export default InfoUsuario;
```

### Componentes Com Estado (Stateful/Container)

- Gerenciam e mantêm estado interno
- Podem conter lógica de negócios
- Geralmente coordenam componentes filhos
- Responsáveis por buscar e manipular dados

```jsx
import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import InfoUsuario from './InfoUsuario';
import BotaoPersonalizado from './BotaoPersonalizado';
import api from '../../services/api';

// Componente com estado - gerencia dados e lógica
const PerfilUsuario = ({ userId }) => {
  const [usuario, setUsuario] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  
  useEffect(() => {
    buscarDadosUsuario();
  }, [userId]);
  
  const buscarDadosUsuario = async () => {
    try {
      setCarregando(true);
      setErro(null);
      
      const resposta = await api.get(`/usuarios/${userId}`);
      setUsuario(resposta.data);
    } catch (error) {
      setErro('Falha ao carregar dados do usuário');
      console.error(error);
    } finally {
      setCarregando(false);
    }
  };
  
  if (carregando) {
    return (
      <View style={styles.centralizador}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }
  
  if (erro) {
    return (
      <View style={styles.centralizador}>
        <Text style={styles.textoErro}>{erro}</Text>
        <BotaoPersonalizado 
          titulo="Tentar Novamente" 
          onPress={buscarDadosUsuario} 
          tipo="primario"
          estilo={styles.botaoTentarNovamente} 
        />
      </View>
    );
  }
  
  return (
    <View style={styles.container}>
      <InfoUsuario 
        nome={usuario.nome}
        email={usuario.email}
        tipo={usuario.tipo}
      />
      
      <BotaoPersonalizado 
        titulo="Editar Perfil" 
        tipo="secundario" 
        onPress={() => console.log('Editar perfil')} 
        estilo={styles.botaoEditar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  centralizador: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  textoErro: {
    color: '#dc3545',
    textAlign: 'center',
    marginBottom: 16,
  },
  botaoTentarNovamente: {
    minWidth: 200,
  },
  botaoEditar: {
    marginTop: 16,
  },
});

export default PerfilUsuario;
```

## Componentização Eficiente

A componentização eficiente é uma arte que pode fazer grande diferença na qualidade do seu código e na velocidade de desenvolvimento.

### Diretrizes para Componentização Eficiente

1. **Princípio da Responsabilidade Única**
   - Um componente deve fazer apenas uma coisa
   - Se um componente se torna muito complexo, divida-o

2. **Estratégia de Refatoração**
   - Identifique padrões repetidos na UI
   - Extraia elementos repetidos em componentes reutilizáveis
   - Parametrize as diferenças utilizando props

3. **Granularidade Adequada**
   - Componentes muito pequenos podem levar a fragmentação excessiva
   - Componentes muito grandes são difíceis de manter
   - Encontre um equilíbrio baseado na reusabilidade e coesão

### Exemplo de Refatoração para Componentização

**Antes da Componentização:**

```jsx
function TelaInicio() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>Notícias</Text>
        <TouchableOpacity>
          <Text style={styles.botaoVerMais}>Ver Todas</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.card}>
        <Image source={require('../assets/noticia1.jpg')} style={styles.imagem} />
        <Text style={styles.tituloCard}>Lançamento do novo app</Text>
        <Text style={styles.descricao}>O novo aplicativo foi lançado com recursos inovadores...</Text>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Ler mais</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.card}>
        <Image source={require('../assets/noticia2.jpg')} style={styles.imagem} />
        <Text style={styles.tituloCard}>Atualização disponível</Text>
        <Text style={styles.descricao}>Uma nova atualização traz melhorias de desempenho...</Text>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Ler mais</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>Eventos</Text>
        <TouchableOpacity>
          <Text style={styles.botaoVerMais}>Ver Todos</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.card}>
        <Image source={require('../assets/evento1.jpg')} style={styles.imagem} />
        <Text style={styles.tituloCard}>Workshop de React Native</Text>
        <Text style={styles.descricao}>Aprenda as melhores práticas de desenvolvimento...</Text>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Inscrever-se</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
```

**Depois da Componentização:**

```jsx
// SecaoComCabecalho.js
function SecaoComCabecalho({ titulo, onVerMais, children }) {
  return (
    <View>
      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>{titulo}</Text>
        <TouchableOpacity onPress={onVerMais}>
          <Text style={styles.botaoVerMais}>Ver Todos</Text>
        </TouchableOpacity>
      </View>
      {children}
    </View>
  );
}

// CardItem.js
function CardItem({ imagem, titulo, descricao, textoBotao, onPress }) {
  return (
    <View style={styles.card}>
      <Image source={imagem} style={styles.imagem} />
      <Text style={styles.tituloCard}>{titulo}</Text>
      <Text style={styles.descricao}>{descricao}</Text>
      <TouchableOpacity style={styles.botao} onPress={onPress}>
        <Text style={styles.textoBotao}>{textoBotao}</Text>
      </TouchableOpacity>
    </View>
  );
}

// TelaInicio.js
function TelaInicio() {
  const navegarParaTodasNoticias = () => {/* navegação */};
  const navegarParaTodosEventos = () => {/* navegação */};
  const lerMaisNoticia = (id) => {/* navegação */};
  const inscreverEvento = (id) => {/* lógica */};
  
  return (
    <ScrollView style={styles.container}>
      <SecaoComCabecalho 
        titulo="Notícias" 
        onVerMais={navegarParaTodasNoticias}>
        
        <CardItem 
          imagem={require('../assets/noticia1.jpg')} 
          titulo="Lançamento do novo app" 
          descricao="O novo aplicativo foi lançado com recursos inovadores..." 
          textoBotao="Ler mais" 
          onPress={() => lerMaisNoticia(1)} 
        />
        
        <CardItem 
          imagem={require('../assets/noticia2.jpg')} 
          titulo="Atualização disponível" 
          descricao="Uma nova atualização traz melhorias de desempenho..." 
          textoBotao="Ler mais" 
          onPress={() => lerMaisNoticia(2)} 
        />
      </SecaoComCabecalho>
      
      <SecaoComCabecalho 
        titulo="Eventos" 
        onVerMais={navegarParaTodosEventos}>
        
        <CardItem 
          imagem={require('../assets/evento1.jpg')} 
          titulo="Workshop de React Native" 
          descricao="Aprenda as melhores práticas de desenvolvimento..." 
          textoBotao="Inscrever-se" 
          onPress={() => inscreverEvento(1)} 
        />
      </SecaoComCabecalho>
    </ScrollView>
  );
}
```

## Padrões Avançados de Componentes

À medida que sua aplicação cresce, padrões mais avançados de componentes podem ser úteis:

### 1. Padrão de Composição

Crie componentes que se compõem facilmente juntos para construir interfaces complexas:

```jsx
// Sistema de componentes compostos
const Form = ({ children, onSubmit }) => (
  <View style={styles.form}>
    {children}
    <BotaoPersonalizado titulo="Enviar" onPress={onSubmit} tipo="primario" />
  </View>
);

Form.Input = ({ label, value, onChange, ...rest }) => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>{label}</Text>
    <TextInput 
      style={styles.input}
      value={value}
      onChangeText={onChange}
      {...rest}
    />
  </View>
);

Form.Switch = ({ label, value, onChange }) => (
  <View style={styles.switchContainer}>
    <Text style={styles.label}>{label}</Text>
    <Switch value={value} onValueChange={onChange} />
  </View>
);

// Uso
function FormularioRegistro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [receberNotificacoes, setReceberNotificacoes] = useState(false);
  
  const enviar = () => {
    // Lógica de envio
  };
  
  return (
    <Form onSubmit={enviar}>
      <Form.Input 
        label="Nome" 
        value={nome} 
        onChange={setNome} 
        placeholder="Seu nome completo" 
      />
      <Form.Input 
        label="Email" 
        value={email} 
        onChange={setEmail} 
        placeholder="seu@email.com" 
        keyboardType="email-address" 
      />
      <Form.Switch 
        label="Receber notificações" 
        value={receberNotificacoes} 
        onChange={setReceberNotificacoes} 
      />
    </Form>
  );
}
```

### 2. Higher-Order Components (HOC)

Técnica para reutilizar lógica de componentes:

```jsx
// HOC para adicionar funcionalidade de carregamento
const comCarregamento = (WrappedComponent) => {
  return function ComCarregamento({ isLoading, ...props }) {
    if (isLoading) {
      return (
        <View style={styles.centralizador}>
          <ActivityIndicator size="large" color="#007bff" />
        </View>
      );
    }
    
    return <WrappedComponent {...props} />;
  };
};

// Componente original
const ListaUsuarios = ({ usuarios }) => (
  <FlatList 
    data={usuarios}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => (
      <Text>{item.nome}</Text>
    )}
  />
);

// Componente aumentado com HOC
const ListaUsuariosComCarregamento = comCarregamento(ListaUsuarios);

// Uso
function TelaUsuarios() {
  const [carregando, setCarregando] = useState(true);
  const [usuarios, setUsuarios] = useState([]);
  
  useEffect(() => {
    // Buscar dados...
    setCarregando(false);
  }, []);
  
  return (
    <ListaUsuariosComCarregamento 
      isLoading={carregando}
      usuarios={usuarios}
    />
  );
}
```

## Erros Comuns e Como Evitá-los

### 1. Componentes Muito Grandes

**Problema**: Componentes com centenas de linhas são difíceis de entender e manter.

**Solução**: Divida em subcomponentes menores com responsabilidades específicas.

### 2. Props Drill (Repassar Props em Múltiplos Níveis)

**Problema**: Passar props através de muitos níveis de componentes.

**Solução**: Use Context API para estado global ou componha componentes de maneira diferente.

### 3. Lógica Duplicada

**Problema**: Mesma lógica repetida em vários componentes.

**Solução**: Extraia lógica comum para hooks personalizados ou HOCs.

### 4. Mistura de Apresentação e Lógica

**Problema**: Componentes que misturam lógica de UI com lógica de negócios.

**Solução**: Separe em componentes de apresentação e contêineres.

## Melhores Práticas

1. **Mantenha os componentes pequenos e focados**
2. **Nomeie componentes de forma clara e descritiva**
3. **Documente props complexos com comentários ou PropTypes**
4. **Separe lógica de UI e lógica de negócios**
5. **Use composição em vez de herança**
6. **Extraia lógica reutilizável para hooks personalizados**
7. **Prefira componentes funcionais e hooks**
8. **Mantenha a imutabilidade dos dados**
9. **Teste seus componentes**
10. **Otimize renderizações com memoização quando necessário**
