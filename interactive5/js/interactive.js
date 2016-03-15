$(document).ready(function(){
    
    console.log("ready");
//show map
$('img#map').show();
//hide bus map
$('img#busmap').hide();
//hide entrance map
$('img#entrmap').hide();

//showing bus map on click of legend
$('li#busstn').click(function(){
	$('img#busmap').toggle();
	$('img#map').toggle();
		return false;
})
//showing entrance map on click of legend
$('li#entrances').click(function(){
	$('img#entrmap').toggle();
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
var states = ['3rd & A', 'Academic Surge','Activities and Recreation Center', 'Advanced Materials Research Laboratory', 'Aggie Village', 'Agriculture Field Station', 'Arboretum Headquarters','Arboretum Teaching Nursery', 'ARC Pavilion','Art Annex','Art Building','Asmundson Hall','Athletics Annex','Bainer Hall','Bargain Barn','Book Store','Bowley Plant Science Teaching Facility','Briggs Hall', 'Center for Child and Family Studies','Center for Companion Animal Health','Chancellor’s Residence','Chemistry','Chemistry Annex','Cole Facility','Conference Center','Cowell Building','Cruess Hall','Cuarto Residence Halls','Dairy Cattle Facility','Domes','Dutton Hall','Earth and Physical Sciences','Educational Opportunity Program','Enology Laboratory','Environmental Horticulture','Equestrian Center Covered Arena','Everson Hall','Facilities Services','Fire & Police Building','Fleet Services','Food Science & Technology','Freeborn Hall','Gallagher Hall',
'Genome & Biomedical Sciences Facility','Giedt Hall','Gourley Clinical Teaching Center','Ghausi Hall','Guilbert House','Haring Hall','Hart Hall',
'Heitman Staff Learning Center','Hickey Gym',
'Hoagland Hall','Student Housing Admin','Human Resources Administration Building','Hunt Hall',
'Hutchison Child Development Center','Hutchison Hall','Hyatt Place','International House','Jackson Sustainable Winery','Jungerman Hall',
'Kemper Hall','Kerr Hall','King Hall','Kleiber Hall','La Rue Apartments','Life Sciences',
'Los Rios Community College','Maddy Lab','Mann Laboratory','Mathematical Sciences','Medical Sciences I B','Medical Sciences I C','Memorial Union','Meyer Hall','Mondavi Center','Mrak Hall',
'Music','Nelson Gallery','North Hall','Olson Hall',
'Orchard Park Apartments','Outdoor Adventures','Parsons Hall','Peter A. Rock Hall','Physical Sciences and Engineering Library','Physics',
'Plant & Environmental Sciences','Plant Reproductive Biology Facility','Primero Grove Apartments','Pritchard VMTH','Putah Creek Lodge',
'Regan Residence Halls','RMI Brewery', 'Winery and Food Pilot Facility','Robert Mondavi Institute for Wine and Food Science','Robbins Hall','Robbins Hall Annex','Roessler Hall','Russell Park Apartments','Schaal Aquatic Center',
'Schalm Hall','School of Education','Sciences Lab',
'Sciences Lecture Hall','Segundo Dining Commons',
'Segundo Residence Halls','Shields Library','Silo',
'Social Sciences and Humanities','Solano Park Housing','Solstice Apartments','South Hall','South Silo','Sproul Hall','Storer Hall','Student Community Center','Student Farm Field House','Student Health and Wellness Center','Surge II','Surge III','Surge IV','TB 9','TB 161-172, 175','TB 191-194','TB 195','TB 204-205',
'Tercero Dining Commons','Tercero Residence Halls',
'The Barn','The Colleges of La Rue','Thurman Laboratory','The Ramble Apartments','Transportation and Parking Services','Tupper Hall','UC Davis Extension International Center','Unitrans','University House & Annex','Utilities Headquarters','Valley Hall','Veihmeyer Hall','Vet Med 2','Vet Med 3A','Vet Med 3B',
'Vet Med Equine Athletic Performance Lab','Viridian Apartments','Voorhies Hall','Walker Hall','Walter A. Buehler Alumni Center','Watershed Science','Welcome Center','Wellman Hall','Western Center for Agricultural Equipment',
'Western Human Nutrition Research Center(WHNRC)',
'Wickson Hall','Wright Hall','Wyatt Deck','Wyatt Pavilion','Young Hall', ];
    
$('#the-basics .typeahead').typeahead({
   hint: true,
   highlight: true,
   minLength: 3
},
  {  
    name: 'states',
    source: substringMatcher(states)

});


//clicking on zoom
var clicks = 0;
$('#zoomin').click(function(){
console.log("clicked zoom in");
    if(clicks == 0){
	console.log("clicked zoom in once");
	$('#map').animate({
		width: "900px",
		opacity: 1,
	});
	$('#yourloc').animate({
		width: "160px",
		opacity: 1,
		left: "740px",
	});
	$('section#validation').hide();
        // first click
    }else{
        // second click
		$('#map').animate({
		width: "1600px",
	});
	$('#yourloc').animate({
		width: "320px",
		left: "1000px",
	});
	}
++clicks;
})	

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
	clicks=0;
});
//hover on bus legend
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

//hover on entrances legend
	$('section#legend #entrances').mouseenter(function(){
		$('section#legend #entrances').animate({
		fontSize: "1.5em",
	});
	
});
$('section#legend #entrances').mouseleave(function(){
		$('section#legend #entrances').animate({
		fontSize: "1.2em",
	});
	
});
//hover on mas
	$('section#legend #mas').mouseenter(function(){
		$('section#legend #mas').animate({
		fontSize: "1.5em",
	});
	
});
$('section#legend #mas').mouseleave(function(){
		$('section#legend #mas').animate({
		fontSize: "1.2em",
	});
	
});

//hover on bathroom legend
	$('section#legend #bath').mouseenter(function(){
		$('section#legend #bath').animate({
		fontSize: "1.5em",
	});
	
});
$('section#legend #bath').mouseleave(function(){
		$('section#legend #bath').animate({
		fontSize: "1.2em",
	});
	
});
//close jquery
})