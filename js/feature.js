 /*--For-Product-SLider----------------*/
 $(document).ready(function() {
    $('#autoWidth').lightSlider({
        // autoWidth:true,
        //loop:true,
        //keyPress:true,
        //autoWidth:true
        // onSliderLoad: function() {
        //     $('#autoWidth').removeClass('cS-hidden');
        // } 
    });  
    $('#adaptive').lightSlider({
        //gallery:true,
                item:1,
                //thumbItem:9,
                slideMargin: 0,
                speed:500,
                auto:true,
                loop:true,
                onSliderLoad: function() {
                    $('#adaptive').removeClass('cS-hidden');
                }  
    });  
  });
 function myFunction1(){
    document.getElementById("mydropdown1").classList.toggle("show");
 }
 window.onclick=function(event){
    if(!event.target.matches('.dropbtn')){
        var dropdowns=document.getElementByClassName("dropdown-content1");
        var i;
        for (i = 0;i<dropdowns.length;i++) {
            var opendropdown=dropdowns[i];
            if(opendropdown.classList.contains('show')){
                opendropdown.classList.remove('show');
            }
        }
    }
 }
  function myFunction2(){
    document.getElementById("mydropdown2").classList.toggle("show");
 }
 window.onclick=function(event){
    if(!event.target.matches('.dropbtn')){
        var dropdowns=document.getElementByClassName("dropdown-content2");
        var i;
        for (i = 0;i<dropdowns.length;i++) {
            var opendropdown=dropdowns[i];
            if(opendropdown.classList.contains('show')){
                opendropdown.classList.remove('show');
            }
        }
    }
 }
   function myFunction3(){
    document.getElementById("mydropdown3").classList.toggle("show");
 }
 window.onclick=function(event){
    if(!event.target.matches('.dropbtn')){
        var dropdowns=document.getElementByClassName("dropdown-content3");
        var i;
        for (i = 0;i<dropdowns.length;i++) {
            var opendropdown=dropdowns[i];
            if(opendropdown.classList.contains('show')){
                opendropdown.classList.remove('show');
            }
        }
    }
 }
