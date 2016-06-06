$(document).ready(function () {
    
    console.log("ready");
    

//hide faq
    
$("section#faq").hide();
    //hide the nav
    $("nav").hide();
//click the nav
$("#sidebar").click(function(){
    $("#sidebar").hide(500);
    $("img#puzzle").css("width","1%");
    $("img#puzzle").css("top","1%");
    $("nav").show();
    
});
//click the nav
    
    $("img#puzzle").click(function(){
    $("#sidebar").show(500);
    $("img#puzzle").css("width","inherit");
    $("img#puzzle").css("top","3%");
    $("nav").hide();
    
});
   

    
    
    
    
    //hover the question mark
$("img#qmark").hover(function(){
    $("img#qmark").css("width","4%"); 
    },
    function(){
     $("img#qmark").css("width", "inherit"); 
    
});



    
//double click q mark
$("img#qmark").click(function(){
   if($("section#faq").css("top") == "0%"){
       $("section#faq").show();
        $("section#faq").animate({
            top: "15%",
            left: "36%"},
            500
            );
       
   } else {  
    $("section#faq").hide();
    $("section#faq").animate({
       top: "0%",
        left: "100%"},
        500
    );
       
       
   }
    
});
	
	//close jquery
	})
	
	
	