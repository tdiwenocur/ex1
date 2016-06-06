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
    
    //hide the branches
    $("section#branches li").hide();

//hover the textiles tab
    $("h6#textile").hover(function(){
           $("li.text").css("color", "#dcbf5f");  
             $("li.text").show();
        },
        
        function(){
        $("li.text").css("color","white");
        $("li.text").hide();
     });
//hover the exhibit tab
    $("h6#exhibt").hover(function(){
           $("li.exhb").css("color", "#d9b644");
            $("li.exhb").show();
        },
        function(){
        $("li.exhb").css("color","white");
        $("li.exhb").hide();
    });
    
//hover the interior tab
    $("h6#interior").hover(function(){
           $("li.int").css("color", "#aeb55d"); 
            $("li.int").show();
        },
        function(){
        $("li.int").css("color","white");
        $("li.int").hide();
    });


//hover the interactive tab
    $("h6#ix").hover(function(){
           $("li.ix").css("color", "#77a785"); 
            $("li.ix").show();
        },
        function(){
        $("li.ix").css("color","white");
        $("li.ix").hide();
    });
//hover the viscom tab
    $("h6#viscom").hover(function(){
           $("li.vis").css("color", "#4e949d"); 
            $("li.vis").show();
        },
        function(){
        $("li.vis").css("color","white");
        $("li.vis").hide();
    });
//hover the product design tab
    $("h6#prod").hover(function(){
           $("li.proddes").css("color", "#257e92");
            $("li.proddes").show();
        },
        function(){
        $("li.proddes").css("color","white");
        $("li.proddes").hide();
    });   
//hover the sustainability tab
    $("h6#sust").hover(function(){
           $("li.sus").css("color", "#133c5e");   
            $("li.sus").show();
        },
        function(){
        $("li.sus").css("color","white");
        $("li.sus").hide();
    }); 


//hover the spectrum
    
$("img#strip").hover(function(){
   $("section#branches li").show();
},
    function(){
    $("section#branches li").hide();   
    
});
	
//click the spectrum
    
$("div#emptystrip").click(function(){
   $("section#branches li").show();
});
$("div#emptystrip").dblclick(function(){
    $("section#branches li").hide(); 
    
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
	
	
	