function getFormvalue(event) {
	event.preventDefault();
    let firstname=document.getElementsbyName("fname")[0].value.trim();
	let lastname=document.getElementsbyName("lname")[0].value.trim();
	alert(firstname+" "+lastname);
}
