# User+

Essa aplicação é dividida em duas partes:

- Front-end em Angular 2+
- Back-end em Spring Boot + banco de dados em memória h2 database 

# Instalação e inicialização front-end

Após clonar o repositório em sua máquina, você deverá se redirecionar para pasta <b>user-plus-frontend</b> no seu cmd, quando se encontrar nessa pasta, você deverá ter o npm em sua máquina. Caso não tenha pode obter baixando o [nodejs](https://nodejs.org/en/download/).

Com o npm em mãos, você irá digitar o seguinte comando em seu cmd "npm install", comando responsável para instalar todas as dependências da aplicação. Ao ser finalizado, você poderá rodar a sua aplicação utilizando o comando "npm start", caso tenha o angular-cli também poderá usar o comando "ng serve".

# Instalação e inicialização back-end

Primeiramente você deverá ter o JDK, caso não tenha pode ser feito o download no [link](https://www.oracle.com/br/java/technologies/javase/javase-jdk8-downloads.html). Também deverá ter o maven para poder instalar as dependências de sua aplicação, poderá obter o maven no [link](https://maven.apache.org/download.cgi), ao ser obtido deverá inserir nas variavéis globais, pois precisará chegar a pasta <b>user-plus-backend</b> pelo cmd e rodar o comando "mvn clean install", ao ser executado esse comando o seu projeto terá todos os pacotes necessários baixados. Para rodar a aplicação você irá rodar o comando "mvnw spring-boot:run" no diretório do back-end. Pronto, seu servidor estará rodando.

# Endpoints API

Consultar todos os usuários: (GET)http://localhost:8080/api/users
Consultar usuario por codigo de negocio: (GET)http://localhost:8080/api/users/{cod_negocio}
Adicionar usuário: (POST)http://localhost:8080/api/users
- Body: {cod_negocio: Long, nome:string, cpf:Long, telefone:Long}
Verificar CPF existe: (POST)http://localhost:8080/api/users/verifyCPF
- Body: {cod_negocio: Long, nome:string, cpf:Long, telefone:Long}
Verificar codigo de negocio existe: (POST)http://localhost:8080/api/users/verifyCodNegocio
- Body: {cod_negocio: Long, nome:string, cpf:Long, telefone:Long}
Verificar telefone existe: (POST)http://localhost:8080/api/users/verifyTelefone
- Body: {cod_negocio: Long, nome:string, cpf:Long, telefone:Long}

# Arquitetura aplicação

<img src="/arquitetura.png" alt="arquitetura"/>
