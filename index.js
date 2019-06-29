var $rangeslider = $('#js-amount-range');
var $amount = $('#js-amount-input');
var $cost = $('#js_amount_cost');
var $cost_note = $('#cost_note');

$rangeslider
  .rangeslider({
    polyfill: false
  })
  .on('input', function() {
    $amount[0].value = this.value;
    $cost[0].innerHTML = this.value*3.33;	
    $cost_note[0].innerHTML = this.value + ' Gh/s';
  });

$amount.on('input', function() {
  $rangeslider.val(this.value).change();
});


		var el1 = document.getElementsByClassName("child")[1];
			el1.getElementsByClassName("red")[0].style.display="block";
			el1.style.backgroundColor = "#262F34";
			el1.getElementsByTagName("p")[0].style.color = "#C4677C";
			
		var el = document.getElementsByClassName("child")[0];
		el.addEventListener("click", function(){
			el.getElementsByClassName("red")[0].style.display="block";
			el.style.backgroundColor = "#262F34";
			el.getElementsByTagName("p")[0].style.color = "#C4677C";
			document.getElementsByClassName("blockB")[0].style.display="none";
			document.getElementById("payment").style.display="none";
			document.getElementsByClassName("blockA")[0].style.display="none";
			document.getElementsByClassName("icons2")[0].style.display="none";
			document.getElementById("header2").innerHTML="ДИСПЕТЧЕРСКАЯ";
			
			el1.getElementsByClassName("red")[0].style.display="";
			el1.getElementsByTagName("p")[0].style.color = "";
			el1.style.backgroundColor = "";
			el2.getElementsByClassName("red")[0].style.display="";
			el2.getElementsByTagName("p")[0].style.color = "";
			el2.style.backgroundColor = "";
			el3.getElementsByClassName("red")[0].style.display="";
			el3.getElementsByTagName("p")[0].style.color = "";
			el3.style.backgroundColor = "";
			el4.getElementsByClassName("red")[0].style.display="";
			el4.getElementsByTagName("p")[0].style.color = "";
			el4.style.backgroundColor = "";
			el5.getElementsByClassName("red")[0].style.display="";
			el5.getElementsByTagName("p")[0].style.color = "";
			el5.style.backgroundColor = "";
		}, false);
		
		var el1 = document.getElementsByClassName("child")[1];
		el1.addEventListener("click", function(){
			el1.getElementsByClassName("red")[0].style.display="block";
			el1.style.backgroundColor = "#262F34";
			el1.getElementsByTagName("p")[0].style.color = "#C4677C";
			document.getElementsByClassName("blockB")[0].style.display="block";
			document.getElementById("payment").style.display="block";
			document.getElementsByClassName("blockA")[0].style.display="block";
			document.getElementsByClassName("icons2")[0].style.display="flex";
			
			document.getElementById("header2").innerHTML="КУПИТЬ МОЩНОСТЬ";
			
			el.getElementsByClassName("red")[0].style.display="";
			el.getElementsByTagName("p")[0].style.color = "";
			el.style.backgroundColor = "";
			el2.getElementsByClassName("red")[0].style.display="";
			el2.getElementsByTagName("p")[0].style.color = "";
			el2.style.backgroundColor = "";
			el3.getElementsByClassName("red")[0].style.display="";
			el3.getElementsByTagName("p")[0].style.color = "";
			el3.style.backgroundColor = "";
			el4.getElementsByClassName("red")[0].style.display="";
			el4.getElementsByTagName("p")[0].style.color = "";
			el4.style.backgroundColor = "";
			el5.getElementsByClassName("red")[0].style.display="";
			el5.getElementsByTagName("p")[0].style.color = "";
			el5.style.backgroundColor = "";
		}, false);
		
		
		var el2 = document.getElementsByClassName("child")[2];
		el2.addEventListener("click", function(){
			el2.getElementsByClassName("red")[0].style.display="block";
			el2.style.backgroundColor = "#262F34";
			el2.getElementsByTagName("p")[0].style.color = "#C4677C";
			document.getElementsByClassName("blockB")[0].style.display="none";
			document.getElementById("payment").style.display="none";
			document.getElementsByClassName("blockA")[0].style.display="none";
			document.getElementsByClassName("icons2")[0].style.display="none";
			document.getElementById("header2").innerHTML="ПАРТНЕРСКАЯ ПРОГРАММА";
			
			el.getElementsByClassName("red")[0].style.display="";
			el.getElementsByTagName("p")[0].style.color = "";
			el.style.backgroundColor = "";
			el1.getElementsByClassName("red")[0].style.display="";
			el1.getElementsByTagName("p")[0].style.color = "";
			el1.style.backgroundColor = "";
			el3.getElementsByClassName("red")[0].style.display="";
			el3.getElementsByTagName("p")[0].style.color = "";
			el3.style.backgroundColor = "";
			el4.getElementsByClassName("red")[0].style.display="";
			el4.getElementsByTagName("p")[0].style.color = "";
			el4.style.backgroundColor = "";
			el5.getElementsByClassName("red")[0].style.display="";
			el5.getElementsByTagName("p")[0].style.color = "";
			el5.style.backgroundColor = "";
		}, false);
		
		
		var el3 = document.getElementsByClassName("child")[3];
		el3.addEventListener("click", function(){
			el3.getElementsByClassName("red")[0].style.display="block";
			el3.style.backgroundColor = "#262F34";
			el3.getElementsByTagName("p")[0].style.color = "#C4677C";
			document.getElementsByClassName("blockB")[0].style.display="none";
			document.getElementById("payment").style.display="none";
			document.getElementsByClassName("blockA")[0].style.display="none";
			document.getElementsByClassName("icons2")[0].style.display="none";
			document.getElementById("header2").innerHTML="ИСТОРИЯ";
			
			el.getElementsByClassName("red")[0].style.display="";
			el.getElementsByTagName("p")[0].style.color = "";
			el.style.backgroundColor = "";
			el1.getElementsByClassName("red")[0].style.display="";
			el1.getElementsByTagName("p")[0].style.color = "";
			el1.style.backgroundColor = "";
			el2.getElementsByClassName("red")[0].style.display="";
			el2.getElementsByTagName("p")[0].style.color = "";
			el2.style.backgroundColor = "";
			el4.getElementsByClassName("red")[0].style.display="";
			el4.getElementsByTagName("p")[0].style.color = "";
			el4.style.backgroundColor = "";
			el5.getElementsByClassName("red")[0].style.display="";
			el5.getElementsByTagName("p")[0].style.color = "";
			el5.style.backgroundColor = "";
		}, false);
		
		
		var el4 = document.getElementsByClassName("child")[4];
		el4.addEventListener("click", function(){
			el4.getElementsByClassName("red")[0].style.display="block";
			el4.style.backgroundColor = "#262F34";
			el4.getElementsByTagName("p")[0].style.color = "#C4677C";
			document.getElementsByClassName("blockB")[0].style.display="none";
			document.getElementById("payment").style.display="none";
			document.getElementsByClassName("blockA")[0].style.display="none";
			document.getElementsByClassName("icons2")[0].style.display="none";
			document.getElementById("header2").innerHTML="НАСТРОЙКА";
			
			el.getElementsByClassName("red")[0].style.display="";
			el.getElementsByTagName("p")[0].style.color = "";
			el.style.backgroundColor = "";
			el1.getElementsByClassName("red")[0].style.display="";
			el1.getElementsByTagName("p")[0].style.color = "";
			el1.style.backgroundColor = "";
			el2.getElementsByClassName("red")[0].style.display="";
			el2.getElementsByTagName("p")[0].style.color = "";
			el2.style.backgroundColor = "";
			el3.getElementsByClassName("red")[0].style.display="";
			el3.getElementsByTagName("p")[0].style.color = "";
			el3.style.backgroundColor = "";
			el5.getElementsByClassName("red")[0].style.display="";
			el5.getElementsByTagName("p")[0].style.color = "";
			el5.style.backgroundColor = "";
		}, false);
		
		var el5 = document.getElementsByClassName("child")[5];
		el5.addEventListener("click", function(){
			el5.getElementsByClassName("red")[0].style.display="block";
			el5.style.backgroundColor = "#262F34";
			el5.getElementsByTagName("p")[0].style.color = "#C4677C";
			document.getElementsByClassName("blockB")[0].style.display="none";
			document.getElementById("payment").style.display="none";
			document.getElementsByClassName("blockA")[0].style.display="none";
			document.getElementsByClassName("icons2")[0].style.display="none";
			document.getElementById("header2").innerHTML="ПОДДЕРЖКА";
			
			el.getElementsByClassName("red")[0].style.display="";
			el.getElementsByTagName("p")[0].style.color = "";
			el.style.backgroundColor = "";
			el1.getElementsByClassName("red")[0].style.display="";
			el1.getElementsByTagName("p")[0].style.color = "";
			el1.style.backgroundColor = "";
			el2.getElementsByClassName("red")[0].style.display="";
			el2.getElementsByTagName("p")[0].style.color = "";
			el2.style.backgroundColor = "";
			el3.getElementsByClassName("red")[0].style.display="";
			el3.getElementsByTagName("p")[0].style.color = "";
			el3.style.backgroundColor = "";
			el4.getElementsByClassName("red")[0].style.display="";
			el4.getElementsByTagName("p")[0].style.color = "";
			el4.style.backgroundColor = "";
		}, false);