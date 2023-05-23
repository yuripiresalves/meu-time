<img src="https://i.ibb.co/tbXkbrW/meutime.png" alt="Meu Time" />
<p align="center">
  <a href="https://linkedin.com/in/yuripiresalves">
    <img src="https://img.shields.io/badge/made%20by-Yuri%20Alves-1e78b7" alt="Made by Yuri Alves">
  </a>
</p>

## :pushpin: Conteúdo

<p align="center">
  <a href="#thinking-o-que-é">O que é</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#desktop_computer-deploy">Deploy</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#art-protótipo">Protótipo</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-tecnologias-utilizadas">Tecnologias utilizadas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#construction_worker-execução-local">Execução local</a>
</p>

<br/>

## :thinking: O que é

O Meu Time é uma aplicação criada para consultar dados de um time, escolhendo seu país, liga e temporada :soccer:. Ela utilizada os dados fornecidos pela [API Football](https://dashboard.api-football.com/), 
que na sua versão gratuita possui um limite de 100 requisições por dia. Como a nova versão do Next.js saiu há poucas semanas, aproveitei essa oportunidade para estudar as novidades dessa versão aplicando elas neste projeto. 🚀
<br/>
<br/>
Esta aplicação faz parte de um teste técnico da empresa [Trade Technology](https://www.linkedin.com/company/trade-technology/).

<!-- <hr/> -->

## :desktop_computer: Deploy

A aplicação foi colocada em produção utilizando os serviços da Vercel, empresa responsável pelo Next.js, e pode ser acessada pelo link: https://meu-time-yuripiresalves.vercel.app/

## :art: Protótipo

<p>
  Para a criação e organização da interface visual do projeto, utilzei o Figma para criar um protótipo que me guiasse durante o desenvolvimento e que tivesse uma boa experiência para o usuário, 
  assim como uma interface simples e intuitíva. Para acessar o protótipo, <a href="https://www.figma.com/file/vPAXLtqPUE51kaeIA2kDzp/Meu-Time?type=design&node-id=0-1&t=LcB014gJSJHMkq7r-0" target="_blank">clique aqui</a>.
</p>

## :rocket: Tecnologias utilizadas

- **ReactJS**
- **Next.js 13**
- **TypeScript**
- **Tailwind CSS**

## :construction_worker: Execução local

Para executar essa aplicação você precisará ter instalado em sua máquina o [Git][git] e [Node][node].

Uma conta gratuita no site [API Football](https://dashboard.api-football.com/register) precisará ser criada para obter uma API Key, que será usada como login na aplicação e também para
realizar as requisições à API.

<p>Após isso, siga os passos abaixo:</p>

```bash
# No terminal, clone o repositório com o comando:
$ git clone https://github.com/yuripiresalves/meu-time

# Entre no diretório:
$ cd meu-time

# Instale as dependências
$ npm install

# Execute a aplicação:
$ npm run dev
```

* A aplicação estará sendo executada na porta 3000 (http://localhost:3000)

---

Feito com :blue_heart: por [Yuri Alves](https://linkedin.com/in/yuripiresalves)

[git]: https://git-scm.com/
[node]: https://nodejs.org/en
