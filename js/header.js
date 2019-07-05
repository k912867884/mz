$(function(){
   $.ajax({
      url:"header.html",
      type:"get",
      success:function(result){
         $(result).replaceAll("header");
        //console.log(result);
        $(`<link rel="stylesheet" href="css/header.css">`).appendTo("head");
      }
   })
})