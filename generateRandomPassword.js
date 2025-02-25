function generateRandomPassword(length) {
    let password = '';
    
    for (let i = 0; i < length; i++) {
        // Генерируем случайное число в диапазоне от 33 до 126
        const randomCharCode = Math.floor(Math.random() * (126 - 33 + 1)) + 33;
        // Преобразуем код символа в сам символ и добавляем его к паролю
        password += String.fromCharCode(randomCharCode);
    }
    
    return password;
}

// Пример использования:
const passwordLength = 8; // Задайте желаемую длину пароля
const randomPassword = generateRandomPassword(passwordLength);
console.log('Ваш пароль:', randomPassword);

module.exports = { generateRandomPassword };