# :desktop_computer: Chat Application

<p align="center"><img src="./assets/cover.png" alt="Cover projeto" /><p>
<p align="center"><img src="./assets/cover.gif" alt="Cover projeto" /><p>

## :briefcase: Stacks

✅ JavaScript
✅ TypeScript
✅ Express
✅ React
✅ Node

## :hammer: Tools

- Git (`git -v`)
- NodeJs (`node --version`/`npm --version`)
- Yarn (`npm install --global yarn`/`yarn --version`)
- VS Code

## :fire: Run

- Server Development (Port 3001): `yarn dev`
- Client Development (Port 3000): `yarn dev`
- Compiler: `yarn tsc`
- Runner: `node ./dist/server.js`

## :baby: Created

- Server: `yarn init -y`
- Create TS Config: `yarn tsc --init`
- SQLite: `yarn prisma init --datasource-provider sqlite`
- Migrate: `yarn prisma migrate dev`
- Generate: `yarn prisma generate`
- Publish: `yarn prisma db pull`
- Client: `yarn create vite`

## :ok_man: Dependencies

- Server Dependencies: `yarn add @prisma/client bcrypt cors date-fns express jsonwebtoken multer prisma uuid`
- Server Dev Dependencies: `yarn add -D @types/bcrypt @types/cors @types/express @types/jsonwebtoken @types/multer @types/node @types/uuid ts-node ts-node-dev typescript`
- Client Dependencies: `yarn add @hookform/resolvers axios date-fns react react-day-picker react-dom react-hook-form react-icons react-router-dom react-toastify yup`
- Client Dev Dependencies: `yarn add -D @types/react @types/react-dom @typescript-eslint/eslint-plugin @typescript-eslint/parser @vitejs/plugin-react eslint eslint-plugin-react-hooks eslint-plugin-react-refresh typescript vite`

## :triangular_flag_on_post: Environment Variables

### Server Variables

- Port: `SERVER_PORT`
- Secret: `JWT_SECRET`
