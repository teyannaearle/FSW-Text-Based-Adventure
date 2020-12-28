const readline1 = require('readline-sync')

let reprompt = "You're doing it wrong, you puny little human!" 
let breaK = "\n -------------------------- \n"


const startGame = () => {
    console.log("Well well well, Hello there. \n" , "I'm fate. I control ALL. \n" )
    console.log("You simple humans always seem to think that you control your own lives. \n")
    console.log("Well, I'm here to prove to you that, YOU SILLY HUMANS ARE WRONG. \n I'M HERE TO TELL YOU ... \n")
    
    let nameInput = readline1.question("*ahem , what is your name anyways ? \n")
    let nameInput2 = nameInput.toUpperCase() 
    
    console.log(`\n Right, right, I knew that. As I was saying.. \n I'M HERE TO TELL YOU, PUNY LITTLE ${nameInput2} ,THAT I IN FACT CONTROL YOUR DESTINY! \n`)
    console.log("If you don't believe me... let's play a little game.\n" , "I'll transmit you into an avatar that is in a small town called Hellington.\n") 
    console.log("Your goal will be to make it out of Hellington alive.\n")
    console.log("If you do, then you will humble me by proving that mankind is in fact more powerful than I thought!\n")
    console.log(`But if your avatar dies, which it will, THEN I WIN! \n And you, ${nameInput}, will be under my control FOR ALL OF ETERNITY! \n`)
    console.log("... or at least until you exit out of this game.\n")

    if (readline1.keyInYN("Want to give it a go? \n")){
        console.log(` ${breaK} You're a brave one. Here are the rules : \n `)
        console.log("For yes or no answers, simply input a 'y' or an 'n'. \n ")
        console.log("Because I am not one for foolish human tricks, if you input anything other than 'y', I'll be taking that as a NO. \n")
        console.log("For multiple choice answers, simply input the corresponding number. \n For any other answers, the simplest answer to the question will do. \n" )
        console.log(`Good luck. Hold on tight !!!!! ${breaK}`)
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
    let phonePassword = "4"

    console.log(" \n Everything around you begins spinning as you get sucked into your screen. \n You close your eyes and scream because well.. you're being sucked into a screen. \n I mean, what kind of Jumanji type of stuff is that. Am I right? \n")
    console.log("Anywho...Everything feels cold as you begin to open your eyes. \n You see that you are sitting up, under the covers, in a bed, in a dimly lit bedroom. \n You look down at your hands and realize that your hands are not your hands.\n")
    console.log("Startled, you run over to a standing mirror that you see in the corner of the room and see that you are in a teenage body. \n Suddenly, a deep voice asks you 'WHAT NAME DO YOU CHOOSE?' \n You begin to look around to see where the voice is coming from. \n ")
    console.log("\n (It's me by the way. I'm the voice.) \n You see noone else in the room and begin to figure it out.")
    
    let avatarName = readline1.question("Realizing that it's fate that is talking to you, and that it's time to choose your avatar's name, you respond My name is: \n")

    console.log("\n Your phone rings. \n You take it out of your pocket and you see a random number is calling. \n")

    if (readline1.keyInYN("Do you want to pick it up? \n")){
        adventure1()
    }else {
        adventure2()
    }

    function hallwayScene(){ 
        console.log("You get up and walk to the bedroom door. \n You turn the knob and open the door. \n")
        console.log("You see a long and dark hallway. \n You look around for a light switch but don't see one anywhere.\n")
        console.log("Slowly, you make your way down the hallway. \n ")
        console.log("You hear something make a noise behind you. \n When you turn around to look, you see nothing. \n Alarmed, you run down the stairs and out the front door right into Ethan.\n")
        runInTO()
    }
     
    function runInTO(){    
        console.log("Ethan says 'Woah watch out, what is up with you today dude?' \n Before you can even speak, Bethany cuts you off saying 'Can we go already?'\n")}

    function getGoing(){}


    function adventure1(){
        console.log("You hesitantly answer and say 'Hello?' \n  You hear what appears to be a teenage boy's voice saying 'What's up loser? You tryna go on a little adventure tonight?'")
        
        let response1 = ["Who the heck is this?!" , "Sure, it'll be fun." , "Absolutely not! I'm staying home, so that I can stay alive!" ]
        let index = readline1.keyInSelect(response1, "How would you like to respond? \n")

        console.log(`You respond '${response1[index]}' \n`)

        if (response1[index] === response1[0]){
            console.log(`The person on the other line responds '${avatarName}, what do you mean who is this?'`)
            console.log("'This is your cousin Ethan, you moron.' \n 'Bethany and I were thinking of jumping the fence over at that old abandoned house on Dooms road and seeing if the rumors are true.' \n")
            
                if (readline1.keyInYN("'Wanna come with?' \n")){
                    console.log("Ethan replies 'Okay, we're leaving my house in a few minutes. \n We'll give you a holler when we're in front of your house.'")
                    console.log("You hang up the phone and put it in your pocket. \n I guess you have a little bit of time to waste before they get there. \n ")
                    
                    choice1()

                    function choice1(){
                        let response2 = readline1.question("How are you going to spend it? \n Do you want to sit on the bed or look around the house? \n")
                        let response2L = response2.toLowerCase()

                        if (response2L === "sit" || response2L === "sit down" || response2L === "sit on the bed" || response2L === "sit on bed"){
                            console.log("\nYou walk over to the bed and sit down.")
                            console.log("Since there's nothing to do until Ethan and Bethany show up, you might as well play a game on your phone.")
                            let playOnPhone = readline1.keyInYN("Want to play on it? \n") 
                                if(playOnPhone){
                                    console.log("\nYou pull the phone back out of your pocket.")
                                    console.log("In order to open the phone, you have to enter a password. \n The password is simple enough. It's just a single number between 1 and 5.\n")
                                    
                                    

                                    for (let passwordAttempts = 3 ; passwordAttempts > 0 ; passwordAttempts--){
                                    
                                        let passwordGuess = readline1.question("What number do you want to input? \n")

                                        if (passwordGuess !== phonePassword && passwordAttempts === 1){
                                            console.log(`${breaK} Phone reads: TOO MANY TRIES. PHONE IS LOCKED.`)
                                            console.log("Hahaha. Guess you'll just have to sit there twiddling your thumbs.\n")
                                            console.log(`You hear a voice yell ${avatarName}!! \n Guess it's your lucky day. \n ` )
                                            hallwayScene()
                                            getGoing()
                                            break; 
                                        } else if (passwordGuess !== phonePassword ){
                                            console.log(`${breaK} Phone reads: TRY AGAIN`)                                            
                                            
                                        } else if (passwordGuess === phonePassword){
                                            console.log(`${breaK} The phone opens up and you play a puzzle type game for all of five minutes before you hear your cousin screaming for you to come downstairs.`)
                                            console.log("They must really be excited to go to this abandoned house.")
                                            hallwayScene()
                                            getGoing()
                                            break;
                                        }
                                    }
                                }
                        } else if (response2L === "look around" || response2L === "look around the house" || response2L === "take a look around" || response2L === "take a look around the house"){
                            console.log("\nYou walk to the door. \n You go to open the knob but you hear a noise behind you." )
                            console.log("You stop and turn around, quickly. But you see nothing.")
                            console.log("You quickly open the door, run down a long and dark hallways, and down the stairs. \n")
                            console.log("You see a lightswitch at the end of the staircase, leading into the living roon. \n")

                            let turnLightOn = readline1.keyInYN("Do you want to turn on the light")
                                if (turnLightOn){
                                    console.log("Wow. There are dozens of porcelain dolls in the living room. \n Their beady eyes glaring at you \n Their menacing smiles almost taunting you.")
                                    console.log("Just in time, you hear your cousin yelling your name. \n You turn around and jet straight out the front door and right into Ethan. \n")
                                    runInTO()
                                    getGoing()
                                } else {
                                    console.log("You walk around in the dark trying to make sense of all of the strange dark figures you see around you.\n")
                                    console.log("As your walking, you bump into something and hear a loud crash. \n You wonder if there is anyone else in the house who might've heard you and start to get nervous.\n" )
                                    console.log(`All of a sudden, You hear a girl's voice scream ${avatarName}. You make a run straight out the front door and right into your cousin. \n`)
                                    runInTO()
                                    getGoing()
                                }
                        } else {
                            console.log(breaK)
                            console.log(reprompt)
                            console.log(`Simply answer 'sit' or 'look around' \n ${breaK}`)
                            return choice1()
                        }

                    }

                } else {
                    console.log("Ethan replies 'Whatever dude'. \n You hear Bethany in the back saying that you're no fun. \n")
                    console.log("You hang up the phone.")
                    adventure2()

                }
        } else if(response1[index] === response1[1]){
            





        } else if(response1[index] === response1[2]){

        } else if(response1[index] === "0"){}

    }






    function adventure2() {}

    }       



startGame()

