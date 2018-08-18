//btn_top
 window.onscroll = function() {
   var scrollElem = document.getElementById("scrollToTop");
   if (document.body.scrollTop > document.documentElement.clientHeight) {
      scrollElem.style.display = "1";
   } else {
       scrollElem.style.opacity = "0";
   }
}
var timeOut;
function goUp() {
   var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
   if(top > 0) {
      window.scrollBy(0,-100);
      timeOut = setTimeout('goUp()',20);
   } else clearTimeout(timeOut);
}

// Initialize and add the map
function initMap() {
  var uluru = {lat: 55.8637218, lng: -4.2505568,};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 12.37, center: uluru});
  var marker = new google.maps.Marker({position: uluru, map: map});
}


