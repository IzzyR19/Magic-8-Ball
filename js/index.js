<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate","#pageone",function(){

});
    
    
    function display(){
        var idk = number();
        alert(idk);
    }
                         
    
    function number() {
	   return !Math.round(Math.random());
    }