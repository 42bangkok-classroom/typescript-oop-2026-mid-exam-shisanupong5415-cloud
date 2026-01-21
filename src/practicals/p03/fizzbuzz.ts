let fb = process.argv[2];
let fb_num = Number(fb)
if ((isNaN(fb_num) == true) && (fb_num <= 0)) {
}
else {
    for(let i = 1 ; i <= fb_num ; i++) {
        if (((i % 3) == 0) && ((i % 5) == 0)) {
            console.log('FizzBuzz')
        }
        else if ((i % 3) == 0) {
            console.log('Fizz')
        }
        else if ((i % 5) == 0) {
            console.log('Buzz')
        }
        else {
            console.log(i)
        }
    }
}