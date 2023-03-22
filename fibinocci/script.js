function fibsRec(num, result = [0,1]) {
  
    if(num < 0) return [];
    if(num === 2) return result;
  
    const lastTwo = [result.slice(-2, -1)[0], result.slice(-1)[0]];
    const [secondLast, last] = lastTwo;
  
    result.push(secondLast + last);
  
    return fibsRec(num -1, result);
  }
  
  console.log(fibsRec(8)); // [0,1,1,2,3,5,8,13]