/**
 * Created by husha_000 on 2017/2/10.
 */
var dom = document.getElementById('clock');
var ctx = dom.getContext('2d');
var width = dom.width;
var height = dom.height;
var r = width / 2;

function drawBackground() {
    ctx.save();
    ctx.translate(r, r);    //移动画布原始点到中心

    ctx.beginPath();
    ctx.lineWidth = width / 20;
    ctx.arc(0, 0, r - r / 20, 0, 2 * Math.PI, false);
    ctx.stroke();

    ctx.font = "18px Arial";    //数字的大小
    ctx.textAlign = 'center';   //数字的对其方式
    ctx.textBaseline = 'middle';
    var hourNumbers = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];
    hourNumbers.forEach(function (number, i) {
        var rad = 2 * Math.PI / 12 * i;
        var x = Math.cos(rad) * (r - 0.3 * r);
        var y = Math.sin(rad) * (r - 0.3 * r);
        ctx.fillText(number, x, y);
    });

    for (var i = 0; i < 60; i++) {
        var rad = 2 * Math.PI / 60 * i;
        var x = Math.cos(rad) * (r - 0.18 * r);
        var y = Math.sin(rad) * (r - 0.18 * r);
        ctx.beginPath();
        if (i % 5 === 0) {
            //小时数字处黑色实心圆
            ctx.fillStyle = '#000';
            ctx.arc(x, y, 0.02 * r, 0, 2 * Math.PI, false);
        } else
        //其他灰色实心圆
            ctx.fillStyle = '#ccc';
        ctx.arc(x, y, 0.02 * r, 0, 2 * Math.PI, false);
        ctx.fill();
    }
    //ctx.closePath();
}

//画小时指针
function drawHour(hour,minute) {
    ctx.save(); //保留画布环境
    ctx.beginPath();
    var rad = 2 * Math.PI / 12 * hour + 2 * Math.PI / 12 * minute / 60;
    ctx.rotate(rad);
    ctx.lineWidth = 0.06 * r;
    ctx.lineCap = 'round';
    ctx.moveTo(0, 0.1 * r);
    ctx.lineTo(0, -r / 2);
    ctx.stroke();
    ctx.restore();    //还原画时针的之前未旋转的画布环境
}

//画分钟指针
function drawMinute(minute,second) {
    ctx.save();
    ctx.beginPath();
    var rad = 2 * Math.PI / 60 * minute + 2 * Math.PI / 12 * second / 60 / 5;
    ctx.rotate(rad);
    ctx.lineWidth = 0.03 * r;
    ctx.lineCap = 'round';
    ctx.moveTo(0, 0.1 * r);
    ctx.lineTo(0, -r + 0.3 * r);
    ctx.stroke();
    ctx.restore();
}

//画秒针
function drawSecond(second){
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = 'red';
    var rad = 2 * Math.PI / 60 * second;
    ctx.rotate(rad);
    //ctx.lineWidth = 1;
    //ctx.lineCap = 'round';
    //秒针样式
    ctx.moveTo(-0.02 * r, 0.2 * r);
    ctx.lineTo(0.02 * r, 0.2 * r);
    ctx.lineTo(1, -r + 0.18 * r);
    ctx.fill();
    ctx.restore();
}

//指针固定圆点
function pingRound(){
    ctx.save();
    ctx.beginPath();
    ctx.arc(0, 0, 0.03 * r, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.restore();
    ctx.restore();
}



//执行动画
function draw(){
    ctx.clearRect(0, 0, width, height);
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    drawBackground();
    drawHour(hour,minute);
    drawMinute(minute,second);
    drawSecond(second);
    pingRound();
}

setInterval(draw, 1000);
