$(document).ready(function(){
    
    console.log("ready");




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
'The Death Star', 'Math-Science Building', 'Student Community Center'];
    
$('#the-basics .typeahead').typeahead({
   hint: true,
   highlight: true,
   minLength: 1
},
  {  
    name: 'states',
    source: substringMatcher(states)

});




//close jquery
})