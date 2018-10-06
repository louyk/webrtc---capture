function hasUserMedia(){
	return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
}

if(hasUserMedia()){
	navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
	
	var video = document.querySelector("video"), canvas = document.querySelector("canvas"), streaming = false;
	
	navigator.getUserMedia({
		video: true, //这里也可以用来设置视频大小、分辨率
		audio: true
	}, function(stream){
		//var video = document.querySelector("video");
		video.src = window.URL.createObjectURL(stream);
		streaming = true;
	}, function(err){
		console.log("raised an error when capturing:", err);
	});



document.querySelector("#capture").addEventListener("click", function(event){
	if(streaming){
		canvas.width = video.clientWidth;
		canvas.height = video.clientHeight;
		var context = canvas.getContext("2d");
		context.drawImage(video, 0, 0);
	}
});

}else{
	alert("抱歉，你的浏览器不支持getUserMedia。");
}