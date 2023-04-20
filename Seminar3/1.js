const degC = parseInt(prompt("Введите температуру в градусах Цельсия"));
let degF = 9 / 5 * degC + 32;

alert(`Цельсий: ${degC}, Фаренгейт: ${degF.toFixed(1)}`);