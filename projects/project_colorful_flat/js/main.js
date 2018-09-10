var lastScrollTop = 0;
var scrollElem = document.getElementById("scrollToTop")
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
       scrollElem.style.opacity = "1";
   } else {
       scrollElem.style.opacity = "0";
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);
 
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