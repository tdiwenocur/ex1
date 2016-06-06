$(document).ready(function () {
    
    console.log("ready");
// hide the top paragraph 
    $("p#intropara").hide();
//hide the faq section
    $("section#faq").hide();
// code for rotating the arrow
 $('#dropdown').click(function(){
        if ($("#dropdown").attr('src') == 'homepage_dropdown_icon.png'){
    $("#dropdown").attr('src','homepage_dropdown_down.png');
    $("p#intropara").animate({
        top: "8%",
    });
    $("p#intropara").show();
        } else { 
    $("#dropdown").attr('src','homepage_dropdown_icon.png');
     $("p#intropara").animate({
        top: "0%",
         },
        600
    );
    $("p#intropara").hide();
}
})

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
	

	
	
	
	
	
	