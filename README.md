# Drink Delivery

O Drink Delivery é uma aplicação web desenvolvida por Romildo Silva e Weliton Lima. Este projeto foi concebido com o objetivo de fornecer uma plataforma de entrega de bebidas de forma prática e eficiente.

Para alcançar esse objetivo, adotamos uma abordagem de divisão de tarefas e utilizamos metodologias ágeis durante o desenvolvimento. Além disso, enfatizamos a realização de testes rigorosos para garantir a qualidade e o funcionamento correto de todas as funcionalidades planejadas.

### Front-end

No desenvolvimento do Front-end, utilizamos principalmente as seguintes tecnologias: React.js, JavaScript, Tailwind CSS e Jest. Nessa parte do projeto, concentramos nossos esforços na criação das telas de login, registro, produtos, checkout, acompanhamento do pedido, tela de pedidos e gerenciamento de usuários. Cada tela é renderizada com base na função do usuário, que é validada pelo back-end da aplicação.

### Back-end

Para o Back-end, optamos por utilizar as seguintes tecnologias: Node.js, Express.js, MySQL, JWT e Chai. Essa parte da aplicação foi responsável pela criação da API utilizada pelo front-end para realizar requisições. Algumas das principais funcionalidades implementadas no Back-end incluem o cadastro de novos usuários, a geração de tokens de login, a validação de tokens, a listagem de produtos, o registro de pedidos e a atualização de pedidos.

Esperamos que o Drink Delivery seja uma solução eficaz para os usuários, proporcionando uma experiência agradável ao solicitar suas bebidas preferidas. Estamos orgulhosos do trabalho realizado e esperamos continuar aprimorando e expandindo essa aplicação no futuro.

## Utilizando a aplicação

1. Acesse o site onde a aplicação foi públicada:

https://drink-delivery.vercel.app/

2. Cadastre sua conta, ou utilize algum dos dados de login abaixo:

| Item |        Email           | Senha         |
|------|-----------------------|---------------|
|  1   | fulana@deliveryapp.com| fulana@123    |
|  2   | zebirita@email.com     | &#35;zebirita&#35;&#36; |



## Instalando localmente

1. Clone o repositório do Drink Delivery do GitHub para o seu ambiente de desenvolvimento:

```
git clone https://github.com/RomildoFH/drink-delivery.git
```

2. Acesse o diretório do projeto:

```
cd drink-delivery
```

3. Rode os containers para iniciar a aplicação

```
docker-compose up -d
```

4. Aguarde até que todos os containers estejam rodando

5. Para verificar se os containers estão saudáveis, utilize:

```
docker ps
```

Você deverá ver dois containers: delivery-backend (port 3001) e db (port 3306)

6. Agora, na raiz do projeto você deverá restaurar o banco de dados, para que as tabelas sejam criadas e populadas com os seeders:

```
npm run db:reset
```

7. Após a execução do comando anterior, você deve startar a aplicação para utiliza-la no browser:

```
npm start
```
Esse processo poderá levar cerca de 2 minutos ou mais.

8. Uma aba no navegador será aberta, e você poderá utilizar a aplicação. Caso contrário poderá acessar através da seguinte url:

```
http://localhost:3000/login
´´´

Agora você está pronto para explorar e utilizar o Drink Delivery em sua máquina local.
