
# Tech 💻
* Next.js
* TypeScript
* Jest
* Styled Components
* Husky for commits
* Storybook

## Get start 🐊
```
npx create-next-app . --example https://github.com/lazarok09/next-example
```
## Install the Node 🌵
```bash
npm i
```

### Development server 📦

```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Config Husky
One by one please
```bash
npx husky init
npx husky install
npx husky add pre-commit
```
After that, go to .husky/pre-commit and add on the last line this instruction
``` npm run lint-staged ```
It will be somenthing like this

<img src="https://i.imgur.com/nh2Kew5.png" alt="a image that shows the result of the step above" />

### Storybook 📑

```bash
npm run storybook
```
### Test 🛠️
```bash
simple search
npm run test -- --watch

bigger
npm run test -- --watchAll=false

to get coverage
npm run test -- --coverage
```

### Prettier and eslint
```
npm run wlint -- --fix
```
