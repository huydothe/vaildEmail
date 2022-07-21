import {EmailRegExp} from "./demo";

let emailRegexTest = new EmailRegExp();

let validEmail: string[] = ["a@gmail.com", "ab@yahoo.com", "abc@hotmail.com"];
let invalidEmail: string[] = ["@gmail.com", "ab@gmail.", "@#abc@gmail.com"];

for(let email of validEmail){
    let isvalid = emailRegexTest.validate(email);
    console.log(`Email ${email} is valid : ${isvalid}`);
}

for(let email of invalidEmail){
    let isvalid = emailRegexTest.validate(email);
    console.log(`Email ${email} is valid : ${isvalid}`);
}