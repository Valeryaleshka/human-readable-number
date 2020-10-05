module.exports = function toReadable(number) {
   
    debugger;

    let numbers = number.toString().split("").reverse();
    
    let returnString = [];
    let  check = false;

    if(number === 0){
        return "zero";
    }
    
    if (numbers.length === 1){
        return zeroToNine(numbers[0]);
    }

    if (numbers.length > 1) {
        if (numbers[1] === "0") {
            returnString.push(zeroToNine(numbers[0]));
            check = true;
        } else if (numbers[1] === "1") {
            returnString.push(tenTo19(numbers[0]));
            check = true;
        } 
        if(check){
            for (let i = 2; i < numbers.length; i++) {
                switch (i) {
                    case 0:
                        returnString.push(zeroToNine(numbers[0]));
                        break;
                    case 1:
                        returnString.push(twentyTo90(numbers[1]));
                        break;
                    case 2:
                        returnString.push(zeroToNine(numbers[2]) + " hundred");
                        break;
                }
            }
        }else{
            for (let i = 0; i < numbers.length; i++) {
                switch (i) {
                    case 0:
                        returnString.push(zeroToNine(numbers[0]));
                        break;
                    case 1:
                        returnString.push(twentyTo90(numbers[1]));
                        break;
                    case 2:
                        returnString.push(zeroToNine(numbers[2]) + " hundred");
                        break;
                }
            }
        }
    }

    var filtered = returnString.filter(function(x) {
        return x !== undefined;
     });
    let total = filtered.reverse().join(" ");
    return total;


    function twentyTo90(x){
        switch (x) {           
            case "2":
                return "twenty";
            case "3":
                return "thirty";
            case "4":
                return "forty";
            case "5":
                return "fifty";
            case "6":
                return "sixty";
            case "7":
                return "seventy";
            case "8":
                return "eighty";
            case "9":
                return "ninety";
        }
    }

    function tenTo19(x) {
        switch (x) {
            case "0":
                return "ten";
            case "1":
                return "eleven";
            case "2":
                return "twelve";
            case "3":
                return "thirteen";
            case "4":
                return "fourteen";
            case "5":
                return "fifteen";
            case "6":
                return "sixteen";
            case "7":
                return "seventeen";
            case "8":
                return "eighteen";
            case "9":
                return "nineteen";
        }
    }

    function zeroToNine(x){
        switch (x) {
            
            case "1":
                return "one";
            case "2":
                return "two";
            case "3":
                return "three";
            case "4":
                return "four";
            case "5":
                return "five";
            case "6":
                return "six";
            case "7":
                return "seven";
            case "8":
                return "eight";
            case "9":
                return "nine";
        }
    }
};
