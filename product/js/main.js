 var trig = document.getElementById('video1');

 function playVideo() {
     if (trig.paused) 
     trig.play(); 
     else 
     trig.pause();
 }

 $(document).ready(function(){
     $(function(){
         $('#commentForm').validate();
     });
 });