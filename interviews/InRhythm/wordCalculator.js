// wordCalculator("5 6 8 + DUP -")

// build a wordCalculator, ….

// push  5, push 6, push 8

// +, you have to pop the last two entries and add them.

// add 6 + 8

// then push the sum back on the stack --- 14    ------> [5, 14]

// Dup ---> [5,14,14]

// -, pop last 2 entries and subtract last item with next to last item.

// sub 14 - 14 = 0

// push 0 ----> [5,0]

// return top of the stack item -----> 0


// error conditions you should watch out for.....

// also when you use "-", if number is negative then should generate an error.

// if you try to add and there is only one item on the stack than that should generate an error also.

// dont worry about optimization…error handling will be graded for correctness thru failed tests.

// error should generate a -1



class Stack {

    constructor(){
        this.index = -1;
        this.array = [];
    }

    pop(){
        if (this.index === -1) return -1;
        const itemPopped = this.array[this.index]
        delete this.array[this.index--];
        console.log("pop: this.array -", this.array, ", this.index=", this.index)
        return itemPopped;
    }


    push(val){
        this.array[++this.index] = Number(val)
        console.log("push: this.array -", this.array, ", this.index=", this.index)
        return this.index;
    }

    dup(){
        if (this.index === -1) {
            console.log("cant dup when nothing in stack")
            return -1;
        }
        const num = this.array[this.index++]
        this.array[this.index] = num;
        console.log("dup: this.array -", this.array, ", this.index=", this.index)
        return this.index;
    }

    add(){
        if (this.index < 1){
            console.log("cant add when there are less than 2 values in stack")
            return -1;
        }
        let sum = this.pop() + this.pop()
        this.push(sum);
        console.log("add: this.array -", this.array, ", this.index=", this.index)
        return sum;
    }

    sub(){
        if (this.index < 1){
            console.log("cant subtract when there are less than 2 values in stack")
            return -1;
        }
        let sum = this.pop() - this.pop()
        if (sum < 0) {
            console.log("cant subtract when sum is less than 0")
            return -1;
        }

        this.push(sum);
        console.log("sub: this.array -", this.array, ", this.index=", this.index)
        return sum;
    }


}

function wordCalculator(str){

    const stack = new Stack();
    const goodResult = str.split(" ").every( word =>{

        let result = 0;
        switch (word) {

            case "DUP": result = stack.dup(); break;

            case "POP": result = stack.pop(); break;
            
            case "+": result = stack.add(); break;

            case '-': result = stack.sub(); break;

            // must be number
            default:
                if (word.match(/^\d+$/)){
                    stack.push(word)
                } else {
                    return false;
                }
        }   
        return result === -1 ? false : true;

    })

    return goodResult ? stack.pop() : -1

}

console.log(wordCalculator("5 6 8 + DUP -"));
console.log(wordCalculator("5 6 8 + DUP - -"));


