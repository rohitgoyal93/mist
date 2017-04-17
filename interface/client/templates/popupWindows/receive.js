/**
Template Controllers
@module Templates
*/

/**
The view template
@class [template] receive
@constructor
*/
Template['popupWindows_receive'].onCreated(function () {

  //
  // var qrcode = new QRCode(document.getElementById("qrcode"), {
  //  text: "ssss",
  //  width: 128,
  //  height: 128,
  //  colorDark : "#000000",
  //  colorLight : "#ffffff",
  //  correctLevel : QRCode.CorrectLevel.H
  // })
  //

  //copy address code

    // $(".copyAddress").click(function(){
    //   console.info('Hello');
    //   $('.wallet-address-input').copyme();
    // });
    //
    //   $.fn.copyme = function() {
    //   $('span[id^="success-alert"]').remove();
    //   this.select();
    //   $(this).focus();
    //   document.execCommand("copy");
    //   document.getSelection().removeAllRanges();
    //   $(this).after('<span id="success-alert"><i style="font-size:20px;color:green;" class="fa fa-check" aria-hidden="true"></i></span>');
    //   $('#success-alert').css("color", "green");
    //   };

    function open(){
         console.info("Open button is clicked");
    }


});
