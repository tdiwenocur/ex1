$(document).ready(function () {
    
    console.log("ready");
    
//show nav
$(nav).show();
//hide faq
    
$("section#faq").hide();
    //hide the nav
    $("nav").hide();

    
    //hide the branches
    $("section#branches li").hide();


    

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
	
	
	