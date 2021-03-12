module.exports = function toReadable(number) {

    let fromZeroToNineteen = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
        "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let fromTwentyToNinety = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];


    if (number < 20) {

        return fromZeroToNineteen[number];
    }

    if ((number >= 20) && (number < 100)) {
        let des = Math.floor(number / 10) - 2;
        let edin = number % 10;

        if (edin == 0) {

            return (fromTwentyToNinety[des]);
        }
        else {

            return (fromTwentyToNinety[des] + " " + fromZeroToNineteen[edin]);
        }
    }

    if (number >= 100) {
        let sot = Math.floor(number / 100);
        let des = (number % 100);
        let edin = number % 10;

        if (des == 0 && edin == 0) {

            return (fromZeroToNineteen[sot] + " " + "hundred");
        }

        if (edin == 0) {
            if (des >= 20) {

                return (fromZeroToNineteen[sot] + " " + "hundred" + " " + fromTwentyToNinety[Math.floor(des / 10) - 2]);
            }
            else {

                return (fromZeroToNineteen[sot] + " " + "hundred" + " " + fromZeroToNineteen[des]);
            }
        }

        if (des >= 20) {
            des = Math.floor(des / 10) - 2;

            return (fromZeroToNineteen[sot] + " " + "hundred" + " " + fromTwentyToNinety[des] + " " + fromZeroToNineteen[edin]);
        }

        if (des < 20) {

            return (fromZeroToNineteen[sot] + " " + "hundred" + " " + fromZeroToNineteen[des]);
        }



    }

}