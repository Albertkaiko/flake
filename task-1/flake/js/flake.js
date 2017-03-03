var minsnow=5;
var maxsnow=50;
var newOn=100;
var i=0;
var timer;
var snowColor="pink";
 snow=$("<div></div>").css({"position":"absolute","top":"-150px"}).html("❀");
$(function(){
	var snowWidth=$(document).width();
	var snowHeight=$(document).height();
	setInterval(function(){	
		var startleft=Math.random()*snowWidth;
		var startopacity=0.7+Math.random()*0.3;
		var starttop=snowHeight-50;
		var endleft=Math.random()*snowWidth;
		var startspend=5000+Math.random()*3000;
		var snowsize=minsnow+Math.random()*maxsnow;
	snow.clone().appendTo("#body").css({
	"left":startleft,
	"opacity":startopacity,
	"font-size":snowsize,
	"color":snowColor,
	}).animate({
		"top":starttop,
		"left":endleft,
		"opacity":0.5,
	},startspend,function(){$(this).remove();});
	},newOn);
	function show(){
		$(".ig").eq(i).fadeIn(500).siblings().fadeOut(500)
	}
	setInterval(function(){
		timer=setInterval(function(){
			if(i==4){
				i=0
			}i++
		})
	show()
	}, 1000)
	$(function(){
    var play=1;
    $(".MusicPicButton").click(function(){
        if(play==0){
            $(this).attr("src","http://www.skt1.cn/%E5%A4%87%E4%BB%BD/image/music/pause.png")
            $(".MusicPlayProcess").removeClass("pause")
            $(".MusicPicName").removeClass("pause")    
            $("audio").get(0).play();
            play=1;
        }else{
            $(this).attr("src","image/music/play.png")
            $(".MusicPlayProcess").addClass("pause")
            $(".MusicPicName").addClass("pause")    
            play=0;
            $("audio").get(0).pause();
        }
        
    })
    
})
	var mag=document.getElementById("mag");
	mag.scrollTop=0;
	var time=156;
	setInterval("mag.scrollTop++",time);
});
	
