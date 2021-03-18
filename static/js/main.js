$(document).ready(function() {
    $('#submit_btn').click(function(e) {
        var doma = $('#domainname').val();
        console.log(doma)
        if(!/^(http(s)?\/\/:)?(www\.)?[a-zA-Z\-]{3,}(\.(com|net|org))?$/.test(doma))
            {
                // alert('invalid domain name');
                $('.rez').text('Invalid Domain');
                return false;
            }
        else{
          $('.rez').text('valid Domain');
        //   var $loaderId        =   "#submit_btn";
        //   var $loaderText      =   "Updating...";
        //   $($loaderId).prop("disabled", true);
        //   $($loaderId).html(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>&nbsp;` + $loaderText);
        //   var $id = e.target.id;
        //   var $f = $("#" + $id);
        //   var $url = "dns_checker.py?" + $f.serialize();
        //     url: $url,
        // $.ajax({
        //
        //   })
      }

      });
    });








        //             $.ajax({
        //               url: $url,
        //               success: function(result) {
        //                 // $("#v-pills-system .card-body > .no-gutters").load(($urlparam) + " #v-pills-system .card-body > .no-gutters > *");
        //                   window.location.reload();
        //                   $.toast({
        //                       autohide: 'true',
        //                     });
        //                     $(".toast-new").toast("show").html(result);
        //                     $(".toast").removeClass("toast-new");
        //                   }
        //                 });
        //
//         $('#contentajax').empty()
//                          .css("border", "1px solid #CCCCCC")
//                          .html('<p class="vent">Please wait...</p><p class="venter"><img src="../images/ajax.gif" /></p>');
//         $.ajax({
//             type: 'POST',
//             url: 'http://localhost:3000/domain',
//             data: {
//                 domain: doma
//             },
//             success: function(msg){
//                 $('#contentajax').html(msg);
//                 $('#contentajax').css("border", "none");
//             }
//         });
//     });
// });
//



// $(function() {
//    // set up form validation here
//    $("form").validate();
// });
//
// $( "form" ).on( "submit", function(e) {
//
//     var dataString = $(this).serialize();
//
//     // alert(dataString); return false;
//
//     $.ajax({
//       type: "POST",
//       url: "bin/process.php",
//       data: dataString,
//       success: function () {
//         $("#contact_form").html("<div id='message'></div>");
//         $("#message")
//           .html("<h2>Contact Form Submitted!</h2>")
//           .append("<p>We will be in touch soon.</p>")
//           .hide()
//           .fadeIn(1500, function () {
//             $("#message").append(
//               "<img id='checkmark' src='images/check.png' />"
//             );
//           });
//       }
//     });
//
//     e.preventDefault();
//   });
// });





// $(document).on("submit","#ipaddressvalidate",function(e){
//         var str = $("#ip").val();
//         var ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
//         if(str.match(ipformat)){
//             var $loaderId        =   "#submit_btn";
//             var $loaderText      =   "Updating...";
//             $($loaderId).prop("disabled", true);
//             $($loaderId).html(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>&nbsp;` + $loaderText);
//             var $id = e.target.id;
//             var $f = $("#" + $id);
//             var $url = "save_nemesida.live.py?" + $f.serialize();
//             $.ajax({
//               url: $url,
//               success: function(result) {
//                 // $("#v-pills-system .card-body > .no-gutters").load(($urlparam) + " #v-pills-system .card-body > .no-gutters > *");
//                   window.location.reload();
//                   $.toast({
//                       autohide: 'true',
//                     });
//                     $(".toast-new").toast("show").html(result);
//                     $(".toast").removeClass("toast-new");
//                   }
//                 });
//
//         }else{
//           $.toast({
//               autohide: 'true',
//           });
//           $(".toast-new").toast("show").html('<div class="alert alert-danger"><button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close"><span aria-hidden="true">&times;</span></button><p>Enter a valid IP!</p></div>');
//           $(".toast").removeClass("toast-new");
//
//           }
//
//       });
