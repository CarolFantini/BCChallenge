<h1 align="center">BCChallenge</h1>

### English
Technical challenge developed for a fullstack developer position.

Technologies used: .NET 5, Entity Framework Core 5.0.7, PostgreSQL 13, Angular 12.1 and Swagger.

Challenge Description:


  
### Português
Desafio técnico desenvolvido para vaga de desenvolvedor .NET.

Tecnologias usadas: .NET 5, Entity Framework Core 5.0.7, PostgreSQL 13, Angular 12.1 e Swagger.

Descrição do Desafio:
- Modelagem do domínio

![Screenshot_2](https://user-images.githubusercontent.com/43019285/124694349-79df7080-deb7-11eb-8be0-f16f96f14020.png)

Requisito 1: Listagem de médicos

Criar uma tela que lista os médicos cadastrados no sistema. Cada registro deve possuir a opção de edição e exclusão.

Requisito 2: Cadastro de médicos
Criar uma tela de cadastro/edição de médicos.

Regra de negócio 2.1: O sistema não pode permitir o cadasro de médicos com CRM suplicados, sendo que o CRM do médico é composto pelo número do CRM e o estado do CRM (Crm + CrmUf).

Regra de negócio 2.2: Todos os atributos são obrigatórios.

Requisito 3: Exclusão de médicos

Criar a funcionalidade de exclusão de médicos.

Regra de negócio 3.1: Não deve ser possível excluir médicos que possuam pacientes vinculados.

Requisito 4: Listagem de pacientes

Criar uma tela que lista os pacientes cadastrados no sistema. Cada registro deve possuir a opção de edição e exclusão.

Requisito 5: Criação de pacientes

Criar uma tela de criação/edição de pacientes.

Regra de negócio 5.1: Todos os atributos são obrigatórios.

Regra de negócio 5.2: Todo paciente deve estar vinculado a um médico.

Regra de negócio 5.3: O sistema não deve permitir cadastro de pacientes com CPF duplicado.

Regra de negócio 5.4: O sistema não deve permitir cadastro de pacientes com CPF inválido.

Requisito 6: Exclusão de pacientes

Criar a funcionalidade de exclusão de pacientes.

Requisito 7: Relatório de pacientes por médico

Criar uma tela de listagem de pacientes do médico, com opção de filtrar por médico.

Regra de negócio 7.1: Deve ser obrigatório selecionar o médico para filtrar o relatório.

Obrigatório para API:

Criar tabelas das entidades Doctor e Patient utilizando Entity Framework Core utlizando estratégia de code first e migrations.

Utilizar Entity Framework Core em todas as operações na base de dados.

Diferenciais:

Documentação dos endpoints da API;

Mascarar/Formatar CPF no cadastro e listagem de pacientes (XXX.XXX.XXX-XX);

Mascarar/Formatar CRM no cadastro e listagem de médicos (123456-SP);

Optar por entregar o teste utilizando PostgreSQL.

  ## License
  [GPL v3](https://github.com/CarolFantini/VHChallenge/blob/main/LICENSE)
  
  ## Author
  - LinkedIn: [Carol Fantini](https://linkedin.com/in/carolfantini)
  
  - Twitter: [@carol_fantini](https://twitter.com/carol_fantini)
