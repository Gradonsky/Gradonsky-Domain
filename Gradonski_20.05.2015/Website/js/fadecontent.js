$(document).ready(function () {
    
    //initial
    $('#container').load('content/index.php');
    
    
    $('ul#navi li a').click(function () {
        $('ul#navi li a').removeClass('active');
        $(this).addClass('active');

        var page = $(this).attr('href');

            $('#container').hide().fadeIn(300); 
        

        $('#container').load('content/'+ page +'.php');
  
        return false;

    });
});

//        $('#rick').fadeOut(500, function () {
 //           $('#home').removeClass('active');
   //         $('#texting').fadeIn(500);
     //     $('#bookings').addClass('active');
       // });
       
