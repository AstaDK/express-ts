FROM node:18 as development

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

CMD ["yarn", "serve"]


FROM node:18 as production

COPY --from=development /app/package*.json ./

RUN yarn install --production

COPY --from=development /app/dist ./dist

CMD ["node", "./dist/index.js"]