/*
1.       JavaScript and Web Api:
-          How does JavaScript Event loop work.
-          How does web onclick event handling work. (Bubbling and capturing)
2.       Any Typescript experience?
-          If Yes, what’s the difference between type and interface.
-          If Yes, in your latest typescript project, how did you enforce type checking and how did you resolve a type error?
(Answer should focus on the how, not generally benefit of typescript)
-          If No typescript experience, I would ask if he/she has done any work to improve the webpack build.
3.       Describe an experience that you take ownership on a particular service or particular module.
-          Either from scratching, or from taken from an existing project.
(Answer should focus on what he/she did, not general what team did)
4.       Describe an system design practice you’ve ever seen/leant or participated as the most beautiful design.
5.       Describe an challenge in your latest project or past project and how did you overcome it.



1.)what is the fastest way to empty an array?
array.length = 0 or array = []

2.)What is the output?
var array = [1, 2, 3, 4, 5]
     for(var i = 0; i < array.length; i++) {
           setTimeout(() => {
                 console.log(array[i])
           }, 1000);
     }

undefined
undefined
undefined
undefined
undefined

**** solution 1 *****
var array = [1, 2, 3, 4, 5]
for(var i = 0; i < array.length; i++) {
  delay(i)
}
function delay(i) {
  setTimeout(() => {
    console.log(array[i])
  }, 1000);
}

**** solution 2 ****** 
var array = [1, 2, 3, 4, 5]
for(let i = 0; i < array.length; i++) {
  setTimeout(() => {
    console.log(array[i])
  }, 1000);
}





answer is change var to let
3.)What is a JS Class ?
*/

/*
    takes in a number and returns its cube. For example, cube(3) => 27.
*/
function cube(x) {
    return Math.pow(x,3)
}

console.log("cube result ->", cube(3) === 27);

/*
    takes in a non-negative integer n and returns n!,
    which is the product of the integers from 1 to n.
    (0! = 1 by definition.)
*/
function factorial(x) {
 
    // x = 1 return 1, (0! = 1 by definition.)
    if (x === 1 || x === 0) return 1;

    // x = 2 return n * n-1
    return factorial(x-1) * x
}


console.log("factorial result ->", factorial(4) === 4*3*2);

/*
    counts the number of times a certain pattern of symbols appears in a list, including overlaps.
    So count_pattern( ('a', 'b'), ('a', 'b', 'c', 'e', 'b', 'a', 'b', 'f')) should return 2,
    and count_pattern(('a', 'b', 'a'), ('g', 'a', 'b', 'a', 'b', 'a', 'b', 'a')) should return 3.
*/
function count_pattern(pattern, list) {
 
  //loop thru list
  return list.reduce( (acc, _, listIndex) =>{
     
    //loop thru pattern
    let match = pattern.every( 
        (patternValue, pIndex) => patternValue === list[pIndex+listIndex] ? true : false
    )
    
    //count number of matches
    return match ? acc + 1 : acc
        
  },0)
}

console.log("count pattern I ->", count_pattern( ['a', 'b'], ['a', 'b', 'c', 'e', 'b', 'a', 'b', 'f']) === 2);
console.log("count pattern II ->", count_pattern(['a', 'b', 'a'], ['g', 'a', 'b', 'a', 'b', 'a', 'b', 'a']) === 3);

/*
    One way to measure the complexity of a mathematical expression is the depth of the expression describing it in arrays. Write a program that finds the depth of an expression.
    For example:
    depth('x') => 0
    depth(['expt', 'x', 2]) => 1
   
          'expt'
          /    \
         'x'    2
         
    depth(['+', ['expt', 'x', 2], ['expt', 'y', 2]]) => 2
             
             
   
    x^2+y^2
          +
    /         \
   expt      expt
  /   \      /   \
 x     2     y   2
 
    depth(['/', ['expt', 'x', 5], ['expt', ['-', ['expt', 'x', 2],
         1], ['/', 5, 2]]]) => 4
            
         
         
           '/'
     /           \
   expt          expt
  /    \        /      \
 x      5      -       /  
              /  \    /  \
            expt  1  5    2
           /    \
           x     2  
*/
function depth(expr, depthCount = 0) {
    // if not array then depth = 0
    if (!(Array.isArray(expr))) return 0 

    // increase depthCount
    depthCount++

    let leftCount = depthCount;
    let rightCount = depthCount;

    // if left is array call depthCount
    if (Array.isArray(expr[1])) {
        leftCount = depth(expr[1], depthCount)
    }

    // if right is array call depthCount
    if (Array.isArray(expr[2])) {
        rightCount = depth(expr[2], depthCount)
    }

    return leftCount > rightCount ? leftCount : rightCount;
 
   
}




console.log("depth I => ", depth('x') === 0);
console.log("dept II => ", depth(['expt', 'x', 2]) === 1)
console.log("dept III =>",  depth(['+', ['expt', 'x', 2], ['expt', 'y', 2]]) === 2)
console.log("depth IV =>", depth(['/', ['expt', 'x', 5], ['expt', ['-', ['expt', 'x', 2],1], ['/', 5, 2]]]) === 4);

