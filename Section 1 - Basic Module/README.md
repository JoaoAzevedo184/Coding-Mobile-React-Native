# Guia do React Native com Expo

## 1. Introdução
Este guia irá ajudá-lo a criar seu primeiro aplicativo React Native usando Expo.

## 2. Pré-requisitos
- Node.js instalado
- Expo CLI
```bash
npm install -g expo-cli
```

## 3. Criando um Novo Projeto
### Comandos Básicos
| Comando | Descrição |
|---------|-----------|
| `npx create-expo-app MeuApp` | Cria um app básico |
| `npx create-expo-app nomeapp -t tabs` | Cria app com navegação por abas |
| `-t` ou `--template` | Seleciona template específico |

## 4. Estrutura do Projeto
```
MeuApp/
├── app/                    # Telas do aplicativo
│   ├── (tabs)/            # Configuração de tabs
│   ├── _layout.tsx        # Layout principal
│   └── +not-found.tsx     # Página 404
├── assets/                # Recursos estáticos
├── components/            # Componentes reutilizáveis
├── constants/            # Configurações globais
├── hooks/                # Custom hooks
└── node_modules/        # Dependências
```

## 5. Arquivos Principais
- **app.json**: Configurações Expo
- **package.json**: Dependências
- **tsconfig.json**: Config TypeScript
- **.gitignore**: Exclusões Git

## 6. Componentes Disponíveis
- `ThemedView`: Base com temas
- `ThemedText`: Textos com temas
- `ParallaxScrollView`: Scroll com parallax
- `Collapsible`: Expansível
- `HelloWave`: Exemplo de animação

## 7. Scripts de Desenvolvimento
```bash
npm start          # Inicia desenvolvimento
npm run android    # Roda no Android
npm run ios        # Roda no iOS
npm run web        # Roda na Web
```

## 8. Funcionalidades
- ✅ Navegação por arquivos (Expo Router)
- ✅ Temas claro/escuro
- ✅ Animações (react-native-reanimated)
- ✅ Suporte multiplataforma
- ✅ Fontes personalizadas
- ✅ Componentes UI reutilizáveis

## 9. Links Úteis
- [Documentação Oficial do Expo](https://docs.expo.dev/)
- [React Native Docs](https://reactnative.dev/)
