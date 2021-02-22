const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector(".form-nav");
menuBtn.onclick = ()=>{
  items.classList.add("active");
  menuBtn.classList.add("hide");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}
cancelBtn.onclick = ()=>{
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  searchBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  form.classList.remove("active");
  cancelBtn.style.color = "#ff3d00";
}
searchBtn.onclick = ()=>{
  form.classList.add("active");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}
$(window).on('load', function(event) {
	$('body').removeClass('preloading');
	// $('.load').delay(1000).fadeOut('fast');
	$('.loader').delay(100).fadeOut('fast');
});

//-----Login-------//
$(function () {
  $('#login').click(function (e) { 
    //xử lý class
    $('.noidung').addClass('noidunghienra');
    //xử lý class cho nền
    console.log("thanh");
    $('.lot').addClass('lothienra');
      
  });
  $('.lot').click(function (e) { 
      $('.noidung').removeClass('noidunghienra');
      $('.lot').removeClass('lothienra');
      
  });

});
$(function () {
  $('#login-mb-1').click(function (e) { 
    //xử lý class
    $('.noidung').addClass('noidunghienra');
    //xử lý class cho nền
    console.log("thanh");
    $('.lot').addClass('lothienra');
      
  });
  $('.lot').click(function (e) { 
      $('.noidung').removeClass('noidunghienra');
      $('.lot').removeClass('lothienra');
      
  });

});



$(window).scroll(function(e){
      var vitri=$('body,html').scrollTop()
      if(vitri>=100)
      {
        
        $('.header_container').addClass('bienhinh');
      }
      else{
        $('.header_container').removeClass('bienhinh')
      }
    })
    //xử lý khoi
    $('.khoi').click(function(e){
      $(this).toggleClass('xanh');
       $(this).next().slideToggle(500);
    });
    $('.ndkhoi').slideUp();
    
    
    

$(".fw-size-choose .sc-item label, .pd-size-choose .sc-item label").on('click', function () {
  $(".fw-size-choose .sc-item label, .pd-size-choose .sc-item label").removeClass('active2');
  $(this).addClass('active2');
  
});
var rangeSlider = $(".price-range"),
		minamount = $("#minamount"),
		maxamount = $("#maxamount"),
		minPrice = rangeSlider.data('min'),
		maxPrice = rangeSlider.data('max');
	    rangeSlider.slider({
		range: true,
		min: minPrice,
        max: maxPrice,
		values: [minPrice, maxPrice],
		slide: function (event, ui) {
			minamount.val(ui.values[0]+'VND');
			maxamount.val(ui.values[1]+'VND');
		}
	});
	minamount.val(rangeSlider.slider("values", 0)+'VND');
  maxamount.val(rangeSlider.slider("values", 1)+'VND');
// function button(){
// var proQty = $('.pro-qty');
// 	proQty.prepend('<span class="dec qtybtn">-</span>');
// 	proQty.append('<span class="inc qtybtn">+</span>');
// 	proQty.on('click', '.qtybtn', function () {
// 		var $button = $(this);
// 		var oldValue = $button.parent().find('input').val();
// 		if ($button.hasClass('inc')) {
// 			var newVal = parseFloat(oldValue) + 1;
// 		} else {
// 			// Don't allow decrementing below zero
// 			if (oldValue > 0) {
// 				var newVal = parseFloat(oldValue) - 1;
// 			} else {
// 				newVal = 0;
// 			}
// 		}
// 		$button.parent().find('input').val(newVal);
//   });
// }


