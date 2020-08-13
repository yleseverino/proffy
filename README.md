
<h1 align="center"><img src="./.github/proffy.png" alt="Proffy" width="500"/></h1>
<h2 align="center">Project made to connect teachers to students, made in Next Level Week #NLW#2 @Rocketseat</h2> 


<!-- Badges -->

<p align="center">
   
<img alt="GitHub license" src="https://img.shields.io/github/license/yleseverino/proffy?color=%23120a26&style=flat-square">
<img alt="GitHub stars" src="https://img.shields.io/github/stars/yleseverino/proffy?color=%23120a26&style=flat-square">
<img alt="Typescript" src="https://img.shields.io/static/v1?label=typescript&message=v3.9.6&color=120a26&style=flat-square">

</p>


### Getting Started 🚀

#### Cloning

```shell
# Clone the repository using git
$ git clone https://github.com/yleseverino/proffy.git

# Access the project folder
$ cd proffy
```

#### Requirements

* [Typescript](https://www.typescriptlang.org/)      
* [React](https://reactjs.org/)
* [Yarn](https://yarnpkg.com/)    
* [Sqlite](https://sqlite.org/index.html)


#### Web

This project use third party dependencies that need to be installed, use that command to install all needed dependencies

```shell
# Entering in web directory
$ cd web

# Installing depencies
$ yarn install

# Start front-end in dev mode
$ yarn start
```

#### Server 

Before start the server you need to install sqlite3 database: 

*Ubuntu/Debian*
```shell
$ sudo apt install sqlite3
```
*Fedora/RHEL/CentOS*
```shell
$ sudo dnf install sqlite3 #Fedora 31/32 already installed
```

To start the server you need to create the tables with use this command:

```shell
$ yarn knex:migrate
```
>The above command is a custom command made on `package.json` file. (Ln 8, Col 5)


This project use third party dependencies that need to be installed, use that command to install all needed dependencies and start

```shell
# Entering in web directory
$ cd server

# Install depencies
$ yarn install

# Start back-end API
$ yarn start
```








