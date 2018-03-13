var $firstImgClone = $('.slides-container li').first().clone() 
var $lastImgClone = $('.slides-container li').last().clone();
var imgWidth = $('.slides-container li').width()
var $slidesContainer = $('.slides-container')
var $statusLi = $('.status>li')
$firstImgClone.appendTo('.slides-container')
$lastImgClone.prependTo('.slides-container')

var currentSlideIdx = 1
//还原第一张图的位置
$slidesContainer.css({
    left:-imgWidth
});
//向下播放函数
function playNext(num) {
    $slidesContainer.animate(
        {
            left: '-=' + (imgWidth*num) //注意，只能用字符串
        },500,function(){
            currentSlideIdx = currentSlideIdx+num
            if(currentSlideIdx===5){
                currentSlideIdx=1
                $slidesContainer.css({
                    left:-imgWidth
                });
            }
            changeStatus()
            // console.log('当前号是'+currentSlideIdx)
        }
    )
}
//向上播放函数
function playPre(num) {
    $slidesContainer.animate(
        {
            left: '+=' + (imgWidth*num)
        },500,function(){
            currentSlideIdx = currentSlideIdx-num
            if(currentSlideIdx===0){
                currentSlideIdx=4
                $slidesContainer.css({
                    left:-imgWidth*4
                });
            }
            changeStatus()
            // console.log('当前号是'+currentSlideIdx)
        }
    )
}

//改变小按钮状态函数
function changeStatus(){
    $statusLi.removeClass('showwed')
    $statusLi.eq(currentSlideIdx-1).addClass('showwed')        
}
$statusLi.click(function(){
   var index = $(this).index()+1
   console.log(index)
   if(index < currentSlideIdx){
       playPre(currentSlideIdx-index)
   }else if(index>currentSlideIdx){
        playNext(index-currentSlideIdx)
   }
})

$('.arrow-left').click(function(){
    playNext(1)
})
$('.arrow-right').click(function(){
    playPre(1)
})