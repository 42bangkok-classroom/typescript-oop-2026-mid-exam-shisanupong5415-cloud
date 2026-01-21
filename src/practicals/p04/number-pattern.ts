let ali = process.argv[2];
let ali_num = Number(ali)
let char : string ="";
let ary: number[] = [];
if ((isNaN(ali_num) == true) && (ali_num <= 0)) {
}
else {
    for(let i = 1 ; i <= ali_num ; i++) {
        ary.push(i);
        ary.sort((a,b) => b - a);
        console.log(' '.repeat(ali_num-i)+ary.toString().replace(/,/g,""))
    }
}