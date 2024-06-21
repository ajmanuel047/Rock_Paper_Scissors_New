function getComputerChoice() {
    let arr = ['rock', 'paper', 'scissors'];
    let randomValue = Math.floor(Math.random(arr[arr.length - 1]) * arr.length)
    return arr[randomValue]
}

