function billingFunction(){
	var f1=document.getElementById('shippingName');
	var f2=document.getElementById('shippingZip');
	var f3=document.getElementById('billingName');
	var f4=document.getElementById('billingZip');
	document.getElementById('same');
	if(document.getElementById('same').checked){
		f3.value=f1.value;
		f4.value=f2.value;
	}
	else{
		f3.value="";
		f4.value="";
		f3.removeAttribute('required');
		f4.removeAttribute('required');
}
 }