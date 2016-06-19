
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
		
		$('#statistics').prop("disabled",true);
		itemNumber = getItemNumber();
		if ((itemNumber) > 2) {
                $("#statistics").prop("disabled", false);
            } 	
		 		
				
		//event		
		$('#submit').click(function(e) {
			e.preventDefault();
			
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
								
				//store a stringified JSON object in local storage 				
				localStorage.setItem('Answer_' + itemNumber, JSON.stringify(answersObj));
			
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
 
	
