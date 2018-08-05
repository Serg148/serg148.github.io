var $cocktail_headline_sendred = $('#cocktail_headline_sendred').hide();
var $about_the_brand_imgbox_headline= $('#about_the_brand_imgbox_headline').hide();
var $slide_img_box_id_1=$('#slide_img_box_id_1')
var $about_the_brand_imgbox_headline_1= $('#about_the_brand_imgbox_headline_1').hide();
var $about_the_brand_imgbox_headline_2= $('#about_the_brand_imgbox_headline_2').hide();
var $slide_img_box_id_1_1=$('#slide_img_box_id_1_1').hide();
var $slide_img_box_id_1_2=$('#slide_img_box_id_1_2').hide();		
google.load('webfont','1');
			
google.setOnLoadCallback(function() {
	WebFont.load({
		google		: {
			families	: ['Montserrat','Concert One']
		},
		fontactive	: function(fontFamily, fontDescription) {
			init();
		},	
		fontinactive	: function(fontFamily, fontDescription) {
			init();
		}
	});
});
	
var r_r = document.querySelector('.about_the_brand_imgbox').offsetWidth;
var r_r_r = (r_r * 0.5)+25;



function init() {
			
	$cocktail_headline_sendred.show().arctext({radius: 286, dir: 1});
	$about_the_brand_imgbox_headline.show().arctext({radius: r_r_r , dir: 1});
	$slide_img_box_id_1.show().arctext({radius: 325, dir: 1});
	$about_the_brand_imgbox_headline_1.show().arctext({radius: r_r_r , dir: 1});
	$about_the_brand_imgbox_headline_2.show().arctext({radius: r_r_r , dir: -1});
	$slide_img_box_id_1_1.show().arctext({radius: 180, dir: 1});
	$slide_img_box_id_1_2.show().arctext({radius: 180, dir: -1});
}	

