function arrayDiff(a, b) {
  
    // save values in diffObj
    const diffObj = b.reduce( (acc, currVal) => { 
      acc[currVal] = true;
      return acc
    },{})
    
    // loop thru a by using filter
    return a.filter(currVal =>{
      if (diffObj[currVal] === undefined) {
        return true
      }
      return false;
    })
}