"use strict";
exports.__esModule = true;
var demo_1 = require("./demo");
var emailRegexTest = new demo_1.EmailRegExp();
var validEmail = ["a@gmail.com", "ab@yahoo.com", "abc@hotmail.com"];
var invalidEmail = ["@gmail.com", "ab@gmail.", "@#abc@gmail.com"];
for (var _i = 0, validEmail_1 = validEmail; _i < validEmail_1.length; _i++) {
    var email = validEmail_1[_i];
    var isvalid = emailRegexTest.validate(email);
    console.log("Email ".concat(email, " is valid : ").concat(isvalid));
}
for (var _a = 0, invalidEmail_1 = invalidEmail; _a < invalidEmail_1.length; _a++) {
    var email = invalidEmail_1[_a];
    var isvalid = emailRegexTest.validate(email);
    console.log("Email ".concat(email, " is valid : ").concat(isvalid));
}
