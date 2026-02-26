function getFormvalue(event) {
	event.preventDefault();
    let firstname=document.getElementsByName("fname")[0].value.trim();
	let lastname=document.getElementsByName("lname")[0].value.trim();
	alert(firstname+" "+lastname);
}
