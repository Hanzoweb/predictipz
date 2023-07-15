// JavaScript Document
var xmlhttp;

function create(){
	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();
		}
		else{
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
	}

function showwork(){
				document.getElementById("hidereadmore").style.display="none";
				document.getElementById("showwork").style.display="";

}

function hideyester(){
				document.getElementById("hideyesterid").style.display="none";
				document.getElementById("showyesterid").style.display="";
				document.getElementById("hidetodayid").style.display="none";
				document.getElementById("showtodayid").style.display="";
				document.getElementById("hidetomoroid").style.display="";
				document.getElementById("showtomoroid").style.display="none";
				document.getElementById("tableyester").style.display="";
				document.getElementById("tabletoday").style.display="none";
				document.getElementById("tabletomoro").style.display="none";
}

function showtoday(){
				document.getElementById("hideyesterid").style.display="";
				document.getElementById("showyesterid").style.display="none";
				document.getElementById("hidetodayid").style.display="";
				document.getElementById("showtodayid").style.display="none";
				document.getElementById("hidetomoroid").style.display="";
				document.getElementById("showtomoroid").style.display="none";
				document.getElementById("tableyester").style.display="none";
				document.getElementById("tabletoday").style.display="";
				document.getElementById("tabletomoro").style.display="none";
}

function hidetomoro(){
				document.getElementById("hideyesterid").style.display="";
				document.getElementById("showyesterid").style.display="none";
				document.getElementById("hidetodayid").style.display="none";
				document.getElementById("showtodayid").style.display="";
				document.getElementById("hidetomoroid").style.display="none";
				document.getElementById("showtomoroid").style.display="";
				document.getElementById("tableyester").style.display="none";
				document.getElementById("tabletoday").style.display="none";
				document.getElementById("tabletomoro").style.display="";
}


function hidedc1date(){
				document.getElementById("dc1dateid").style.display="none";
				document.getElementById("showdc1dateid").style.display="";
				document.getElementById("dc2dateid").style.display="";
				document.getElementById("showdc2dateid").style.display="none";
				document.getElementById("dctodateid").style.display="none";
				document.getElementById("showdctodateid").style.display="";
				document.getElementById("dc4dateid").style.display="";
				document.getElementById("showdc4dateid").style.display="none";
				document.getElementById("dc5dateid").style.display="";
				document.getElementById("showdc5dateid").style.display="none";
				document.getElementById("dc1table").style.display="";
				document.getElementById("dc2table").style.display="none";
				document.getElementById("dctotable").style.display="none";
				document.getElementById("dc4table").style.display="none";
				document.getElementById("dc5table").style.display="none";
}
function hidedc1date3(){
				document.getElementById("dc1dateid").style.display="none";
				document.getElementById("showdc1dateid").style.display="";
				document.getElementById("dctodateid").style.display="none";
				document.getElementById("showdctodateid").style.display="";
				document.getElementById("dc4dateid").style.display="";
				document.getElementById("showdc4dateid").style.display="none";
				document.getElementById("dc1table").style.display="";
				document.getElementById("dctotable").style.display="none";
				document.getElementById("dc4table").style.display="none";
}
function hidedc2date(){
				document.getElementById("dc1dateid").style.display="";
				document.getElementById("showdc1dateid").style.display="none";
				document.getElementById("dc2dateid").style.display="none";
				document.getElementById("showdc2dateid").style.display="";
				document.getElementById("dctodateid").style.display="none";
				document.getElementById("showdctodateid").style.display="";
				document.getElementById("dc4dateid").style.display="";
				document.getElementById("showdc4dateid").style.display="none";
				document.getElementById("dc5dateid").style.display="";
				document.getElementById("showdc5dateid").style.display="none";
				document.getElementById("dc1table").style.display="none";
				document.getElementById("dc2table").style.display="";
				document.getElementById("dctotable").style.display="none";
				document.getElementById("dc4table").style.display="none";
				document.getElementById("dc5table").style.display="none";
}
function showdctodate(){
				document.getElementById("dc1dateid").style.display="";
				document.getElementById("showdc1dateid").style.display="none";
				document.getElementById("dc2dateid").style.display="";
				document.getElementById("showdc2dateid").style.display="none";
				document.getElementById("dctodateid").style.display="";
				document.getElementById("showdctodateid").style.display="none";
				document.getElementById("dc4dateid").style.display="";
				document.getElementById("showdc4dateid").style.display="none";
				document.getElementById("dc5dateid").style.display="";
				document.getElementById("showdc5dateid").style.display="none";
				document.getElementById("dc1table").style.display="none";
				document.getElementById("dc2table").style.display="none";
				document.getElementById("dctotable").style.display="";
				document.getElementById("dc4table").style.display="none";
				document.getElementById("dc5table").style.display="none";
}
function showdctodate3(){
				document.getElementById("dc1dateid").style.display="";
				document.getElementById("showdc1dateid").style.display="none";
				document.getElementById("dctodateid").style.display="";
				document.getElementById("showdctodateid").style.display="none";
				document.getElementById("dc4dateid").style.display="";
				document.getElementById("showdc4dateid").style.display="none";
				document.getElementById("dc1table").style.display="none";
				document.getElementById("dctotable").style.display="";
				document.getElementById("dc4table").style.display="none";
}
function hidedc4date(){
				document.getElementById("dc1dateid").style.display="";
				document.getElementById("showdc1dateid").style.display="none";
				document.getElementById("dc2dateid").style.display="";
				document.getElementById("showdc2dateid").style.display="none";
				document.getElementById("dctodateid").style.display="none";
				document.getElementById("showdctodateid").style.display="";
				document.getElementById("dc4dateid").style.display="none";
				document.getElementById("showdc4dateid").style.display="";
				document.getElementById("dc5dateid").style.display="";
				document.getElementById("showdc5dateid").style.display="none";
				document.getElementById("dc1table").style.display="none";
				document.getElementById("dc2table").style.display="none";
				document.getElementById("dctotable").style.display="none";
				document.getElementById("dc4table").style.display="";
				document.getElementById("dc5table").style.display="none";
}
function hidedc4date3(){
				document.getElementById("dc1dateid").style.display="";
				document.getElementById("showdc1dateid").style.display="none";
				document.getElementById("dctodateid").style.display="none";
				document.getElementById("showdctodateid").style.display="";
				document.getElementById("dc4dateid").style.display="none";
				document.getElementById("showdc4dateid").style.display="";
				document.getElementById("dc1table").style.display="none";
				document.getElementById("dctotable").style.display="none";
				document.getElementById("dc4table").style.display="";
}
function hidedc5date(){
				document.getElementById("dc1dateid").style.display="";
				document.getElementById("showdc1dateid").style.display="none";
				document.getElementById("dc2dateid").style.display="";
				document.getElementById("showdc2dateid").style.display="none";
				document.getElementById("dctodateid").style.display="none";
				document.getElementById("showdctodateid").style.display="";
				document.getElementById("dc4dateid").style.display="";
				document.getElementById("showdc4dateid").style.display="none";
				document.getElementById("dc5dateid").style.display="none";
				document.getElementById("showdc5dateid").style.display="";
				document.getElementById("dc1table").style.display="none";
				document.getElementById("dc2table").style.display="none";
				document.getElementById("dctotable").style.display="none";
				document.getElementById("dc4table").style.display="none";
				document.getElementById("dc5table").style.display="";
}



function showfaq1(){
	document.getElementById("faq1").style.display="none";
	document.getElementById("faqc1").style.display="";
	document.getElementById("faq11").style.display="";
}
function hidefaq1(){
	document.getElementById("faq1").style.display="";
	document.getElementById("faqc1").style.display="none";
	document.getElementById("faq11").style.display="none";
}

function showfaq2(){
	document.getElementById("faq2").style.display="none";
	document.getElementById("faqc2").style.display="";
	document.getElementById("faq12").style.display="";
}
function hidefaq2(){
	document.getElementById("faq2").style.display="";
	document.getElementById("faqc2").style.display="none";
	document.getElementById("faq12").style.display="none";
}

function showfaq3(){
	document.getElementById("faq3").style.display="none";
	document.getElementById("faqc3").style.display="";
	document.getElementById("faq13").style.display="";
}
function hidefaq3(){
	document.getElementById("faq3").style.display="";
	document.getElementById("faqc3").style.display="none";
	document.getElementById("faq13").style.display="none";
}

function showfaq4(){
	document.getElementById("faq4").style.display="none";
	document.getElementById("faqc4").style.display="";
	document.getElementById("faq14").style.display="";
}
function hidefaq4(){
	document.getElementById("faq4").style.display="";
	document.getElementById("faqc4").style.display="none";
	document.getElementById("faq14").style.display="none";
}

function showfaq5(){
	document.getElementById("faq5").style.display="none";
	document.getElementById("faqc5").style.display="";
	document.getElementById("faq15").style.display="";
}
function hidefaq5(){
	document.getElementById("faq5").style.display="";
	document.getElementById("faqc5").style.display="none";
	document.getElementById("faq15").style.display="none";
}

function showfaq6(){
	document.getElementById("faq6").style.display="none";
	document.getElementById("faqc6").style.display="";
	document.getElementById("faq16").style.display="";
}
function hidefaq6(){
	document.getElementById("faq6").style.display="";
	document.getElementById("faqc6").style.display="none";
	document.getElementById("faq16").style.display="none";
}

function showfaq7(){
	document.getElementById("faq7").style.display="none";
	document.getElementById("faqc7").style.display="";
	document.getElementById("faq17").style.display="";
}
function hidefaq7(){
	document.getElementById("faq7").style.display="";
	document.getElementById("faqc7").style.display="none";
	document.getElementById("faq17").style.display="none";
}

function showfaq8(){
	document.getElementById("faq8").style.display="none";
	document.getElementById("faqc8").style.display="";
	document.getElementById("faq18").style.display="";
}
function hidefaq8(){
	document.getElementById("faq8").style.display="";
	document.getElementById("faqc8").style.display="none";
	document.getElementById("faq18").style.display="none";
}

function showfaq9(){
	document.getElementById("faq9").style.display="none";
	document.getElementById("faqc9").style.display="";
	document.getElementById("faq19").style.display="";
}
function hidefaq9(){
	document.getElementById("faq9").style.display="";
	document.getElementById("faqc9").style.display="none";
	document.getElementById("faq19").style.display="none";
}

function showfaq10(){
	document.getElementById("faq10").style.display="none";
	document.getElementById("faqc10").style.display="";
	document.getElementById("faq110").style.display="";
}
function hidefaq10(){
	document.getElementById("faq10").style.display="";
	document.getElementById("faqc10").style.display="none";
	document.getElementById("faq110").style.display="none";
}

function showfaq11(){
	document.getElementById("faq11-1").style.display="none";
	document.getElementById("faqc11-1").style.display="";
	document.getElementById("faq111").style.display="";
}
function hidefaq11(){
	document.getElementById("faq11-1").style.display="";
	document.getElementById("faqc11-1").style.display="none";
	document.getElementById("faq111").style.display="none";
}

function showfaq12(){
	document.getElementById("faq12-1").style.display="none";
	document.getElementById("faqc12").style.display="";
	document.getElementById("faq112").style.display="";
}
function hidefaq12(){
	document.getElementById("faq12-1").style.display="";
	document.getElementById("faqc12").style.display="none";
	document.getElementById("faq112").style.display="none";
}

function showfaq13(){
	document.getElementById("faq13-1").style.display="none";
	document.getElementById("faqc13").style.display="";
	document.getElementById("faq113").style.display="";
}
function hidefaq13(){
	document.getElementById("faq13-1").style.display="";
	document.getElementById("faqc13").style.display="none";
	document.getElementById("faq113").style.display="none";
}

function showfaq14(){
	document.getElementById("faq14-1").style.display="none";
	document.getElementById("faqc14").style.display="";
	document.getElementById("faq114").style.display="";
}
function hidefaq14(){
	document.getElementById("faq14-1").style.display="";
	document.getElementById("faqc14").style.display="none";
	document.getElementById("faq114").style.display="none";
}


function next(check){
	create();
	document.getElementById("loading").style.display="";
		xmlhttp.onreadystatechange = function(){
			if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
					document.getElementById("central").innerHTML = xmlhttp.responseText;
					document.getElementById("loading").style.display="none";
				}
			}
		var query = "central1";
		xmlhttp.open("GET", "include/part.php?_q="+query+"&check="+check, true);
		xmlhttp.send();

		return true;

	}

function previous(check){
	create();
	document.getElementById("loading").style.display="";
		xmlhttp.onreadystatechange = function(){
			if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
					document.getElementById("central").innerHTML = xmlhttp.responseText;
					document.getElementById("loading").style.display="none";
				}
			}
		var query = "central";
		xmlhttp.open("GET", "include/part.php?_q="+query+"&check="+check, true);
		xmlhttp.send();

		return true;

	}



function showmenu(){
	document.getElementById("mmenu").style.display="";
	document.getElementById("mmenuright").style.display="none";
	document.getElementById("mmenuright1").style.display="";

}

function hidemenu(){
	document.getElementById("mmenu").style.display="none";
	document.getElementById("mmenuright").style.display="";
	document.getElementById("mmenuright1").style.display="none";

}
