/* on document created */
//initialize select2
$(document).ready(function() {
    //hide preloader
    $(".preloader").addClass("hide");
    // initialize select 2
    $('.select2').select2({
        placeholder: "Select options",
        allowClear: true
    });
});

/* toggle sidebar admin */
function toggle_sidebar_admin(){
    if($("#sidebarAdmin").hasClass("small")){
        $("#sidebarAdmin").removeClass("small");
    }else{
        $("#sidebarAdmin").addClass("small");
    }
}

//toggle notification
// for admin navbar notification
// need element class .notification-popup 
function toggle_notification()
{
    if($(".notification-popup").hasClass("hide")) {
        $(".notification-popup").removeClass("hide");  
        // unexpand profile popup
        $(".profile").removeClass("focus"); 
        $(".profile-popup").addClass("hide");
    }else{
        $(".notification-popup").addClass("hide");
        // unexpand profile popup
        $(".profile").removeClass("focus"); 
        $(".profile-popup").addClass("hide");
    }

    // hide notification bubble
    $(".buble-notification").hide();
}

//popup profile
// need element class .profile-popup 
function popup_profile()
{
    if($(".profile-popup").hasClass("hide"))
    {
        $(".profile-popup").removeClass("hide");
        $(".profile").addClass("focus");
        $(".notification-popup").addClass("hide"); // hide notification
    }else{
        $(".profile-popup").addClass("hide");
        $(".profile").removeClass("focus");
        $(".notification-popup").addClass("hide"); // hide notification
    }
}

//file upload perview
// get file extension
function extension(filename){
    return filename.split('.').pop();
}

// file  preview
// parameter (input listiner,maximal file size in bytes)
function preview(input,maxsize = 2000000){
    $(".file-upload .text").html("Loading..");
    //check on file
    if (input.files && input.files[0]) {
      var reader = new FileReader(); // using filereader api
      var filename = input.files[0].name; // get filename
      var filesize = input.files[0].size; // get file size
    //   validate filesize
    if(filesize > maxsize) 
    {
        $(".file-upload .text").html("Image size is too large <br> Click here to upload again");
        return false;
    }
      reader.onload = function(e) {
          // check if file is video
          if(extension(filename) == "mp4"){
              $('.videoPreview').removeClass("d-none");
              $('.imagePreview').addClass("d-none");
              $('.videoPreview').attr('src', e.target.result);
            }  
            // check if file is image
        else if(extension(filename) == "png" || extension(filename) == "jpg" || extension(filename) == "jpeg"){
            $('.videoPreview').addClass("d-none");
            $('.imagePreview').removeClass("d-none");
            $('.imagePreview').attr('src', e.target.result);
        }
        // set file name
        $(".file-upload .text").html(filename + "<br>" + "Click to change");
    }
    reader.readAsDataURL(input.files[0]); // convert to base64 string
    }
}

// confirm delete
$(".need-confirm-delete").click(function(){
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Redirect to page "+$(this).attr('href') , {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
})

// confirm delete
$(".need-confirm-logout").click(function(){
    swal({
        title: "Are you sure?",
        text: "You will be logged out!",
        // icon: "warning",
        buttons: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Redirect to page "+$(this).attr('href') , {
            icon: "success",
          });
        } else {
          swal("Welcome back again!");
        }
      });
})

// show modal
$(".toggle-modal").click(function(){
    $(".popup#"+$(this).data("modal")).addClass("show");
})

// close modal
$(".popup #close-button").click(function(){
    $(".popup").removeClass("show");
})
// accept modal
$(".popup #accept-button").click(function(){
    $(".popup").removeClass("show");
    swal("accepted")
})