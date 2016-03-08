$(document).ready(function(){
    
    console.log("ready");
//show map
$('img#map').show();
//hide bus map
$('img#busmap').hide();

//showing bus map on click of legend
$('li#busstn').click(function(){
	$('img#busmap').toggle();
	$('img#map').toggle();
		return false;
})

//dealing with typeahead stuff
    var substringMatcher=function(strs){
        return function findMatches(q, cb){
            var matches, substringRegex;
            
            matches = [];
            
            substrRegex = new RegExp (q, 'i');
            
            $.each(strs, function(i, str){
                if (substrRegex.test(str)){
            matches.push(str);
        
        
    }
    });

    cb(matches);
        };
    };
var states = ['The Silo', 'Memorial Union', 'Cruess', 'Wellman',
'The Death Star', 'Math-Science Building', 'Student Community Center', 'Giedt', 'Art Building', 'Scilec', 'Physics Building', 'Peter Rock Hall'];
    
$('#the-basics .typeahead').typeahead({
   hint: true,
   highlight: true,
   minLength: 1
},
  {  
    name: 'states',
    source: substringMatcher(states)

});


//clicking on zoom

$('#zoomin').click(function(){
console.log("clicked zoom in");
	$('#map').animate({
		width: "900px",
		opacity: 1,
	}
	
	);
	$('#yourloc').animate({
		width: "160px",
		opacity: 1,
		left: "740px",
	}
	
	);
	$('section#validation').hide();
		
		
	
});
$('#zoomout').click(function(){
console.log("clicked zoom out");
	$('#map').animate({
		width: "700px",
		opacity: 1,
	}
	
	);
	$('#yourloc').animate({
		width: "139px",
		opacity: 1,
		left: "650px",
	}
	
	);
	$('section#legend').animate({
		left: "80px",
		opacity: 1,
	}
	
	);
	$('section#validation').show();
});
//hover on legend
	$('section#legend #busstn').mouseenter(function(){
		$('section#legend #busstn').animate({
		fontSize: "1.5em",
	});
	
});
$('section#legend #busstn').mouseleave(function(){
		$('section#legend #busstn').animate({
		fontSize: "1.2em",
	});
	
});

//close jquery
})