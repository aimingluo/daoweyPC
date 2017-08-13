/**
 * Created by Administrator on 2017/8/9 0009.
 */
// $(function(){
  /*列表显示*/
 /* $('.banner-nav ul').mouseenter(function (event) {
    var aDom = event.target;
    var $li = $(aDom).parent()
    var $children = $(this).children()
    $children.each(function () {
      $(this).attr('class', 'navname')
    })
    $li.addClass('navnamebg')
    $('.banner-nav ul li ul').each(function () {
      $(this).css('display','none')
    })
    var $ul = $($li.children('ul')[0])
    $ul.css('display','block')

    $('.banner-nav ul li img').each(function () {
      $(this).attr('src','/images/index/right.png')
      $(this).removeClass()
    })
    $li.children('img').attr('src','/images/index/icon1.png')
    $li.children('img').addClass('act')
    event.stopPropagation()
  }).mouseleave(function () {
    
  })*/
  function showTab(){
    // 左侧菜单栏
    let $ul = $(".banner-nav ul"),$lis = $ul.find("li")
    $lis.hover(function(){
      $(this).find('img').addClass('act').attr("src",'/images/index/icon1.png');
      // 获取索引 li的高度 42
      $width = -$(this).index()*$(this).height()
      $(this).find("ul").css('display','block').css('top',$width+'px');
    },function(){
      if($(this).find('img').attr("src",'/images/index/icon1.png')){
        $(this).find('img').attr("src",'/images/index/right.png').removeClass('act')
      }
      $(this).find("ul").css('display','none');
    });
  }


  /*轮播图*/
    $('.flexslider').flexslider({
      directionNav: true,
      pauseOnAction: false
    });


// })



