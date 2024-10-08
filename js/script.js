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


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>It's_Gyanendra</title>
    <!-- font awesome link -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <!-- custom css file link -->
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>

</head>

<body>
    <!-- header section start -->
    <header>
        <div class="user">
            <img src="image/me.jpg" alt="">
            <h3 class="name">Gyanendra shahi</h3>
            <p class="post">Digital Explorer</p>
        </div>
        <nav class="navbar">
            <ul>
                <li>
                    <a href="#home">home</a>
                </li>
                <li>
                    <a href="#about">about</a>
                </li>
                <li>
                    <a href="#education">education</a>
                </li>
                <li>
                    <a href="#portfilo">portfolio</a>
                </li>
                <li>
                    <a href="#contact">contact</a>
                </li>
            </ul>
        </nav>

    </header>
    <!-- header section end -->
    <!-- div for menu at far but with meidia queary is made display when scereen is small -->
    <div id="menu" class="fas fa-bars"></div>



    <!-- home section starts  -->
    <section class="home" id="home">
        <h3>HI THERE !</h3>
        <h1>I'M <span>Gyanendra shahi</span></h1>
        <p>
         I'm a Computer Science Engineering graduate from Uttarakhand Technical University, specializing in web development. With a passion for technology and a commitment to excellence, I create dynamic, user-focused web applications. 
            
            I'm always eager to learn, innovate, and embrace new challenges in the ever-evolving tech world.
        </p>
        <a href="#about"> <button class="btn">about me <i class="fas fa-user"></i></button></a>

    </section>
    <!-- home section ends  -->

    <!-- about section start -->
    <section class="about" id="about">
        <h1 class="heading"><span> About </span> me </h1>
        <div class="row">
            <div class="info">

                <h3><span>name :</span>Gyanendra Shahi</h3>

                <h3><span>age :</span> 24 </h3>

                <h3><span>qulificaton :</span> B.Tech CSE </h3>
                <h3><span> birthplace :</span> Burtibang-1 Baglung,Nepal </h3>

                <!-- <h3><span>post :</span> Front end developer</h3> -->

                <h3><span>language :</span> English, Hindi, Nepali </h3>
                <a href="#"> <button class="btn" id="downloadBtn">download CV <i class="fas fa-download"></i></button></a>


            </div>
            <div class="counter">
                <div class="box">
                    <span>1+</span>
                    <h3>years of expericane</h3>
                </div>
                <div class="box">
                    <span>5+</span>
                    <h3>project completed</h3>
                </div>
                <!-- <div class="box">
                    <span>430+</span>
                    <h3> happy clients </h3>
                </div> -->
                <div class="box">
                    <span>10+</span>
                    <h3>programmer patner </h3>
                </div>
                <!-- <div class="box">
                    <span>1+</span>
                    <h3>work in field of web technoloy</h3>
                </div> -->

               
            </div>
        </div>
    </section>
    <!-- about section ends -->


    <!-- education section starts -->
    <section class="education" id="education">
        <h1 class="heading">my <span>education</span></h1>
        <div class="box-container">
            <div class="box">
                <i class="fas fa-graduation-cap"></i>
                <span>2017</span>
                <h3>Secondary Education (Grade-10)</h3>
                <p>I had successfully passed the Secondary Education Examination (SEE), Grade-10 in the year 2017 AD(2073 BS) from Nation Examination Borad (Nepal) with Grade Point Average (GPA) 3.35 .</p>

            </div>
            <div class="box">
                <i class="fas fa-graduation-cap"></i>
                <span>2017-19</span>
                <h3>High school(Grade XI & XII)</h3>
                <p>
                    I had duly commpleted the School Leaving Certificate Examination (Grade XI &XII) with science stream in the year 2019 AD(2076 BS) from National Examinations Board with Cumulative Grade Point Average (CGPA) 3.14.
                </p>

            </div>
            <div class="box">
                <i class="fas fa-graduation-cap"></i>
                <span>2019-23</span>
                <h3>Bachelor of Technology</h3>
                <p>
                    I completed my BTech in Computer Science Engineering from Uttarakhand Technical University, gaining extensive knowledge in both software and hardware components.
                </p>

            </div>
            <div class="box">
                <i class="fas fa-graduation-cap"></i>
               <span>Ongoing Learning</span>
                <h3>Computer Science Studies</h3>
                <p>I am continuously expanding my knowledge in various areas of computer science. From programming languages to algorithms, databases to networking, I am actively engaged in learning and exploring new concepts and technologies. With a solid foundation in computer science, I am eager to apply my skills and contribute to innovative projects.
                </p>
            </div>
        </div>
    </section>
    <!-- education section ends -->


    <!-- portfolio section starts -->
    <section class="portfilo" id="portfilo">
        <h1 class="heading">my <span>portfolio</span> </h1>
        <div class="box-container">
            <div class="box">
                <img src="image/img.png" alt=""> </div>
        </div>
        <!-- <div class="box">
            <img src="image/img2.jpg" alt=""> </div>
        </div> -->
        <div class="box">
            <img src="image/img3.jpg" alt=""> </div>
        </div>
         <div class="box">
            <img src="image/img4.jpg" alt=""> </div>
        </div>
        <div class="box">
            <img src="image/img5.jpg" alt=""> </div>
        </div>
        <div class="box">
            <img src="image/img6.jpg" alt=""> </div>
        </div> 
    </section>
    <!-- portfolio section ends -->

    <!-- contact section starts  -->
    <section class="contact" id="contact">
        <h1 class="heading"><span> contact </span> me </h1>
        <div class="row">
            <div class="content">
                <h3 class="title">contact info</h3>

                <div class="info">
                    <h3><i class="fas fa-envelope"></i>gyanendrashahi441@gmail.com</h3>
                    <h3><i class="fas fa-phone"></i>+977 9702166487</h3>
                    <h3><i class="fas fa-phone"></i>+91 7417592358</h3>
                  
                    <h3><i class="fas fa-map-marker-alt"></i>Butwal,Nepal</h3>

                </div>
            </div>
            <form id="contactForm" action="">
                <input type="text" placeholder="name" class="box">
                <input type="email" placeholder="email" class="box">
                <input type="text" placeholder="project" class="box">
                <textarea name="" id="" cols="30" rows="10" class="box message" placeholder="message">  
                </textarea>
                <button type="submit" class="btn">send <i class="fas fa-paper-plane"></i></button>
            </form>
        </div>
    </section>
    <!-- contact section ends -->








    <!-- jquery cnd link -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <!-- custom js fils link  -->
    <script src="js/script.js"></script>





   

    

</body>

</html>
