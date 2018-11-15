<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate","#pageone",function(){
  
  	$('#pressme').on("tap",function(){
    	alert(The answer is <span id="myText"> Idk </span>);
 	});                       

    function random() {
	return !Math.round(Math.random());
        
     $("#myText").random);
        
}


});