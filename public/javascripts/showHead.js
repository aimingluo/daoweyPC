/**
 * Created by Administrator on 2017/8/10 0010.
 */
function showHead() {
  $(window).scroll(function () {
    var st = $(this).scrollTop();
    if(st>70){
      $('#header').addClass('fix')
    }else{
      $('#header').removeClass()
    }
  })

}
