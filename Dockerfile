FROM node:14-alpine AS deps

WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:14-alpine AS BUILD_IMAGE
WORKDIR /usr/src/app
COPY --from=deps usr/src/app/node_modules ./node_modules
COPY . .
RUN yarn build

CMD ["npm", "start"]