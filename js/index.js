$(document).ready(function () {

  //animating developer text
  var count = 0;
  developer_animation();
  function developer_animation() {
    setTimeout(function () {
      count++;
      if (count == 1) {
        title = "D";
      } else if (count == 2) {
        title = "De";
      } else if (count == 3) {
        title = "Dev";
      } else if (count == 4) {
        title = "Deve";
      } else if (count == 5) {
        title = "Devel";
      } else if (count == 6) {
        title = "Develo";
      } else if (count == 7) {
        title = "Develop";
      } else if (count == 8) {
        title = "Develope";
      } else if (count == 9) {
        title = "Developer";
      }

      if (count != 10) {
        $('.title').text(`I'm a ${title}`);
        developer_animation();
      } else if (count == 10) {
        count = 0;
        setTimeout(function () {
          designer_animation();
        }, 1000);
      }

    }, 100);
  }


  //animating desinger text
  function designer_animation() {
    setTimeout(function () {
      count++;
      if (count == 1) {
        title = "D";
      } else if (count == 2) {
        title = "De";
      } else if (count == 3) {
        title = "Des";
      } else if (count == 4) {
        title = "Desi";
      } else if (count == 5) {
        title = "Desig";
      } else if (count == 6) {
        title = "Design";
      } else if (count == 7) {
        title = "Designe";
      } else if (count == 8) {
        title = "Designer";
      }

      if (count != 10) {
        $('.title').text(`I'm a ${title}`);
        designer_animation();
      } else if (count == 10) {
        count = 0;
        setTimeout(function () {
          developer_animation();
        }, 1000);
      }

    }, 100);
  }

  //changing button color rgb(180, 149, 8)
  $('.about_me').mouseenter(function () {

    $(this).css('background-color', 'rgb(180, 149, 8)');
    $(this).css('border-color', 'rgb(180, 149, 8)');

  })
  $('.about_me').mouseleave(function () {

    $(this).css('background-color', 'rgb(255, 208, 0)');
    $(this).css('border-color', 'rgb(255, 208, 0)');

  })
  animate_names();
  function animate_names(){

    setTimeout(function(){
      $(".java_name").animate({ fontSize: "+=30px" }, 500);
      $(".java_name").animate({ letterSpacing: "+=15px" }, 1000);
      $(".adobe_name").animate({ fontSize: "+=30px" }, 500);
      $(".adobe_name").animate({ letterSpacing: "+=15px" }, 1000);
      $(".android_name").animate({ fontSize: "+=30px" }, 500);
      $(".android_name").animate({ letterSpacing: "+=15px" }, 1000);

      setTimeout(function () {
        $(".java_name").animate({ fontSize: "-=30px" }, 500);
        $(".java_name").animate({ letterSpacing: "-=15px" }, 1000);
        $(".adobe_name").animate({ fontSize: "-=30px" }, 500);
        $(".adobe_name").animate({ letterSpacing: "-=15px" }, 1000);
        $(".android_name").animate({ fontSize: "-=30px" }, 500);
        $(".android_name").animate({ letterSpacing: "-=15px" }, 1000);
        animate_names();
        }, 4000);
    }, 2000);
  }

  animate_words();
  function animate_words(){

    setTimeout(function(){
      $(".tenth_prof").animate({ fontSize: "+=27px" }, 500);
      $(".tenth_prof").animate({ letterSpacing: "+=15px" }, 1000);
      $(".twelfth_prof").animate({ fontSize: "+=27px" }, 500);
      $(".twelfth_prof").animate({ letterSpacing: "+=15px" }, 1000);
      $(".clg_prof").animate({ fontSize: "+=24px" }, 500);
      $(".clg_prof").animate({ letterSpacing: "+=6px" }, 1000);


      setTimeout(function () {
        $(".tenth_prof").animate({ fontSize: "-=27px" }, 500);
        $(".tenth_prof").animate({ letterSpacing: "-=15px" }, 1000);
        $(".twelfth_prof").animate({ fontSize: "-=27px" }, 500);
        $(".twelfth_prof").animate({ letterSpacing: "-=15px" }, 1000);
        $(".clg_prof").animate({ fontSize: "-=24px" }, 500);
        $(".clg_prof").animate({ letterSpacing: "-=6px" }, 1000);


        animate_words();
        }, 4000);
    }, 2000);
  }



  $('.project_name').text('Resource Sharing');
  $('.project_content').text('"Share your knowledge. It is a way to achieve immortality. The more we share the more we have."')
  //Changing project images while clicking next and prev
  var pro_count = 1;
  $('.next').click(function () {
    if (pro_count == 4) {
      pro_count = 0;
    }
    pro_count++;
    $('.actual_img').attr('src', '/img/pro_' + pro_count + '.jpg');
    if (pro_count == 1) {
      $('.project_name').text('Resource Sharing ');
      $('.project_content').text('"Share your knowledge. It is a way to achieve immortality. The more we share the more we have."')
    } else if (pro_count == 2) {
      $('.project_name').text('Info in Hands');
      $('.project_content').text('The Internet is the most effective instrument we have for globalization.All I know is that the Internet will transform the world.')
    } else if (pro_count == 3) {
      $('.project_name').text('I_O_T');
      $('.project_content').text('“If you think that the internet has changed your life, think again. The IoT is about to change it all over again!”');
    } else if (pro_count == 4) {
      $('.project_name').text('Creativity');
      $('.project_content').text('Inventions there should be a variety to create a better society.Great things can come from the mind')

    }

  });

  $('.prev').click(function () {
    if (pro_count == 1) {
      pro_count = 5;
    }
    pro_count--;
    $('.actual_img').attr('src', '/img/pro_' + pro_count + '.jpg');
    if (pro_count == 1) {
      $('.project_name').text('Resource Sharing');
      $('.project_content').text('"Share your knowledge. It is a way to achieve immortality. The more we share the more we have."')
    } else if (pro_count == 2) {
      $('.project_name').text('Info in Hands');
      $('.project_content').text('"The Internet is the most effective instrument we have for globalization.All I know is that the Internet will transform the world."')
    } else if (pro_count == 3) {
      $('.project_name').text('I_O_T');
      $('.project_content').text('“If you think that the internet has changed your life, think again. The IoT is about to change it all over again!”');
    } else if (pro_count == 4) {
      $('.project_name').text('Creativity');
      $('.project_content').text('Inventions there should be a variety to create a better society.Great things can come from the mind')

    }

  });




});