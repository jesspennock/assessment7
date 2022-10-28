sumZeroTestArray = [1,2,3,4,5,6,7,-3]
const sumZero = (arr) => {
    let equalsZero = false
    for(i = 0; i < arr.length; i++){
        for(j=0; j<arr.length; j++)
        if(arr[i] + arr[j] === 0){
            equalsZero = true   
        }
            
    }
   console.log(equalsZero) 

}
(sumZero(sumZeroTestArray))

// The time complexity of this code would be O(n^2) because there are two variables that are Dependent of each other (one within another one's parantheses). This code will take exponentially longer to run as the length of the array increases.
//The space complexity of this code is O(1)


uniqueStringTest = "halloweeen"
uniqueStringTest2 = "ghost"

const hasUniqueCharacters = (str) => {
    for(i=0; i<str.length; i++){
        let setString = new Set(str);
        if (setString.size === str.length){
            console.log("It's a unique string")
            return true
        }
        else{
            console.log("It's not a unique string")
            return false
        }

    }
}
hasUniqueCharacters(uniqueStringTest)

// // The time complexity of this code would be O(n) because there is one variable that is dependent on the length of the array. The code will take longer to run as the length of the array increases on a linear slope.
// The space complexity of this code would be O(n) because the amount of space required scales linearly with the size of the input

pangramTest1 = "When zombies arrive quickly fax Judge Pat"
pangramTest2 = "Judge Pat is already a zombie"

const pangramSentence = (str) => {
    let strLowercase = str.toLowerCase() //O(n)
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("") //O(n)
    
    for(i=0; i<alphabet.length; i++){
        if(strLowercase.indexOf(alphabet[i]) < 0){ //O(n)
            console.log("This string is not a Pangram")
            return false
            
        }
    }
    console.log("The string contains every letter in the alphabet and IS a pangram!")
    return true

}
pangramSentence(pangramTest1)
pangramSentence(pangramTest2)

//The time complexity of this could is O(n). Even though we can add multiple of O(n) processes together and get something like O(3n), the complexity is still growning on a linear level. We can ignore the three and our function maintains O(n)
//The space complexity of this function is O(n). the space required for strLowerCase will be dependent on the size of the original string.
longestWordTest = "cat witch pumpkin halloween"

const findLongestWord = (str) => {
    let stringArr = str.split(" ") //O(n)
    let longestWord = 0
    for(i=0; i<stringArr.length; i++){
        if(stringArr[i].length > longestWord){//O(n)
            longestWord = stringArr[i].length
        }

    }
    console.log(longestWord)
    return longestWord
}
findLongestWord(longestWordTest)

//The time compliexity of this function is also O(n), The split method as well as traversing the array in the forloop are both time depending on the length of the input.
//The space complexity of this function is also O(n) the space requirement for defining the stringArr variable from str.split"" will be dependent on the length of the original input.


