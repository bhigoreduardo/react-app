# :desktop_computer: Social Application

<p align="center"><img src="./assets/cover.png" alt="Cover projeto" /><p>
<p align="center"><img src="./assets/cover.gif" alt="Cover projeto" /><p>

## :briefcase: Stacks

✅ JavaScript
✅ React
✅ noSQL
✅ Mongo
✅ Node
✅ Express

## :hammer: Tools

- Git (`git -v`)
- NodeJs (`node --version`/`npm --version`)
- Yarn (`npm install --global yarn`/`yarn --version`)
- VS Code

## :fire: Run

- Dev Server (Port 3001): `yarn dev`
- Dev Client (Port 3000): `yarn dev`

## :baby: Created

- Api: ``yarn init -y`
- Client: `yarn create vite`

## :ok_man: Dependencies

- Server Dependencies: `yarn add bcrypt body-parser cors dotenv express gridfs-stream helmet jsonwebtoken mongoose morgan multer multer-gridfs-storage nodemon`
- Client Dependencies: `yarn add @emotion/react @emotion/styled @mui/icons-material @mui/material @reduxjs/toolkit formik react-dropzone react-redux react-router-dom redux-persist yup`

## :triangular_flag_on_post: Environment Variables

### Server Variables

Server Port: `SERVER_PORT`
Mongo Url: `MONGO_URL`
Server Secret: `SERVER_SECRET`

### Client Variables

- Server Url: `VITE_APP_SERVER_URL`

## :page_facing_up: Docs

<details>
<summary><b>Regras de negócio</b></summary>

## Coleções

- **Entidades:**
  - *Relacionamentos (Coleções):*
      User [1..n]
          Post
            Image [1..1]
          Friend
          Image [1..1]

  - *Propriedades:*
    - **User:**
      firstName
      lastName
      friends
      email
      password
      picturePath
      location
      viewedProfile
      impressions

    - **Post:**
      userId
      firtName
      lastName
      location
      description
      userPicturePath
      picturePath
      likes
      comments

    - **Friends:**
      firstName
      lastName
      picturePath
      occupation
      location

    - **Images:**
      path

<details>