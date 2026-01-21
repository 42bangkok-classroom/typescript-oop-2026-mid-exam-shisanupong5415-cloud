const score = process.argv[2];
let grade : string;
if ((typeof score === 'number') && (score >= 0 && score <= 100)) {
    switch(score) {
        case score <= 49 :
            grade = "F"
            break
        case score <= 59 :
            grade = "D"
            break
        case score <= 69 :
            grade = "C"
            break
        case score <= 79 :
            grade = "B"
            break
        case score <= 100 :
            grade = "A"
            break
        default :
            console.log("Invalid input")
            break
    }
}
else {
    console.log("Invalid input")
}