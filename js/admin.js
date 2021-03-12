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