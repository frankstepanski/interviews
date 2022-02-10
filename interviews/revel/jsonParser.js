const string = `{
    'test': 'hello world',
    'key': 'peasecasdflkjsda;f',
    'hello': 'answer back',
    'tail': 'head'
}`;

function jsonParser(string){

    let key = ""
    return string.split("'").reduce( (acc, word) =>{

        if (!(word.includes("{") ||
            word.includes("}") ||
            word.includes(":") ||
            word.includes(",") )){

                if (key === ""){
                    key = word;
                }else{
                    acc[key] = word;
                    key = "";
                }
        }
        return acc;

    },{})
        
}

console.log("string -", string, ", obj -", jsonParser(string));