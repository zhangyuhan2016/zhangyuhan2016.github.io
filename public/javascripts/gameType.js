/**
 * Created by zhangyuhan on 2016/11/18.
 */

/*侧边栏动画*/
$('.she').on('click',function () {
    $('aside').css({
        display:'flex',
    }).removeClass('fadeOutLeft').addClass('animated fadeInLeft');
})
$('aside').on('mouseleave',function () {
    $(this).removeClass('fadeInLeft').addClass('animated fadeOutLeft')
})
/*监听侧边栏设置*/
$('aside #size').change(function () {
    let size=$(this).val();
    size=parseInt(size)+350;
    $('main .font').css({
        'font-size':size+'px'
    })

})
$('#color').change(function () {
    let color=$(this).val();
    $('main .font').css({
        color
    })
})


function start() {
    var fontNum,scoreNum=0,lowNum=0;
    var rNum=()=>Math.floor(Math.random()*26)+65;

    /*不区分大小写*/
    function NtN(num) {
        return  num<97?num:num-32;
    }

    /*生成Code*/
    function addCode(rNum) {
        var str=String.fromCharCode(rNum)
        $('.font').text(str);

    }

    function ready() {
        $('.font').removeClass('flipOutX wobble').addClass('flipInX')
        fontNum=rNum();
        addCode(fontNum);

    }
    function TF(a,b) {
        let temp=a/(a+b)*100;
        return temp.toFixed(2);
    };

    /*监听按键*/
    $(document).keypress(function (e) {
        let t=NtN(e.keyCode);
        if(t===fontNum){
            /*加分*/
            $('.font').addClass('flipOutX')
            scoreNum++;
        }else{
            /*减分*/
            $('.font').removeClass('flipInX').addClass('wobble');

            lowNum++;
        }
        setTimeout(ready,1000);
        $('#score').text(TF(scoreNum,lowNum));
        $('.tip.animated').toggleClass('swing')

    })
    ready();
}
start();
