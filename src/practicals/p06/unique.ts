function getUniqueNumbers(arr1: number[], arr2: number[]): number[] {
  let arr = [...arr1, ...arr2];
 
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
