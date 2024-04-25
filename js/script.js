$(document).ready(function() {

    $('#menu').click(function() {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function() {

        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if ($(window).scrollTop() > 0) {
            $('.top').show();
        } else {
            $('.top').hide();
        }

    });

    // smooth scrolling 

    $('a[href*="#"]').on('click', function(e) {

        e.preventDefault();

        $('html, body').animate({

                scrollTop: $($(this).attr('href')).offset().top,

            },
            500,
            'linear'
        );

    });

});
document.getElementById("downloadBtn").addEventListener("click", function() {
    //  the path to your PDF file
    var pdfFilePath = "https://drive.google.com/file/d/1jp7whIOunC6EPqln11uPJvOLCMzfzu35/view?usp=drive_link";
    
    
    // Create an anchor element
    var anchorElement = document.createElement('a');
    
    // Set the href attribute to the PDF file path
    anchorElement.href = pdfFilePath;

    anchorElement.target = '_blank';
    
    // Set the download attribute to force download
    anchorElement.download = pdfFilePath;
    
    // Trigger a click event on the anchor element
    anchorElement.click();
    
  });
