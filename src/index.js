module.exports = function toReadable (number) {
    const toTen = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const toTwenty = ["ten", "eleven", "twelve", "thirteen" , "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const toHundred = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const hundredNumb = "hundred";
        
    let fromZero = toTen[number];
    let getFirstNumber = number.toString().split('').slice(0, 1);
    let getLastNumber = number.toString().split('').slice(-1);
    let fromTen = parseInt(getLastNumber);
    let fromTwenty = parseInt(getFirstNumber);

    let splitter = number.toString().split('');
    let firstNumb = toTen[parseInt(splitter[0])];
    let thirdNumb = toHundred[parseInt(splitter[1])]

    let toTenDone = toTen[fromZero];
    let toTwentyDone = toTwenty[fromTen];
    let toHungredFirst = toHundred[fromTwenty];
    let toHungredLast = toTen[getLastNumber]

    if (number < 10) {
        return toHungredLast;
    } else if (number < 20) {
        return toTwentyDone;
    } else if (number < 100) {
        if(getLastNumber == 0) {
            return toHungredFirst
        } else {
            return toHungredFirst + " " + toHungredLast;
        }
    } else {
        if (splitter[1].includes('0') && splitter[2].includes(0)) {
            return firstNumb + " " + hundredNumb;
        } else if (splitter[1].includes('0')) {
            return firstNumb + " " + hundredNumb + " " + toHungredLast;    
        } else if (splitter[1].includes('1')) {
            return firstNumb + " " + hundredNumb + " " + toTwentyDone;     
        } else if (splitter[2].includes('0')){
            return firstNumb + " " + hundredNumb + " " + thirdNumb;     
        } else {
            return firstNumb + " " + hundredNumb + " " + thirdNumb + " " + toHungredLast;    
        }
    }
}

