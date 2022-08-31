import {olg} from "./proline"
import {origin} from "./helpers/helpers.js"
const banner = document.getElementById('banner')
const bannerSize = {w:banner.offsetWidth, h:banner.offsetHeight}

gsap.defaults({
  ease: "power3.out"
});

const read = {
	percentGoBack: 2.5,
	betOnNFL: 2.2, 
	njasb: 2,
	losingBy: 2.5
}

const {w, h} = bannerSize

function logoFader(){
	const tl = new TimelineMax()
	tl.to(".logo1", {duration:.2, opacity:0}, "+=.5")
	return tl
}

function bgFadeOut(read){
	const tl = new TimelineMax()
	tl.to([ ".bg", ".t1"], {duration:.2, opacity:0}, `+=${read}`)
	return tl
}

function fader(el, time){
	const tl = new TimelineMax()
	tl.from(el, {duration:.3, opacity:0}, "+=.2")
	tl.to(el, {duration:.3, opacity:0}, `+=${time}`)
	return tl
}

function ender(){
	const tl = new TimelineMax()
	tl.from([".t3", ".logo3"], {duration:.3, opacity:0}, "+=.2")
	tl.from([".footer", ".cta"], {duration:.3, opacity:0}, "+=.5")
	tl.add(olg())
	return tl	
}


function init(){	
	const tl = new TimelineMax({onComplete:()=>{
		if(document.getElementById("legalBtn")){			
			TweenLite.set("#legalBtn", {display:"block"})
		}
	}})
	tl.set(".frame1", {opacity:1})
	return tl
}




function slider(read=2){	
	const tl = new TimelineMax()
	tl.add(logoFader())

	tl.add("t1")
	tl.from(".t1a", {duration:.26, x:"-=130", y:"+=30", opacity:0}, "t1")
	tl.from(".t1b", {duration:.26, x:"+=130", y:"-=30", opacity:0}, "t1+=.6")
	
	tl.add(bgFadeOut(read))
	return tl
}

function standard(){	
	const tl = init()	
	tl.add(slider(), "+=.5")
	tl.from(".logo2", {duration:.3, opacity:0}, "+=.1")
	tl.from(".t2", {duration:.3, opacity:0}, "+=.3")
	tl.to(".text2", {duration:.2, opacity:0}, `+=${read.njasb}`)

	tl.add(ender())
	return tl
}


function b_300x600__(){		
	const tl = init()
	tl.add(slider(), "+=.5")
	tl.from(".logo2", {duration:.3, opacity:0}, "+=.1")
	tl.from(".t2", {duration:.3, opacity:0}, "+=.3")
	tl.to(".text2", {duration:.2, opacity:0}, `+=${read.percentGoBack}`)
	
	if(document.querySelector(".t2b")){
		tl.add(fader(".t2b", read.betOnNFL))	
	}
	
	tl.add(ender())
	return tl
}


function b_160x600(){
	origin(".t1b", 160, 640)
	standard( .57, 6 )
}

function b_300x250(){	
	origin(".t1b", 300, 320)
	standard(.6, 7)
}

function b_300x600(){	
	origin(".t1b", 300, 680)
	b_300x600__(.63, 15)
}

function b_1000x700(){
	origin(".t1b", 1000, 888)
	b_300x600__(.63, 27)
}

function b_320x50(){
	const tl = init()
	tl.add(logoFader())
	tl.add("t1")
	tl.from(".t1a", {duration:.3,  x:"-=70", opacity:0}, "t1")
	tl.from(".t1b", {duration:.3,  x:"+=70", opacity:0}, "t1")
	tl.add(bgFadeOut(read.percentGoBack))	
	tl.add(fader(".t2", read.njasb))	
	tl.add(ender())	
}

function b_728x90(text1){
	
	const tl = init()
	if(text1){
		tl.add(logoFader())
		tl.add(text1, "+=.5")
		tl.add(bgFadeOut(2))
	}else{
		tl.add(slider(), "+=.5")	
	}
	


	tl.add(fader(".t2", read.percentGoBack))
	if(document.querySelector(".t2b")){
		tl.add(fader(".t2b", read.betOnNFL))	
	}
	
	tl.add(ender())
}

export { init, b_160x600, b_300x250, b_300x600, b_160x600, b_728x90, b_1000x700, b_320x50, origin }