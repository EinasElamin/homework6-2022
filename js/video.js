var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
});
document.querySelector("#pause").addEventListener("click", function() {
	console. log("Pause Video");
	video.pause();
});
document.querySelector("#slower").addEventListener("click", function() {
	console. log("Slow down video");
	video.playbackRate *= 0.95;
	console. log("speed is", video.playbackRate);
});
document.querySelector("#faster").addEventListener("click", function() {
	console. log("Speed up video");
	video.playbackRate /= 0.95;
	console. log("speed is", video.playbackRate);
});
document.querySelector("#skip").addEventListener("click", function() {
	console. log("skip ahead");
	video.currentTime += 15;
	if (video.currentTime >= video.duration){
		video.currentTime = 0
		console. log("Going back to beginning")
	};
	console. log("video current time", video.currentTime);
});
document.querySelector("#mute").addEventListener("click", function() {
	console. log("Mute video");
	document.querySelector('#mute').innerHTML = "Mute";
	if (video.muted === false) {
		video.muted = true;
		document.querySelector('#mute').innerHTML = "Unmute";
	}
	else (video.muted = false) ;{
	}
});
document.querySelector("#slider").addEventListener("click", function() {
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = (video.volume*100+"%");
	console. log("Current volume", video.volume);
});
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old school");
	video.classList.add("oldSchool");
});
document.querySelector("#orig").addEventListener("click", function() {
	console.log("original");
	video.classList.remove("oldSchool");
});