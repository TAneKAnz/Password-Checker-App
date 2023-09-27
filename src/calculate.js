// เอา fuction ไปใช้ เอา file ไปใช้

export function calculateTime(password) {

    const speed = 1000000n;
    let result;
    let subfix = "";

    /*
    if (selectedValue == "1") 
        speed = 1000000n;
    else if (selectedValue == "2") 
        speed = 10000000n;
    else if (selectedValue == "3") 
        speed = 100000000n;
    else if (selectedValue == "4") 
        speed = 1000000000n;
    else if (selectedValue == "5") 
        speed = 10000000000n;
    */

    result = (Number(password) / Number(speed));

    if (result > 60*60*24*365*1000000000000000000000) { 
        result = Math.floor(result/(60*60*24*365*1000000000000000000000));
        subfix += "sextillion years";
    }
    else if (result > 60*60*24*365*1000000000000000000) {
        result = Math.floor(result/(60*60*24*365*1000000000000000000));
        subfix += "quintillion years";
    }
    else if (result > 60*60*24*365*1000000000000000) {
        result = Math.floor(result/(60*60*24*365*1000000000000000));
        subfix += "quadrillion years";
    }
    else if (result > 60*60*24*365*1000000000000) {
        result = Math.floor(result/(60*60*24*365*1000000000000));
        subfix += "trillion years";
    }
    else if (result > 60*60*24*365*1000000000) {
        result = Math.floor(result/(60*60*24*365*1000000000));
        subfix += "billion years";
    }
    else if (result > 60*60*24*365*1000000) {
        result = Math.floor(result/(60*60*24*365*1000000));
        subfix += "million years";
    }
    else if (result > 60*60*24*365*100000) {
        result = Math.floor(result/(60*60*24*365*100000));
        subfix += "hundred thousand years";
    }
    else if (result > 60*60*24*365*1000) {
        result = Math.floor(result/(60*60*24*365*1000));
        subfix += "thousand years";
    }
    else if (result > 60*60*24*365*100) {
        result = Math.floor(result/(60*60*24*365*100));
        subfix +=  "hundred years";
    }
    else if (result > 60*60*24*365) {
        result = Math.floor(result/(60*60*24*365));
        subfix += "years";
    }
    else if (result > 60*60*24*30) {
        result = Math.floor(result/(60*60*24*30));
        subfix += "months";
    }
    else if (result > 60*60*24) {
        result = Math.floor(result/(60*60*24));
        subfix += "days";
    }
    else if (result > 60*60) {
        result = Math.floor(result/(60*60));
        subfix += "hours";
    }
    else if (result > 60) {
        result = Math.floor(result/(60));
        subfix += "mins";
    }
    else if (result > 1) {
        result = Math.floor(result);
        subfix += "secs";
    }
    else
        subfix += "secs";

    while (result >= 1000) {
        if (result >= 1000000000000000000000) {
            result /= 1000000000000000000000;
            subfix = "sextillion " + subfix;
        }
        else if (result >= 1000000000000000000) {
            result /= 1000000000000000000;
            subfix = "quintillion " + subfix;
        }
        else if (result >= 1000000000000000) {
            result /= 1000000000000000;
            subfix = "quadrillion " + subfix;
        }
        else if (result >= 1000000000000) {
            result /= 1000000000000;
            subfix = "trillion " + subfix;
        }
        else if (result >= 1000000000) {
            result /= 1000000000;
            subfix = "billion " + subfix;
        }
        else if (result >= 1000000) {
            result /= 1000000;
            subfix = "million " + subfix;
        }
        else if (result >= 1000) {
            result /= 1000;
            subfix = "thousand " + subfix;
        }
    }

    result = String(Math.floor(result)) + " " + subfix;

    return result
    //return speed;
}

