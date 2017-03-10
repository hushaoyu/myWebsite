/**
 * Created by husha_000 on 2017/3/7.
 */
(function ($) {
    //全局变量

    //重置按钮
    $('#reset').click(function () {
        location.reload();
    });

    var number_text = $('input[type=number]');
    $(number_text).attr('placeholder', '请输入角度值');

    //整体绕 x 和 y 轴、z轴旋转角度调节器
    var number_deg = $('div.container div#control div:eq(0) input[type=number]');
    //demo整体
    var rotate_whole = $('div.container div.stage');

    var whole = $('div.container div.camera');
    //设置视点距离调节器
    var distance = $('div.container div#control div:eq(0) input[type=range]');

    //六个面
    var detail_surface = $('div.container div.stage div');
    //各面颜色调节器
    var surface_color = $('div.container div#control div.left_aside_c input[type=color]');
    //alert(surface_color[0].value);


    //各面透明度调节器
    var opacity_surface = $('div.container div#control div.left_aside_r input[type=range]');
    //alert(opacity_surface[0].value);

    //首页div
    $('div#home').hover(function () {
        $('div#home h2').css('opacity','1');
        $(this).addClass('img-circle');
    },
    function(){
        $('div#home h2').css('opacity','0');
        $(this).removeClass('img-circle');
        //console.log('hello');
    });

    //属性调节改动后触发，更新图形
    $('div#control').change(function () {
        //绕 x 和 y 轴、z轴旋转
        $(rotate_whole).css('transform', 'rotateX(' + number_deg[0].value + 'deg)' + 'rotateY(' + number_deg[1].value + 'deg)' + 'rotateZ(' + number_deg[2].value + 'deg)');
        //console.log(number_deg[0].value);

        //设置视点距离
        $(whole).css('perspective', distance[0].value + 'px');
        //console.log(distance[0].value);

        //设置透明度
        //$(detail_surface).get(array[0]).attr('opacity', opacity_surface.value);
        for (i = 0; i < 6; i++) {
            $(detail_surface[i]).css('opacity', opacity_surface[i].value / 100);
            //alert(opacity_surface[i].value);
            $(detail_surface[i]).css('background-color', surface_color[i].value);
        }
    });
})(jQuery);