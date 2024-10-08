# Equipment Rental E-commerce
Este projeto consiste em um e-commerce para aluguel de equipamentos desenvolvido com AngularJS (front-end) e Node.js (back-end).

## Estrutura do Projeto
O projeto possui a seguinte estrutura de pastas:

<img width="449" alt="image" src="https://github.com/user-attachments/assets/179e8506-4332-44a4-aacb-505401de858f">

## Tecnologias Utilizadas
**Front-end:**
* AngularJS
* HTML
* CSS
* JavaScript

**Back-end:**
* Node.js
* Express.js (sugestão para framework web)
  
Instalação e Execução
Pré-requisitos:

Node.js e npm instalados
Um gerenciador de pacotes como o npm ou yarn

## Passos:
Clonar o repositório:

git clone https://github.com/seu-usuario/equipmentRental-ecommerce.git
Instalar as dependências do front-end e back-end:

cd equipmentRental-ecommerce
npm install # Instala as dependências do projeto raiz (se houver)
cd app
npm install # Instala as dependências do front-end
cd ../server
npm install # Instala as dependências do back-end
Configurar o banco de dados:

Criar um banco de dados e configurar a string de conexão no arquivo de configuração do servidor.
Iniciar o servidor do back-end:

cd server
node server.js
O servidor do back-end estará disponível na porta 3005.

Iniciar o servidor de desenvolvimento do front-end:

cd app
npm start
O servidor de desenvolvimento do front-end estará disponível na porta 3000.

**Acessar a aplicação:**

Abra o navegador e acesse http://localhost:3000/.

## Próximos Passos
Implementar a camada de dados e conectar ao banco de dados escolhido.
Criar as rotas da API para gerenciar produtos, usuários, aluguéis, etc.
Desenvolver os componentes da interface do usuário no AngularJS.
Implementar a autenticação de usuários.
Implementar o sistema de pagamento.
Contribuindo
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.
