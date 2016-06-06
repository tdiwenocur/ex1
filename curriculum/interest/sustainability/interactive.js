$(document).ready(function () {
    
    console.log("ready");
    
//hide all descriptions
$("section#classes li.description").hide();
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
   
//section where all the hovering happens
    
     $("section#classes li#one").hover(function(){
        $("section#classes li.one").show();
    },
    function(){
        $("section#classes li.one").hide();   
    });
    
//hover second    
    $("section#classes li#two").hover(function(){
        $("section#classes li.two").show();
    },
    function(){
        $("section#classes li.two").hide();   
    });
//hover third   
$("section#classes li#three").hover(function(){
        $("section#classes li.three").show();
    },
    function(){
        $("section#classes li.three").hide();   
    });
//hover fourth
    $("section#classes li#four").hover(function(){
        $("section#classes li.four").show();
    },
    function(){
        $("section#classes li.four").hide();   
    });
	
//hover fifth
     $("section#classes li#five").hover(function(){
        $("section#classes li.five").show();
    },
    function(){
        $("section#classes li.five").hide();   
    });
//hover sixth
     $("section#classes li#six").hover(function(){
        $("section#classes li.six").show();
    },
    function(){
        $("section#classes li.six").hide();   
    });
//hover seventh
     $("section#classes li#seven").hover(function(){
        $("section#classes li.seven").show();
    },
    function(){
        $("section#classes li.seven").hide();   
    });
//hover eigth
     $("section#classes li#eight").hover(function(){
        $("section#classes li.eight").show();
    },
    function(){
        $("section#classes li.eight").hide();   
    });
//hover ninth
     $("section#classes li#nine").hover(function(){
        $("section#classes li.nine").show();
    },
    function(){
        $("section#classes li.nine").hide();   
    });
//hover tenth
     $("section#classes li#ten").hover(function(){
        $("section#classes li.ten").show();
    },
    function(){
        $("section#classes li.ten").hide();   
    });
//hover 11th
     $("section#classes li#eleven").hover(function(){
        $("section#classes li.eleven").show();
    },
    function(){
        $("section#classes li.eleven").hide();   
    });
//hover 12th
     $("section#classes li#twelve").hover(function(){
        $("section#classes li.twelve").show();
    },
    function(){
        $("section#classes li.twelve").hide();   
    });
//hover 13th
     $("section#classes li#thirteen").hover(function(){
        $("section#classes li.thirteen").show();
    },
    function(){
        $("section#classes li.thirteen").hide();   
    });
    
//hover 14th
     $("section#classes li#fourteen").hover(function(){
        $("section#classes li.fourteen").show();
    },
    function(){
        $("section#classes li.fourteen").hide();   
    });
    
//hover 15th
     $("section#classes li#fifteen").hover(function(){
        $("section#classes li.fifteen").show();
    },
    function(){
        $("section#classes li.fifteen").hide();   
    });
//hover 16th
     $("section#classes li#sixteen").hover(function(){
        $("section#classes li.sixteen").show();
    },
    function(){
        $("section#classes li.sixteen").hide();   
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
	
	
	