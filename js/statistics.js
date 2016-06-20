		
$(document).ready(function() {	

	var Q1Answers = [];
	var Q2Answers = [];
	var Q3Answers = [];
	var Q4Answers = [];
	var Q5Answers = [];
	var Q6Answers = [];
	
	
	//fill the arrays	 
	function createArraysWithAnswersAndQuestions() {
            for (var i = 0; i < localStorage.length; i++) {
                 var item = localStorage.getItem("Answer_" + i);
                 if (item) {
                     var object = JSON.parse(item);
					 
                     Q1Answers.push(object.Q1);
                     Q2Answers.push(object.Q2);
                     Q3Answers.push(object.Q3);
                     Q4Answers.push(object.Q4);
                     Q5Answers.push(object.Q5);
                     Q6Answers.push(object.Q6);
                 }
            }	 			 
    }	 
	
				
	//calculate yes, no, may be
	   function calculateTheAnswers(array) {
             var obj = {};
             for (var i = 0; i< array.length; i++) {
                 obj[array[i]] = (obj[array[i]] || 0) + 1;
             }
             return obj;
		}	

			//calculate how many yes, no or may be are in each array of answers for the particular question
				createArraysWithAnswersAndQuestions();
				 var Q1 = calculateTheAnswers(Q1Answers);
                 var Q2 = calculateTheAnswers(Q2Answers);
                 var Q3 = calculateTheAnswers(Q3Answers);
                 var Q4 = calculateTheAnswers(Q4Answers);
                 var Q5 = calculateTheAnswers(Q5Answers);
                 var Q6 = calculateTheAnswers(Q6Answers);
				 
				 console.log (Q6);
				 /* var no=Object.values(Q1)[0];
				 
				 console.log (no); */
	 
				
		google.charts.load('current', {'packages':['corechart']});
		google.charts.setOnLoadCallback(drawChart);
		function drawChart() {
		
		//Question1 results pie chart
		var data1 = google.visualization.arrayToDataTable([
          ['option', 'count'],
          ['no',    Q1.no ],
          ['may be', Q1.yes],
          ['yes',  Q1.maybe]
        ]);
		
		var options1 = {
          title: 'Are you satisfied with Avain Technologies customer service?'
        };

        var chart1 = new google.visualization.PieChart(document.getElementById('piechart1'));

        chart1.draw(data1, options1);
		
		//Question2 results pie chart
		var data2 = google.visualization.arrayToDataTable([
          ['option', 'count'],
          ['no',    Q2.no ],
          ['may be', Q2.yes],
          ['yes',  Q2.maybe]
        ]);
		
		var options2 = {
          title: 'Was our product worth the purchase price?'
        };

        var chart2 = new google.visualization.PieChart(document.getElementById('piechart2'));

        chart2.draw(data2, options2);
		
		//Question3 results pie chart
		var data3 = google.visualization.arrayToDataTable([
          ['option', 'count'],
          ['no',    Q3.no ],
          ['may be', Q3.yes],
          ['yes',  Q3.maybe]
        ]);
		
		var options3 = {
          title: 'Are you satisfied with our product?'
        };

        var chart3 = new google.visualization.PieChart(document.getElementById('piechart3'));

        chart3.draw(data3, options3);
		
		//Question4 results pie chart
		var data4 = google.visualization.arrayToDataTable([
          ['option', 'count'],
          ['no',    Q4.no ],
          ['may be', Q4.yes],
          ['yes',  Q4.maybe]
        ]);
		
		var options4 = {
          title: 'Is our product easy to use?'
        };

        var chart4 = new google.visualization.PieChart(document.getElementById('piechart4'));

        chart4.draw(data4, options4);
		
		//Question5 results pie chart
		var data5 = google.visualization.arrayToDataTable([
          ['option', 'count'],
          ['no',    Q5.no ],
          ['may be', Q5.yes],
          ['yes',  Q5.maybe]
        ]);
		
		var options5 = {
          title: 'Would you purchase our product again?'
        };

        var chart5 = new google.visualization.PieChart(document.getElementById('piechart5'));

        chart5.draw(data5, options5);
		
		//Question6 results pie chart
		var data6 = google.visualization.arrayToDataTable([
          ['option', 'count'],
          ['no',    Q6.no ],
          ['may be', Q6.yes],
          ['yes',  Q6.maybe]
        ]);
		
		var options6 = {
          title: 'Would you recommend our product to others?'
        };

        var chart6 = new google.visualization.PieChart(document.getElementById('piechart6'));

        chart6.draw(data6, options6);
      }


		 
});	  