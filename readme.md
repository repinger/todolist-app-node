<p align="center"><img src="https://i.postimg.cc/NGdPQYp9/IMG-20230319-221225.jpg" width="100%"></p>

## About this Project

This project is created for study about Node JS on UKM Software Development.

Credits by Muhammad Ilham Adi Pratama

## Desain Database

[![image.png](https://i.postimg.cc/F1XNHWqP/image.png)](https://postimg.cc/q6w9mLpn)

## Depedencies

- [Express JS](https://expressjs.com/en/api.html).
- [Knex](https://knexjs.org/).
- [My SQL](https://www.npmjs.com/package/mysql).
- [DotENV](https://www.npmjs.com/package/dotenv).
- [Express Validator](https://express-validator.github.io/docs).
- [Morgan](https://www.npmjs.com/package/morgan).
- [Nodemon](https://www.npmjs.com/package/nodemon).
- [UUID](https://www.npmjs.com/package/uuid)

# Tutorial Github

## How to Cloning Repository

1. Pada Komputer Anda Buka Console / Command Promt

2. Ketikan Perintah Berikut

```
git clone https://github.com/UKM-SoftDev/todolist-app-node.git
```

3. Masuk Ke Dalam Folder Hasil Clone

```
cd todolist-app-node
```

# How to Use and Configuration Node JS Express

1. Install Node Package Manager Terlebih Dahulu <br>
   [Download disini](https://nodejs.org/en/download/)
2. Install all javascript dependecies Terlebih Dahulu

```
$ npm install
```

3. Copy isi file .env.example

```
cp .env.example .env
```

5. Buatlah database kosong di phpmyadmin dengan nama **todolist**
6. Lakukan Migrasi Database

```
$ knex migrate:latest
```

## How to Run

1. Run server using `npm` command below
```console
$ npm run start
```

## API Documentation

You can access this project API documentation [here](https://documenter.getpostman.com/view/21604420/2s93JzMLtp)