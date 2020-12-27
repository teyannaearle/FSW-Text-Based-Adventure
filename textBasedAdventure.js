const readline1 = require('readline-sync')


const startGame = () => {
    console.log("Well well well, Hello there. \n" , "I'm fate. I control ALL. \n" )
    console.log("You simple humans always seem to think that you control your own lives. \n")
    console.log("Well, I'm here to prove to you that, YOU SILLY HUMANS ARE WRONG. \n I'M HERE TO TELL YOU ... \n")
    
    let nameInput = readline1.question("*ahem , what is your name anyways ? \n")
    let nameInput2 = nameInput.toUpperCase() 
    
    console.log(`\n Right, right, I knew that. As I was saying.. \n I'M HERE TO TELL YOU PUNY ${nameInput2} THAT I IN FACT CONTROL YOUR DESTINY! \n`)
    console.log("If you don't believe me... let's play a little game.\n" , "I'll transmit you into an avatar in a small town called Hellington.\n") 
    console.log("Your goal will be to make it out of Hellington alive.\n")
    console.log("If you do, then you will humble me by proving that mankind is in fact more powerful than I thought!\n")
    console.log(`But if your avatar dies, which it will, THEN I WIN! \n And you, ${nameInput} , will be under my control FOR ALL OF ETERNITY! \n`)
    console.log("... or at least until you exit out of this game.\n")

    if (readline1.keyInYN("Want to give it a go? \n")){
        console.log("Good luck. Hold on tight. \n")
        gameLoop()
    } else {
        console.log(`\n Just like a human to be scared. \n It's probably for the best anyway. So long ${nameInput}`)
        quitGame()
    }
}



const quitGame = () => {
    console.log("\n I'm sure we'll meet again.\n")
    process.exit()
}




const gameLoop = () => {
    console.log("Everything around you begins spinning as you get sucked into your screen. \n You close your eyes and scream because well.. you're being sucked into a screen. \n I mean what kind of Jumanji type of stuff is that. Am I right? \n")
    console.log("Anywho...Everything feels cold as you begin to open your eyes. \n You see that you are sitting up, under the covers in a dimly lit bedroom. \n You look down at your hands and realize that your hands are not your hands.\n")
    console.log("Startled, you run over to a standing mirror that you see in the corner of the room and see that you are in a teenage body. \n Suddenly, a deep voice asks you 'WHAT IS YOUR NAME?' \n You begin to look around to see where the voice is coming from. \n ")
    console.log("\n (It's me by the way. I'm the voice.) \n You see noone else in the room and begin to figure it out.")
    
    let avatarName = readline1.question("Realizing that it's fate that is talking to you, you respond My name is: \n")

    console.log("\n Your phone rings. \n")

    if (readline1.keyInYN("Do you want to pick it up? \n")){
        adventure1()
    }else {
        adventure2()
    }



    function adventure1(){

    }





    function adventure2() {}

    }       



startGame()

