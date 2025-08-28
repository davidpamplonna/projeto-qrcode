# Projeto QRCode

Kit de utilidades para e-commerces, com geração de QR Code e criação de senhas seguras via terminal.

## Funcionalidades

- **Gerar QR Code**: Crie QR Codes a partir de links, podendo escolher entre visualização normal ou compacta no terminal.
- **Gerar Senha Segura**: Crie senhas aleatórias com critérios personalizáveis definidos no arquivo `.env`.

### Pré-requisitos

- Node.js instalado

### Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/projeto-qrcode.git
   cd projeto-qrcode
   ```

## Como usar

Instale as dependências:
```sh
npm install
```

Configure o arquivo .env conforme desejado:
```sh
UPPERCASE_LETTERS = true
LOWERCASE_LETTERS = true
NUMBERS = true
SPECIAL_CHARACTERS = true
PASSWORD_LENGTH = 12
```
Execução
```sh
npm start
```


