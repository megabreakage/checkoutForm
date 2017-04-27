$(document).ready(function(){
  $("form").submit(function(event){
    //declare and initialize variables2
    var fname = $("#fname").val();
    var lname = $("#lname").val();
    var email = $("#email").val();
    var cellNumber = $("#cellNumber").val();
    var address = $("#address").val();
    var zipCode = $("#zipCode").val();
    var city = $("#country").val();
    var country = $("#country").val();

    // output
    $("#customerName").text(fname+" "+lname);
    $("#customerEmail").text(email);
    $("#customerAddress").text(address);
    $("#customerZipCode").text(zipCode);
    $("#customerLocation").text(
      city+", "+country);

    $("#fillForm").hide();
    $("#receipt").fadeIn(2000);
    event.preventDefault();
  });
});

//apply the forEach on this
