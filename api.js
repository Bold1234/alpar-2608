function submitToAPI(e) {
  e.preventDefault();
  var URL = "https://jjmutmdkl0.execute-api.us-east-2.amazonaws.com/stage2/contact-us-res";
  //var Namere = /[A-Za-z]{1}[A-Za-z]/;
  // if (!Namere.test($("#name").val())) {
  //            alert ("Name can not less than 2 char");
  //  return;
  // }
  if ($("#name").val() == "") {
    //alert ("Please enter your email id");
    Confirm.open({
      title: 'Empty Field!',
      message: 'Please enter your name',
    })
    return;
  }
  if ($("#company").val() == "") {
    Confirm.open({
      title: 'Empty Field!',
      message: 'Please enter your company',
    })
    //alert("please enter you company");
    return;
  }
  if ($("#email").val() == "") {
    //alert ("Please enter your email id");
    Confirm.open({
      title: 'Empty Field!',
      message: 'Please enter your email id',
    })
    return;
  }

  var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
  if (!reeamil.test($("#email").val())) {
    // alert ("Please enter valid email address");
    Confirm.open({
      title: 'Invalid Email!',
      message: 'Please enter valid email address',
    })
    return;
  }

  /*  $(document).ready(function(){
     var topicOptIn = [
       $('#topic1In').is(':checked'),
       $('#topic2In').is(':checked'),
       $('#topic3In').is(':checked')
     ];
     if (getParameterByName("t1") == "OptIn") {
       $("#topic1In").prop('checked', true);
     }
     if (getParameterByName("t2") == "OptIn") {
       $("#topic2In").prop('checked', true);
     }
     if (getParameterByName("t3") == "OptIn") {
       $("#topic3In").prop('checked', true);
     }
    // If customer unchecks a box, or leaves a box unchecked, set the opt
       // status to "OptOut".
       for (i = 0; i < topicOptIn.length; i++) {
         if (topicOptIn[i] == true) {
           topicOptIn[i] = "OptIn";
         } else {
           topicOptIn[i] = "OptOut";
         }
       }
   });
*/


  // var mobilere = /[0-9]{10}/;
  // if (!mobilere.test($("#phone").val())) {
  //  alert ("Please enter valid mobile number");
  // return;
  // }





  var topicOptIn = [
    //  $('#topic1In'),
    $('#topic2In'),
    $('#topic3In')
  ];


  /* for (i = 0; i < topicOptIn.length; i++) {
   if (topicOptIn[i] == false) {
     topicOptIn[i] = "un select";
 } else {
     topicOptIn[i] = "select";
   }
} 
*/

  var message1 = $("#message1").val();
  var name = $("#name").val();
  var phone = $("#phone").val();
  var email = $("#email").val();
  var message = $("#message").val();
  var company = $("#company").val();
  var data = {
    topic1: message1,
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message,

  };


  // If customer unchecks a box, or leaves a box unchecked, set the opt
  // status to "OptOut".



  $.ajax({
    type: "POST",
    url: "https://jjmutmdkl0.execute-api.us-east-2.amazonaws.com/stage2/contact-us-res",
    dataType: "json",
    crossDomain: "true",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(data),
  }).then(
    window.location.href = "Thanks.html",
  );

}
