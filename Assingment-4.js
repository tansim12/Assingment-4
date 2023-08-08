function cubeNumber(number) {
    if (typeof number !== "number") {
        return "please provide 'number'. "
    }
    else{
        const result = Math.pow(number,3);
        return result;
    }
}





function matchFinder(string1, string2) {
    if (typeof string1 !== "string" || typeof string2 !== "string" ) {
        return "please provide a 'string'."
    }
    else{
        if (string1.includes(string2) === true) {
            return true;
        }
        else{
            return false;
        }
    }
}





function sortMaker(arr) {
    if (!Array.isArray(arr)) {
        return "please provide an 'Array'."
    }
    else{
        for(let item of arr){
            let largestNumber = arr[0];
            if (item < 0) {
                return "Invalid Input"
            }
            
            else if ( item > 0 && largestNumber > item) {
                return arr;
                
            }
            else if (item > 0 && largestNumber < item) {
                return arr.reverse();
            }
            else{
                if (item > 0 && arr[0] === arr[1]) {
                    return "equal"
                }
            }
            
        }
    }
}






function findAddress(obj) {
    if (typeof obj !== "object") {
        return "please provide an 'object'.";
    }
    if (obj.street === undefined || obj.street === null) {
        obj.street='__';
    }
    if (obj.house === undefined || obj.house === null) {
        obj.house ='__';
    }
    if (obj.society === undefined ||  obj.society === null) {
        obj.society = '__';
    }
    return ` ${obj.street}, ${obj.house}, ${obj.society}`;
}






function canPay(changeArray, totalDue) {
    if (!Array.isArray(changeArray) || changeArray.length === 0) {
        return "please provide an 'Array' Or This is empty Array , input Array of number. "
    }
    let arrSum = 0;
    for(let item of changeArray){
        arrSum += item;
    }
    if (arrSum >= totalDue ) {
        return true;
    }
    else{
        return false;
    }
}


