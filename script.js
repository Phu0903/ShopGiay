function getData(){
    $.ajax({
       
        url: "https://api.jsonbin.io/b/5f3021afdddf413f95c0adfd/8",
        method:"GET", 
        headers: {
            "secret-key": "$2b$10$2k6V.XXFVe5IwZWa0a0hUetELZWYB5/3x7Mu..X7SpefAmADdpesm"
        },
        success: function (res) {
           renderDate_deal_order(res);
        },
        error: function(err) {
            console.log(err);
        }
      
    });
  
}
function renderDate_deal_order(data)
{
    
    var html="";
    
    for(var i in data["deal_ordel"]){
        html+=
        '<div class="col-3 ">'+
        '<a href="#" class=" h-100">'+
          '<img class="img-fluid " src=' + data["deal_ordel"][i].img +
            ' "alt=" ">'+
        '</a>'+
      '</div>';
    }
    $(' #deal_order #deal_order_2 #deal_order_row' ).html(html);
}

//--------------------loadmore------------//
$(document).ready(function () {
        jQuery("#btn").click(function() {
            var loadmoreBtn=$('#btn');
            loadmoreBtn.text('Loading...');
            $.ajax({
                url: "https://api.jsonbin.io/b/5f393ddab88c04101cf5030c/2",
                method:"GET", 
                headers: {
              "secret-key": "$2b$10$2k6V.XXFVe5IwZWa0a0hUetELZWYB5/3x7Mu..X7SpefAmADdpesm"
                 },
                success: function (data) {
                    setTimeout(function(){
                        
                        var html="";
    
                        for(var i in data["deal_ordel"]){
                            html+=
                            '<div class="col-3 ">'+
                            '<a href="#" class=" h-100">'+
                              '<img class="img-fluid " src=' + data["deal_ordel"][i].img +
                                ' "alt=" ">'+
                            '</a>'+
                          '</div>';
                        }
                        $(' #deal_order #deal_order_2 #deal_order_row' ).append(html);
                        loadmoreBtn.text('Xem thêm');
                    }, 1000);
                },
                error: function (e) {
                    console.log(e.message);
                }
            });
            
          
        });
    });


//-----------------load detail--------------//
$(document).ready(function(){
    $.ajax({
        url: "https://api.jsonbin.io/b/5f396dd7b88c04101cf51a3a/11",
        method:"GET", 
        headers: {
         "secret-key": "$2b$10$2k6V.XXFVe5IwZWa0a0hUetELZWYB5/3x7Mu..X7SpefAmADdpesm"
         },
         success:function(data){
                render_data(data);
                
                render_data_slider(data);
                $('#suggestion').owlCarousel({
                    loop:true,
                    margin:10,
                    autoplay:true,
                    autoplayTimeout:3000,
                    nav:true,
                    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                    dots:false,
                    responsive:{
                        0:{
                            items:2
                        },
                        600:{
                            items:3
                        },
                        1000:{
                            items:5
                        }
                    }
                });
         },
         error: function(err) {
            console.log(err);
        }
    });
});
$(document).ready(function(){
    $.ajax({
        url: "https://api.jsonbin.io/b/5f396dd7b88c04101cf51a3a/11",
        method:"GET", 
        headers: {
         "secret-key": "$2b$10$2k6V.XXFVe5IwZWa0a0hUetELZWYB5/3x7Mu..X7SpefAmADdpesm"
         },
         success:function(data){
                render_data_slider_index(data);
                $('#owl-demo').owlCarousel({
                    loop:false,
              margin:10,
              autoplay:true,
              autoplayTimeout:3000,
              nav:true,
              navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
              dots:false,
              responsive:{
                  0:{
                      items:2
                  },
                  600:{
                      items:3
                  },
                  1000:{
                      items:5
                  }
              }
          });
          $('#owl-demo_2').owlCarousel({
            loop:false,
      margin:10,
      autoplay:true,
      autoplayTimeout:3000,
      nav:true,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      dots:false,
      responsive:{
          0:{
              items:2
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
  });
         },
         error: function(err) {
            console.log(err);
        }
    });
});

function render_data(data)
{   
setTimeout(function(){
    var html=" ";
    for ( var i in data["products_man"])
    {
       
        html+=
        '<div class="col-md-3 col-sm-6">'+
        '<div class="product-grid3">'+
            '<div class="product-image3">'+
                '<a href="./products_detail.html?id=' + data["products_man"][i].ID + '">'+
                    '<img class="pic-1" src='+ data["products_man"][i].img_1+'>'+
                    '<img class="pic-2" src='+ data["products_man"][i].img_2+'>'+
               '</a>'+
                '<ul class="social">'+
                    '<li><a href="#"><i class="fa fa-shopping-bag"></i></a></li>'+
                    '<li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>'+
                '</ul>'+
                '<span class="product-new-label">New</span>'+
            '</div>'+
            '<div class="product-content">'+
                '<h3 class="title"><a href="#">'+ data["products_man"][i].pro_name +'</a></h3>'+
                '<div class="price">'+
                data["products_man"][i].sale + '&nbsp'+
                    '<span>'+ data["products_man"][i].price + '</span>'+
                '</div>'+
            '</div>'+
        '</div>'+
    '</div>'
      
    }
    $(' #product-list #product-list-row #row_product_detail' ).html(html);
},0);
}
function render_data_slider_index(data){
    var html =' ';
    for( var i in data["products_man"]){
      html+=
      '<div class="product-grid3">'+
'<div class="product-image3">'+
'<a href="./products_detail.html?id=' + data["products_man"][i].ID + '">'+
      '<img class="pic-1" src="'+ data["products_man"][i].img_1+'">'+
      '<img class="pic-2" src="'+ data["products_man"][i].img_2+'">'+
  '</a>'+
  '<ul class="social">'+
      '<li><a href="#"><i class="fa fa-shopping-bag"></i></a></li>'+
      '<li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>'+
  '</ul>'+
  '<span class="product-new-label">New</span>'+
'</div>'+
'<div class="product-content">'+
  '<h6 class="title"><a href="#">[EG7597] YEEZY BOOST 700 ‘INERTIA’</a></h6>'+
  '<div class="price">'+
    '<span>'+data["products_man"][i].price + '&nbsp'+'</span>'+
    data["products_man"][i].sale +   
  '</div>'+
'</div>'+
'</div>';
       
    }
    $('#product_slider #owl-demo' ).html(html);
    $('#product_slider_2 #owl-demo_2' ).html(html);
    
};







//-----------------------------------------------//

$(document).ready(function(){
    var id= GetURLParameter('id');
    $.ajax({
        url: "https://api.jsonbin.io/b/"+id,
        method:"GET", 
        headers: {
         "secret-key": "$2b$10$2k6V.XXFVe5IwZWa0a0hUetELZWYB5/3x7Mu..X7SpefAmADdpesm"
         },
         success:function(data){  
                render_data_product(data);
            
                $(".ps-slider").owlCarousel({
                    loop: true,
                    margin: 10,
                    nav: true,
                    items: 3,
                    dots: false,
                    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                    smartSpeed: 1200,
                    autoHeight: false,
                    autoplay: true,
                });
                $('.product-thumbs-track .pt').on('click', function(){
                    $('.product-thumbs-track .pt').removeClass('active');
                    $(this).addClass('active');
                    var imgurl = $(this).data('imgbigurl');
                    var bigImg = $('.product-big-img').attr('src');//lấy giá trị hoặc thêm thuộc tính (attribute) cho thành phần.
                    if(imgurl != bigImg) {
                        $('.product-big-img').attr({src: imgurl});
                    }
                });
                $(".fw-size-choose .sc-item label, .pd-size-choose .sc-item label").on('click', function () {
                    $(".fw-size-choose .sc-item label, .pd-size-choose .sc-item label").removeClass('active2');
                    $(this).addClass('active2');
                    
                  });
               
                
                
         },
         error: function(err) {
            console.log(err);
        }
    });
});

function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++){
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }
}
