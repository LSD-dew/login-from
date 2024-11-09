// Sample user data for login
const users = [
    { username: 'john', password: '12345', balance: 500, transactionHistory: [] }
];

let currentUser = null;

// Login function
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the username and password match any user
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        currentUser = user;
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('account-info').style.display = 'block';
        updateAccountInfo();
    } else {
        alert('Invalid username or password');
    }
}

// Logout function
function logout() {
    currentUser = null;
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('account-info').style.display = 'none';
}

// Update account balance and transaction history
function updateAccountInfo() {
    document.getElementById('account-balance').textContent = `Balance: $${currentUser.balance.toFixed(2)}`;
    document.getElementById('transaction-history').innerHTML = `<ul>
        ${currentUser.transactionHistory.map(transaction => `<li>${transaction}</li>`).join('')}
    </ul>`;
}

// Deposit function
function deposit() {
    const amount = parseFloat(prompt("Enter deposit amount:"));
    if (amount > 0) {
        currentUser.balance += amount;
        currentUser.transactionHistory.push(`Deposited: $${amount}`);
        updateAccountInfo();
    } else {
        alert('Invalid amount');
    }
}

// Withdraw function
function withdraw() {
    const amount = parseFloat(prompt("Enter withdrawal amount:"));
    if (amount > 0 && amount <= currentUser.balance) {
        currentUser.balance -= amount;
        currentUser.transactionHistory.push(`Withdrew: $${amount}`);
        updateAccountInfo();
    } else {
        alert('Invalid amount or insufficient funds');
    }
}
