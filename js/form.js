//CONSTANTS
var PRODUCT_COMPLAINT = "Product complaint";

//reference to the section with enquiry details and to all input boxes in that section
var enquiryDetailsSection, inputBoxes;

function onEnquiryTypeChange(event){
	
	if (!enquiryDetailsSection){
		enquiryDetailsSection = document.getElementById("enquiry_details");
	}
	
	if (!inputBoxes){
		inputBoxes = enquiryDetailsSection.getElementsByTagName('input');
	}
	
	//get the new value of the enquiry type
	var newValue = '';
	if (event && event.currentTarget){
		newValue = event.currentTarget.value;
	}
	
	if (newValue == PRODUCT_COMPLAINT){
		//show the section with enquiry details
		enquiryDetailsSection.setAttribute('class', '');
		
		//add required attribute to all input boxes inside the section
		if (inputBoxes && inputBoxes.length > 0){
			for(var i = 0; i < inputBoxes.length; ++i){
				inputBoxes[i].setAttribute('required', 'required');
			}
		}
	}
	else{
		//hide the section with enquiry details
		enquiryDetailsSection.setAttribute('class', 'hidden');
		
		//remove required attributes from all input boxes inside the section
		if (inputBoxes && inputBoxes.length > 0){
			for(var i = 0; i < inputBoxes.length; ++i){
				inputBoxes[i].removeAttribute('required');
			}
		}
	}
}