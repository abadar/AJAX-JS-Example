var xhttp;
	
/**
 * Function to make an ajax call.
 * @PARAM request type, GET or POST
 * @PARAM request url
 * @PARAM function to call.
 * @Return XMLHttpRequest
*/
function ajaxCall(requestType, url, callbackFunc) {
    //create new XMLHttpRequest 
	xhttp = new XMLHttpRequest();
	
	//attach an event to handle state changes
    xhttp.onreadystatechange = function() {
		
		//check current state of request
		switch(xhttp.readyState) {
			case 0:
				//Request not initialized
				break;
			case 1:
				//Server connection established
				break;
			case 2:
				//Request received
				break;
			case 3:
				//Please wait... Processing request
				break;
			case 4:
				//request finished and response is ready.
				handleResponse(callbackFunc);
				break;
		}
    };
	xhttp.open(requestType, url, true);
	xhttp.send();
}

/**
 * Function to check response and call respective method.
*/
function handleResponse(callbackFunc) {
	//check response status
    if(xhttp.status == 200) {
		callbackFunc(xhttp);
	} else if(xhttp.status == 404) {
		//File not found
	}
}