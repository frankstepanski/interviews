/*

You are running a classroom and suspect that some of your students are passing around the answers to multiple choice questions disguised as random strings.

Your task is to write a function that, given a list of words and a string, finds and returns the word in the list that is scrambled up inside the string, if any exists. There will be at most one matching word. The letters don't need to be contiguous.

Example:
words = ['cat', 'dog', 'bird', 'car', 'ax', 'baby']
string1 = 'tcabnihjs'
find_embedded_word(words, string1) -> cat

string2 = 'tbcanihjs'
find_embedded_word(words, string2) -> cat

string3 = 'baykkjl'
find_embedded_word(words, string3) -> None

string4 = 'bbabylkkj'
find_embedded_word(words, string4) -> baby

n = number of words in `words`
m = maximal string length of each word


*/

const words = ["cat", "dog", "bird", "car", "ax", "baby"];
const string1 = "tcabnihjs";
const string2 = "tbcanihjs";
const string3 = "baykkjl";
const string4 = "bbabylkkj";


// convert string to stringObj with letters as keys and value that counts the // number of keys

// loop thru words and test each char
   // if i find that key and count > 0
       // continue
   // else will fail

 function find_embedded_word(words, string){

   let stringObj = string.split("").reduce( (acc,char) =>{
        if (acc[char] === undefined){
          acc[char] = 1;
        }else{
          acc[char]++;
        }
        return acc;
   },{})

   
   // loop thru all words
   let finalWord = "None";
   words.every( word => {

      // loop thru all characters of word to check if 
      // it matches string. If for any reason it doesnt match
      // then it should break out.
      let stringObjCopy = {...stringObj};
      let foundWord = word.split("").every( char =>{
          if (stringObjCopy[char] === undefined){
            return false;
          }else if (stringObjCopy[char] === 0){
            return false;
          }else {
            stringObjCopy[char]--;
            return true;
          }    
      })

      // if one is true then save the final word
      // and break out of the loop with a false.
      if (foundWord){
        finalWord = word
        return false;
      }else{
        return true
      }


   })

   return finalWord;
 }

console.log(find_embedded_word(words, string1))
console.log(find_embedded_word(words, string2))
console.log(find_embedded_word(words, string3))
console.log(find_embedded_word(words, string4))