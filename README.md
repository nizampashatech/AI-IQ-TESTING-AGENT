# AI IQ TESTING AGENT

AI based interview and IQ testing platform built using MERN stack.

## Features

- AI Interview System
- IQ Test
- Authentication
- Responsive UI
- Admin & User Features

## Tech Stack

- React + Vite
- Node.js
- Express.js
- MongoDB

## Screenshots

### Home Page
![Home](./client/screenshots/1.png)

### Dashboard
![Dashboard](./client/screenshots/2.png)

### Interview Page
![Interview](./client/screenshots/3.png)

### AI Questions
![AI Questions](./client/screenshots/4.png)

### Result Page
![Result](./client/screenshots/5.png)

### Login Page
![Login](./client/screenshots/6.png)

### Signup Page
![Signup](./client/screenshots/7.png)


## Installation & Run

### Clone Repository

```bash
git clone https://github.com/nizampashatech/AI-IQ-TESTING-AGENT.git

create client side .env file and add this code in that file

VITE_FIREBASE_APIKEY="here add ur firebase api key"
VITE_RAZORPAY_KEY_ID=add your razorpay key

create server side .env file and add this code in that file

PORT=8000
MONGODB_URL="mongodb+srv://nizampasha733_db_user:If6PuL48AhThfLIj@cluster0.unfv0q6.mongodb.net/AI-AGENT"
JWT_SECRET="DSY29QURD12R23TFNO1FFFTY13"
OPENROUTER_API_KEY="sk-or-v1-d2fb3f16caadb84cfa089007e753c220d55ffc4f5682c1672a9356589b5"
RAZORPAY_KEY_ID=add your razorpay key id
RAZORPAY_KEY_SECRET=add your razorpay key secret

now add this commands in ur vs code terminal

cd client
npm install
npm run dev


cd server
npm install
npm start
