// Code your solutions in this file






function writeCards(arrayNames, eventMessage) {
    let messages = []; 
    for (let i = 0; i < arrayNames.length; i++) { 

        let message = `Thank you, ${arrayNames[i]}, for the wonderful ${eventMessage} gift!`;
        messages.push(message); 
    }
    return messages; 
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");



function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}

countDown(10);

