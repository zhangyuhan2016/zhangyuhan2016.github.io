/**
 * Created by zhangyuhan on 2016/11/27.
 */
$(function(){
    $('#dowebok').fullpage({
        'navigation': true,
        onLeave:function(index,nextIndex,direction){
            if(index==1&&nextIndex==2&&direction=='down'){
                drawTable();
            }
        }
    });
});

/*创建画布*/
var myCanvas = document.createElement("canvas");
myCanvas.setAttribute("width", innerWidth);
myCanvas.setAttribute("height", innerHeight);
console.log(myCanvas)
myCanvas.setAttribute("id", "myCanvass");
$('#myCanvas').append(myCanvas);

function drawTable() {

    var myChart = echarts.init(document.getElementById('myCanvass'));

    var option = {
        title : {
            text: '我的技能',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ['前端', '后端', '数据库']
        },
        series: [
            {
                name: '知识储备',
                type: 'pie',
                selectedMode: 'single',
                radius: [0, '30%'],

                label: {
                    normal: {
                        position: 'inner'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {value: 40, name: '前端', selected: true},
                    {value: 29, name: '后端'},
                    {value: 29, name: '数据库'},
                ]
            },
            {
                name: '技能',
                type: 'pie',
                radius: ['40%', '55%'],

                data: [
                    {value: 9, name: 'HTML/CSS'},
                    {value: 9, name: 'JavaScript'},
                    {value: 7, name: 'HTML5'},
                    {value: 7, name: 'CSS3'},
                    {value: 6, name: 'ES6'},
                    {value: 8, name: 'jQuery'},
                    {value: 9, name: 'Bootstrap'},
                ]
            }
        ]
    };


    myChart.setOption(option);
    myChart.on('click', function (params) {
        if(params.name=='前端'){
            myChart.setOption({
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data: ['HTML/CSS','JavaScript','HTML5','CSS3','ES6','jQuery','Bootstrap']
                },
                series:[{
                    name: '技能',
                    type: 'pie',
                    radius: ['40%', '55%'],

                    data: [
                        {value: 9, name: 'HTML/CSS'},
                        {value: 9, name: 'JavaScript'},
                        {value: 7, name: 'HTML5'},
                        {value: 7, name: 'CSS3'},
                        {value: 6, name: 'ES6'},
                        {value: 8, name: 'jQuery'},
                        {value: 9, name: 'Bootstrap'},
                    ]
                }]
            })

        }
        if(params.name=='后端'){
            myChart.setOption({
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data: ['NodeJS','Java','Python']
                },
                series:[{
                    name: '技能',
                    type: 'pie',
                    radius: ['40%', '55%'],

                    data: [
                        {value: 7, name: 'NodeJS'},
                        {value: 4, name: 'Java'},
                        {value: 3, name: 'Python'},
                    ]
                }]
            })
        }
        if(params.name=='数据库'){
            myChart.setOption({
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data: ['MongoDB','MySQL']
                },
                series:[{
                    name: '技能',
                    type: 'pie',
                    radius: ['40%', '55%'],

                    data: [
                        {value: 7, name: 'MongoDB'},
                        {value: 4, name: 'MySQL'},
                    ]
                }]
            })
        }
    })
}