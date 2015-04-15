$(document).ready(function(){
	function center_this(){
		winh=$(window).height();
		winw=$(window).width();
		conh=$('#put_center').height();
		conw=$('#put_center').width();
		//$('#put_center').css('top',(winh/2)-(conh/2)-13).css('left',(winw/2)-(conw/2)+50);
	}
	center_this();
	$(window).resize(function(){
		center_this();
	});
});

/*var a="";
$('#txtquestion').keyup(function(){


function checks(){
	var b=$(this).value;
	//alert(b);
	if(a==b)
	{
		$('#output').html("Arre bhai jaldi poocho..");
	}
	else
	{	a=b;
		$('#output').html("Arre bhai jaldi poocho..");
	}
}
setTimeout(checks, 3000);

});*/