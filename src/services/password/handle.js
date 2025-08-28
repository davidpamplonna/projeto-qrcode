import permittedCharacters from "./utils/permitted-characters.js";


async function handle(){
    let charecters = []
    let passoword = ""

    const passowordLength = process.env.PASSWORD_LENGTH;
    charecters =  await permittedCharacters();


    for(let i = 0; i < passowordLength; i++){
        const index = Math.floor(Math.random() * charecters.length)
        passoword += charecters[index];
    }

    return passoword;
        
}

export default handle;