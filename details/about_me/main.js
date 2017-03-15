/**
 * Created by husha_000 on 2017/3/6.
 */
(function($){
    var even = $('section table tr td:even');
    var odd = $('section table tr td:odd');
    var whole = $('section table');
    var demo = $('section aside:eq(1) div:eq(0)');
    $(even).css('color','rgba(10, 10, 10, 0.57)');
    $(odd).css('color','rgba(0, 100, 255, 0.709804)');
    //字体风格
    $('section aside:eq(0) ol:eq(0) li').click(function(){
        var index = $(this).index();
        var font_family = ['HYGuoQiangXingShuW','hyxuejunF','sans-serif'];
        $('body').css('font-family',font_family[index-3]);
    });
    //模版颜色
    $('section aside:eq(0) ol:eq(1) li.demo_color').click(function(){
        var index = $(this).index();
        var demo_style = ['panel panel-default','panel panel-info','panel panel-primary','panel panel-success','panel panel-warning',''];
        $(demo).removeClass();
        $(demo).addClass(demo_style[index-2]);
    });
    //字体大小
    $('section aside:eq(2) ol:eq(0) li').click(function(){
        var index = $(this).index();
        //alert(index);
        var font_size = ['26px','21px','14px'];
        $(whole).css('font-size',font_size[index-3]);
    });
    //字体颜色
    $('section aside:eq(2) ol:eq(1) li').click(function(){
        var index = $(this).index();
        //alert(index);
        var font_color = [['blue','green'],['rgba(10, 10, 10, 0.57)','rgba(0, 100, 255, 0.709804)'],['orange','red']];
        $(even).css('color',font_color[index-3][0]);
        $(odd).css('color',font_color[index-3][1]);
    });
    //重置链接
    $('#reload').click(function(){
        location.reload();
    });
})(jQuery);