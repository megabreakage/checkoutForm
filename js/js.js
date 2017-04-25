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
    $("#customerCell").text(cellNumber);
    $("#customerAddress").text(
      address+" "+zipCode+" "+city+" "+country
    );
    $("#receipt").show();
    event.preventDefault();
  });
});

//apply the forEach on this
