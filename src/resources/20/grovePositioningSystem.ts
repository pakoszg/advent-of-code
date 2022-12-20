/* 
Link to problem: 

The numbers should be moved in the order they originally 
appear in the encrypted file. Numbers moving around during 
the mixing process do not change the order in which the numbers are moved.

*/
const moveIndex = (index: number, array: number[]): number[] => {
    const value = array[index]
    const oldIndex = index
    const newIndex = index + value

    const editableArray = array

    // remove one element at the index
    editableArray.splice(oldIndex, 1)
    editableArray.splice(newIndex, 0, value)

    return editableArray
}

// eslint-disable-next-line prefer-const
let originalNumbers: number[] = [1, 2, -3, 3, -2, 0, 4]

let newArray: number[]

for (let index = 0; index <= originalNumbers.length; index++) {
    newArray = moveIndex(index, originalNumbers)
}

const array = [1, 2]
// console.log(array.splice(0, 1))
console.log('dog')

// const test = moveIndex(1, originalNumbers)
// console.log(test)
// console.log(newArray)
