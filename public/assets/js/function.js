try	{
	
	$("input[type=number]").keydown(function (e) {
       // Allow: backspace, delete, tab, escape, enter and .
       if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
           // Allow: Ctrl/cmd+A
           (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
           // Allow: Ctrl/cmd+C
           (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
           // Allow: Ctrl/cmd+X
           (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
           // Allow: home, end, left, right
           (e.keyCode >= 35 && e.keyCode <= 39)) {
           // let it happen, don't do anything
           return;
       }
       // Ensure that it is a number and stop the keypress
       if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
           e.preventDefault();
       }
   });
	
}

catch(e)
	{
		console.log(e);
		
	}
try	
	
	{
		 
		
		var inputTypeNumbers = document.querySelectorAll("input[type=number]");
for (var a = 0; a < inputTypeNumbers.length; a++) {
    inputTypeNumbers[a].onwheel = function (event) {
        event.target.blur();
    };
}
		
		 var input = document.querySelector("#phone");
  
	window.intlTelInput(input, { 
	  initialcountry: "gb"
  });
		
	}
catch (e)
	{
		console.log(e)
	}

/*modal click change start here*/

$(function () {

	$('#cont').on('click', function () {
		$('.modal-1').modal('hide');
		$('.modal-2').modal('show');
	});
	$('#count-2').on('click', function () {
		$('.modal-2').modal('hide');
		$('.modal-3').modal('show');
	});
	
	$('#user-blocked').on('click', function () {
		$('.block-user').modal('hide');
		$('.block-user-conf').modal('show');
	});  
	$('#user-unblocked').on('click', function () {
		$('.unblock-user').modal('hide');
		$('.unblock-user-conf').modal('show');
	});  
	
});


/*modal click change end here*/




 /*date picker start here*/

 //
 //$('#timepicker-1').timepicker({
 //	uiLibrary: 'bootstrap4'
 //});
 //$('#timepicker-2').timepicker({
 //	uiLibrary: 'bootstrap4'
 //});

 $(document).ready(function () {
 	$(".dataTables_filter input").attr("placeholder", "Search");
 });

 $('#datepicker-1').datepicker({
 	uiLibrary: 'bootstrap4'
 });
 $('#datepicker-2').datepicker({
 	uiLibrary: 'bootstrap4'
 });
 $('#datepicker-3').datepicker({
 	uiLibrary: 'bootstrap4'
 });
 $('#datepicker-4').datepicker({
 	uiLibrary: 'bootstrap4'
 });
 /*


  $('#datepicker-5').datepicker({
             uiLibrary: 'bootstrap4'
 });

  $('#datepicker-6').datepicker({
             uiLibrary: 'bootstrap4'
 });

  $('#datepicker-7').datepicker({
             uiLibrary: 'bootstrap4'
 });
 $('#datepicker-8').datepicker({
             uiLibrary: 'bootstrap4'
 });
 $('#datepicker-9').datepicker({
             uiLibrary: 'bootstrap4'
 });
 $('#datepicker-10').datepicker({
             uiLibrary: 'bootstrap4'
 });

  $('#datepicker-11').datepicker({
             uiLibrary: 'bootstrap4'
 });

  $('#datepicker-12').datepicker({
             uiLibrary: 'bootstrap4'
 });
 $('#datepicker-13').datepicker({
             uiLibrary: 'bootstrap4'
 });

  $('#datepicker-14').datepicker({
             uiLibrary: 'bootstrap4'
 });

  $('#datepicker-15').datepicker({
             uiLibrary: 'bootstrap4'
 });

  $('#datepicker-16').datepicker({
             uiLibrary: 'bootstrap4'
 });

  $('#datepicker-17').datepicker({
             uiLibrary: 'bootstrap4'
 }); 
 $('#datepicker-18').datepicker({
             uiLibrary: 'bootstrap4'
 });

  $('#datepicker-19').datepicker({
             uiLibrary: 'bootstrap4'
 });*/
 /*date picker end here*/
