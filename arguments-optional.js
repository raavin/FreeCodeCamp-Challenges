function addTogether() {
        var args = [...arguments];
        var outerArg = args[0];
        if (typeof outerArg !== "number") {
            return undefined;
        } else { //1
            if (args.length == 2) {
                if (typeof args[1] === "number") {
                    return args[0] + args[1]; //need to check for stringiness here
                } else {
                    return undefined;
                }
            } else { //2
                return function(innerArg) { //3
                    // console.log(typeof innerArg);
                    if (typeof innerArg !== "number") {
                        return undefined;
                    } else {
                        return outerArg + innerArg;
                    }
                }; //3
            } //2
        } //1
        console.log(args[0]);
    }
    //var sumTwoAnd = addTogether();
addTogether(2, 3);
//addTogether(1)(4);
//addTogether("http://bit.ly/IqT6zt");
//addTogether(2, "3");
//addTogether(2)([3]);
