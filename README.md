
# Ecommerce-Store
Our E-commerce Store provides a dynamic digital storefront where customers can easily browse and purchase a diverse array of products. Designed as a showcase for our E-commerce Dashboard, this sample website demonstrates how businesses can manage and control their online presence seamlessly. With intuitive navigation and a wide range of product categories, the store offers an optimal shopping experience, demonstrating the efficiency and flexibility of our integrated management system.

### Prerequisites
Node version 14.x

### Steps to Run the Project
Clone the repo using 
```shell 
git clone https://github.com/aniruddha-10/ecommercestore-project.git
```
### Install packages
```shell
npm i
```
### Setup .env file
Note - This can be found under the settings tab in Dashboard. Copy the URL and paste it here as the value for this environment variable.
```js
NEXT_PUBLIC_API_URL = 
```
### Connect to NeonDB and Push Prisma
```shell
npx prisma generate
npx prisma db push
```
### Start the app

```shell
npm run dev
```
## Available commands
Running commands with npm `npm run [command]`
| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
