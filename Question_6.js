//NOT USING input keyword as we have not learned in the lecture series till now.

var payment="paypal"
switch(payment){
    case "credit":
        console.log("You will be charged processing fee of 2%");
        break;
    case "debit":
        console.log("You will be charged processing fee of 1.5%");
        break;
    case "paypal":
        console.log("You will be charged processing fee of 3%");
        break;
    default:
        console.log("Please do shopping at first.Thank you");
}

//OUTPUT-You will be charged processing fee of 3%