let score = process.argv[2];
let num = Number(score)
if ((isNaN(num) == false) && (num >= 0 && num <= 100)) {
    switch(true) {
        case num <= 49 :
            console.log("Grade is F")
            break
        case num <= 59 :
            console.log("Grade is D")
            break
        case num <= 69 :
            console.log("Grade is C")
            break
        case num <= 79 :
            console.log("Grade is B")
            break
        case num <= 100 :
            console.log("Grade is A")
            break
        default :
            console.log("Invalid input")
            break
    }
}
else {
    console.log("Invalid input")
}