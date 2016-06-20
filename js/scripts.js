	//disable statistics button
	$("#statistics").prop("disabled", true);
	
	//check if obj exists, get the last item number
    function getItemNumber() {
		var itemNumber = 0;
			for (var i = 0; i < localStorage.length; i++) {
				var item = localStorage.getItem("Answer_" + i);
				if (item) {
					itemNumber = i + 1;
				}
			}		      				

		return itemNumber;
	};
				  	
	$(document).ready(function() {
	
		$('#clear').click(function() {
			localStorage.clear();
		});
	
							
		//event		
		$('#submit').click(function() {
			
				
			//validate form, if all the questions are answered			
		if ($("input[name=question1]:checked").length > 0  &&
			$("input[name=question2]:checked").length > 0  &&
			$("input[name=question3]:checked").length > 0  &&
			$("input[name=question4]:checked").length > 0  &&
			$("input[name=question5]:checked").length > 0  &&
			$("input[name=question6]:checked").length > 0 ){    						 
			
			//create JSON object  			
				var answersObj = {
					'Q1': $("input[name=question1]:checked").val(),
					'Q2': $("input[name=question2]:checked").val(),
					'Q3': $("input[name=question3]:checked").val(),
					'Q4': $("input[name=question4]:checked").val(),
					'Q5': $("input[name=question5]:checked").val(),
					'Q6': $("input[name=question6]:checked").val()
				};
			
				itemNumber = getItemNumber();
				console.log(itemNumber);
								
				//store a stringified JSON object in local storage 

				try {
				  localStorage.setItem('Answer_' + itemNumber, JSON.stringify(answersObj)); //saves to the database, "key", "value"
				} catch (e) {
				  if (e == QUOTA_EXCEEDED_ERR) {
					alert('Quota exceeded!'); //data wasn't successfully saved due to quota exceed so throw an error
				  }
				}				
				
				
						
				//enable statistics button				
				if ((itemNumber) > 2) {
					$("#statistics").prop("disabled", false);
				} 	
			
				//clear the form 
				$("#survey").trigger('reset');
			}
			//alert if not all radiobuttons are checked
			else{ 
				alert ( "Please answer all questions!" );		
			};
		});		    
	});
 
	