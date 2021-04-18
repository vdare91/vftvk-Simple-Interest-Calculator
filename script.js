function compute()
{
    //This function calculates the interest based on entered values

    //Grab principal amount from form
    var principal = document.getElementById("principal");

    //Validate that principal has a value
    if(principal.value<0.25)
    {
      alert("Please enter a positive amount");
      principal.focus();
      return false;
    }

    //Grab rate from form
    var rate = document.getElementById("rate").value;

    //Grab years from form
    var years = document.getElementById("years").value;

    //Calculate interest based on previously grabbed values
    var interest = principal.value * years * rate/100;

    //Add years from form to current year
    var year = new Date().getFullYear()+parseInt(years);

    //Update the result element with the computed results
    document.getElementById("result").innerHTML = "\<br\>If you deposit \<span class='highlight'\>"+principal.value+"\</span\>\<br\>at an interest rate of \<span class='highlight'\>"+rate+"%\</span\>.\<br\>You will receive an amount of \<span class='highlight'\>"+interest+"\</span\>,\<br\>in the year \<span class='highlight'\>"+year+"\</span\>\<br\>";

    //Return true and allow submitting the form if validation passes
    return true;
}

function updateRate()
{
  //This function updates the displayed rate on the form when the slider is changed

  //Grab rate from form
  var rateval = document.getElementById("rate").value;

  //Update the rate_val element to the new rate
  document.getElementById("rate_val").innerText = rateval+"%";
}
