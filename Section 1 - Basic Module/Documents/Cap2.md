# Estrutura Básica do React Native

## O que são Components?

Components são blocos de construção fundamentais no React Native. Eles são elementos reutilizáveis que definem uma parte da interface do usuário. Cada componente encapsula uma funcionalidade específica e pode ser usado múltiplas vezes em diferentes partes da aplicação.

### Características dos Components:
- **Reutilizáveis**: Podem ser usados em várias partes da aplicação
- **Independentes**: Funcionam de forma isolada
- **Compostos**: Podem ser combinados para formar interfaces complexas
- **Declarativos**: Descrevem como a UI deve ser renderizada

## Componentização

A componentização é o processo de dividir a interface do usuário em componentes menores, independentes e reutilizáveis. Esta abordagem traz diversos benefícios:

### Vantagens da Componentização:
- **Manutenção simplificada**: Facilita encontrar e corrigir problemas
- **Reusabilidade**: O mesmo componente pode ser utilizado em diferentes telas
- **Testabilidade**: Componentes isolados são mais fáceis de testar
- **Colaboração**: Diferentes desenvolvedores podem trabalhar em componentes distintos simultaneamente
- **Escalabilidade**: Facilita o crescimento da aplicação de forma organizada

### Tipos de Componentes no React Native:
1. **Componentes de Função**: Mais modernos e recomendados (utilizam Hooks)
2. **Componentes de Classe**: Abordagem tradicional que usa a extensão de React.Component

## O método render()

O método `render()` é uma função essencial nos componentes React Native. Ele determina o que será exibido na tela.

### Características do render():
- É **obrigatório** em componentes de classe
- Deve retornar elementos JSX que representam a interface
- É executado sempre que o estado ou as props do componente são atualizados
- Em componentes funcionais, o corpo da função inteira funciona como um "render"

### Exemplo básico:

```jsx
// Em um componente de classe
class MeuComponente extends React.Component {
  render() {
    return (
      <View>
        <Text>Olá, mundo!</Text>
      </View>
    );
  }
}

// Em um componente funcional
function MeuComponente() {
  return (
    <View>
      <Text>Olá, mundo!</Text>
    </View>
  );
}
```

## Componentes Text e View

O React Native oferece componentes básicos que são os blocos de construção para as interfaces móveis.

### View
O componente `View` é equivalente a uma `<div>` no desenvolvimento web:

- Funciona como um **container** para outros componentes
- Usado para **organizar** e **agrupar** elementos na tela
- Permite aplicar **estilos** de layout, como flexbox
- Pode ser aninhado para criar estruturas complexas

### Text
O componente `Text` é usado para exibir texto na tela:

- Todo conteúdo textual **deve** estar dentro de um componente `Text`
- Pode ter propriedades de estilo específicas para formatação de texto
- Suporta aninhamento de outros componentes `Text` com estilos diferentes
- Gerencia quebras de linha e truncamento de texto

### Exemplo prático:

```jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function CartaoUsuario() {
  return (
    <View style={styles.cartao}>
      <View style={styles.cabecalho}>
        <Text style={styles.nome}>Maria Silva</Text>
      </View>
      <View style={styles.corpo}>
        <Text style={styles.bio}>
          Desenvolvedora mobile apaixonada por React Native
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cartao: {
    borderRadius: 8,
    backgroundColor: '#fff',
    padding: 16,
    elevation: 2,
  },
  cabecalho: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 8,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  corpo: {
    paddingTop: 8,
  },
  bio: {
    fontSize: 14,
    color: '#777',
  },
});

export default CartaoUsuario;
```

## Export e Import de Componentes

Para tornar os componentes reutilizáveis em toda a aplicação, é necessário exportá-los e importá-los adequadamente.

### Export

Existem duas formas principais de exportar componentes:

#### 1. Export Default
- Permite exportar um único item como padrão do arquivo
- Ao importar, não é necessário usar chaves `{}`
- Cada arquivo pode ter apenas um export default

```jsx
// Forma 1: Declarar e depois exportar
function MeuComponente() {
  return <Text>Olá!</Text>;
}
export default MeuComponente;

// Forma 2: Exportar na declaração
export default function MeuComponente() {
  return <Text>Olá!</Text>;
}
```

#### 2. Export Nomeado
- Permite exportar múltiplos itens de um arquivo
- Ao importar, é necessário usar chaves `{}` e o nome exato
- Útil quando um arquivo contém vários componentes, funções ou constantes

```jsx
// Exportando múltiplos itens
export function ComponenteA() {
  return <Text>Componente A</Text>;
}

export function ComponenteB() {
  return <Text>Componente B</Text>;
}

export const CORES = {
  primaria: '#007bff',
  secundaria: '#6c757d',
};
```

### Import

Para utilizar componentes em outros arquivos:

```jsx
// Importando um export default
import MeuComponente from './MeuComponente';

// Importando exports nomeados
import { ComponenteA, ComponenteB, CORES } from './MeusComponentes';

// Importando mix de default e nomeado
import Componente, { funcaoAuxiliar } from './Arquivo';

// Importando componentes do React Native
import { View, Text, Button, StyleSheet } from 'react-native';
```

### Dicas de Boas Práticas:
- Crie um componente por arquivo quando possível
- Use nomes claros e descritivos para seus componentes
- Mantenha uma estrutura organizada de pastas para seus componentes
- Considere criar um arquivo index.js em cada pasta para exportar todos os componentes
