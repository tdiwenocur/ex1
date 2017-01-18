$(document).ready(function () {
    
    console.log("ready");
    
//hide the navigation//
    
  // $("ul#navbar").css("top","-80px");//
 $("div#nav").css("top","-150px");   
    
    

    
//hover navigation//
    $("div#hamburger img").click(function() {
   $("div#nav").animate({
        top: "0px",
         },
        600
    );  
    $("div#hamburger img").hide();
           
$("div#nav img").click(function() {
   $("div#nav").animate({
        top: "-150px",
         },
        600
    );
    $("div#hamburger img").show();
  })
    
    

    })
    
    
    
    
    	//close jquery
	})
	