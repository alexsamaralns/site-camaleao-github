// This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: 'am_s_0EBbGw',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    done = true;
  }else {
      done = false;
  }
}
function stopVideo() {
  player.stopVideo();
}

/*$(window).on('scroll', function() {
    "use strict";
    var b = $(window).scrollTop();
    if( b > 72 && done == true){
        $("#player").addClass("video-fixed");
        $("#close-video").addClass("close-video");
        $("#close-video").removeClass("hide-close-btn");
    }else if(b == 0) {
        $("#close-video").addClass("hide-close-btn");
        $("#player").removeClass("video-fixed");
        $("#close-video").removeClass("close-video");
    }
});*/

window.onscroll = function() {
    "use strict";
    var b = $(window).scrollTop();
    if( b > 72 && done == true){
        $("#player").addClass("video-fixed");
        $("#close-video").addClass("close-video");
        $("#close-video").removeClass("hide-close-btn");
    }else if(b == 0) {
        $("#close-video").addClass("hide-close-btn");
        $("#player").removeClass("video-fixed");
        $("#close-video").removeClass("close-video");
    }
};

function closeVideo() {
    this.stopVideo();
    done = false;
    $("#player").removeClass("video-fixed");
    $("#close-video").removeClass("close-video");
}
