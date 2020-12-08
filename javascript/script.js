
/*Code for Slide Show of cards */
$('#recipeCarousel').carousel({
  interval: 10000
});

$('.carousel .carousel-item').each(function(){
    var minPerSlide = 4;
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=0;i<minPerSlide;i++) {
        next=next.next();
        if (!next.length) {
        	next = $(this).siblings(':first');
      	}
        
        next.children(':first-child').clone().appendTo($(this));
      }
});
/*Code for Sild Show ends*/
/**Cost Estimator Code */
var costForm=document.getElementById("cost-form");
costForm.addEventListener('submit',function(event){
  event.preventDefault();
  var result=document.getElementById("result");
  var cost=document.getElementById("cost");
  var length=document.getElementById("length").value;
  var breadth=document.getElementById("breadth").value;
  var floor=document.getElementById("floor").value;
  var costAmount=floor*length*breadth;
  cost.innerHTML=costAmount;
  result.style.display="block";
});
/**Cost Estimator Code End */