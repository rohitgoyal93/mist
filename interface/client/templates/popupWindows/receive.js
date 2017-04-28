/**
Template Controllers
@module Templates
*/

/**
The view template
@class [template] receive
@constructor
*/

Template.popupWindows_receive.onCreated(function () {
});

Template.popupWindows_receive.rendered = function(){
  console.log("page is rendered");
  var qrCodeVal = $('.wallet-address-input').val();
  Session.set("qrCode",qrCodeVal);
}
Template.popupWindows_receive.helpers({
  qrCodeValue : function(){
    var ses = Session.get('qrCode');
    return Session.get('qrCode');
  }
})
Template.popupWindows_receive.events({
  //copy address code
    "click #test": function(){
      console.info('Hello');
  // Select the content
  document.querySelector(".wallet-address-input").select();
  // Copy to the clipboard
  document.execCommand('copy');
}
  //  "keyup .wallet-address-input": function(){
  //      console.log("key pressed");
  //      var qrCodeVal = $('.wallet-address-input').val();
  //      console.log("2323232323",qrCodeVal);
  //      console.log("before change session value is..",Session.get("qrCode"))
  //      //Session.clear('qrCode')
  //      Session.set("qrCode",qrCodeVal);
  //      console.log("after cahnge value is....",Session.get("qrCode"))
  //   //  qrcode.makeCode(querySelector(".wallet-address-input").val());
  //   }
})

// Template.popupWindows_receive.events({
// // qr code
//    "keyup .wallet-address-input": function(){
//        console.log("key pressed");
//       qrcode.makeCode(querySelector(".wallet-address-input").val());
//     }
// })
