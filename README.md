# Avaliação Contínua, Momento 2 – 2020/21 (Parte 1)

Repository to host the project developed for Programação Web, a second year subject at ISMAI. Developed by Group 1 : [@Mascarenhas22](https://github.com/Mascarenhas22), [@Daniel-Ferreira-Dias] (https://github.com/Daniel-Ferreira-Dias).

## Introdução
  O objetivo deste trabalho prático de avaliação é expor os alunos ao estudo, desenho e desenvolvimento de aplicações e
  serviços Web com aplicação e demonstração dos conhecimentos e competências adquiridas na disciplina.
  O trabalho deve ser desenvolvido em grupo durante o período letivo com acompanhamento regular pelo docente. Cada
  grupo deve ser composto por 2 ou 3 elementos. Outras configurações de grupo poderão ser propostas ao docente e estão
  sujeitas a aprovação.
  O tema para o trabalho é livre. Tem que ser discutido e definido pelo grupo em conjunto com o docente durante o
  período letivo.
  Os trabalhos têm que ser colocados a funcionar em ambiente de desenvolvimento e apresentados preferencialmente
  numa máquina disponibilizada pelo ISMAI. Em alternativa o trabalho poderá ser apresentado na máquina de um dos
  elementos do grupo caso a situação preferencial não seja possível.
  A classificação deste momento de avaliação só é atribuída após o integral cumprimento de ambos os requisitos (a
  entrega e a apresentação).
## Enunciado
  Defina o tema do seu trabalho em conjunto com o docente. Prepare a base de dados de suporte aos seus serviços e
  preencha a base de dados com dados suficientes para a apresentação do seu trabalho. Considera-se que 30 registos por
  tabela é um volume de dados suficiente.
  Pretende-se que o grupo desenvolva uma camada de serviços REST para disponibilizar os recusros para uma aplicação
  Web (a desenvolver na parte 2 deste trabalho). Tenha em atenção os seguintes requisitos mínimos obrigatórios:
    1. Arquitetura de serviços do tipo REST;
    2. Utilização de pelo menos 4 verbos (métodos) do protocolo HTTP - CRUD (do inglês: Criar, Ler, Actualizar e
    Apagar);
    3. Disponibilizar pelo menos 4 recursos diferentes;
    4. Utilização de pelo menos uma relação de cardinalidade 1:n entre dois dos recusros;
    5. Disponibilização das representações de estado dos recursos em JSON;
    6. Documentar a API com recurso ao formato OpenAPI 3.0;
    7. Disponibilizar uma ‘Collection’ para o Postman para consulta dos recursos;
    8. Utilização do MySQL como SGBD;
    9. Utilização de Node.js como servidor aplicacional para implemnetação da camada de serviços.
## Valoriza-se o desenvolvimento/utilização de:
    1. Filtros através de parâmetros HTTP;
    2. Utilização de relação de cardinalidade m:n entre dois dos recusros;
    3. Possibilidade de seleccionar o tipo de representação pretendida através do cabeçalho HTTP Accept (suporte
       por exemplo para XML);
## Conteúdos a entregar
    Os alunos devem entregar no portal da disciplina os originais do desenvolvimento do trabalho e a documentação
    necessária para operacionalizar e avaliar os resultados obtidos.

## Short theme description

An example report using markdown on Github. This documentation is writen using [Markdown](https://www.markdownguide.org/). Here is a [link to the basic syntax](https://www.markdownguide.org/basic-syntax), but an [extended syntax](https://www.markdownguide.org/extended-syntax/) is also available. If you're starting with Markdown, you may want to try a [Markdown Tutorial](https://www.markdowntutorial.com/) and read the [getting started](https://www.markdownguide.org/getting-started/) section.

## Repository organization

_Please help reader navigate around describing how the repository is organized by providing links_
* **lb4-app** encontra-se no [src lb4-standvirtual](https://github.com/ProgramacaoWebGrupo1/M2/tree/main/src/lb4-standvirtualpw).
* **react app** encontra-se no [src standvirtualpw](https://github.com/ProgramacaoWebGrupo1/M2/tree/main/src/standvirtualpw).
* **Base de Dados** encontra-se no [src MySQL](https://github.com/ProgramacaoWebGrupo1/M2/tree/main/src/MySQL).
* **Postman Collection** encontra-se no [src Postman-Collection](https://github.com/ProgramacaoWebGrupo1/M2/tree/main/src/Postman-Collection).
* Report chapters are in [doc folder](https://github.com/exemploTrabalho/report/doc).

## Gallery

_Please provide a galery of the final result, with small images_
A [table](https://www.markdownguide.org/extended-syntax/#tables) may be usefull to organize the images.

## Technologies

_Indicate the technologies you have used in this assignment. Please provide links for the user to read more about those technologies._
* XML
* HTML5 + CSS3
* Javascript
* PHP
* nodeJS
* _Any other?_

### Frameworks and Libraries

_Did you use any aditional libraries? Describe them here._
* Docker
* Multipass
* NodeJS
* JQuery
* Laravel
* Bootstrap - React-Bootstrap [link](https://react-bootstrap.github.io/getting-started/introduction)
* Chartist - Implementação de gráficos [link](https://www.npmjs.com/package/react-chartist)

## Report
_Please add at least on section (a file) per Chapter. But you can add more._

### Project presentation
* Chapter 1: [Project presentation](doc/c1.md)
### User Interface 
* Chapter 2: [User Interface Prototype and Sitemap](doc/c2.md)
### Product
* Chapter 3: [Product](doc/c3.md)
### Presentation
* Chapter 4: [Presentation](doc/c4.md)

## Team
* Marco Amaro Oliveira [@MarcoOliveira](https://github.com/marcoamarooliveira)
* Other team members
