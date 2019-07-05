(function(){
   $.ajax({
      url:"http://localhost:3000/index",
      type:"get",
      dataType:"json"
   }).then(function(result){
      console.log(result);
     new Vue({
        el:"#f1",
        data:{
           p1:result[0],
           p2:result[1],
           p3:result[2],
           p4:result[3],
           p5:result[4],
           p6:result[5],
           p7:result[6],
           p8:result[7],
           p9:result[8],
           p10:result[9],
           pOthers:result.slice(3)
        }
     })



   })
})()