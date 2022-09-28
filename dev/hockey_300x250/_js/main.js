import {read,ender, logoFader,  init, bgFadeOut} from '../../_common/js/common.js'


function slider(read=2){	
	const tl = new TimelineMax()
	tl.add(logoFader())

	tl.add("t1")
	
	tl.from(".t1a", {duration:.26, x:"-=130", y:"+=30", opacity:0}, "t1")
	tl.from(".t1b", {duration:.26, x:"+=130", y:"-=30", opacity:0}, "t1+=.6")
	tl.from(".black", {duration:.4,  opacity:0}, "t1+=.6")
	tl.add(bgFadeOut(read))
	return tl
}

const tl = init()	
	tl.add(slider(), "+=.5")
	tl.from(".logo2", {duration:.3, opacity:0}, "+=.1")
	tl.from(".t2", {duration:.3, opacity:0}, "+=.3")
	tl.to(".text2", {duration:.2, opacity:0}, `+=${read.njasb}`)
	if(document.querySelector(".t2b")){
		tl.add(fader(".t2b", read.betOnNFL))	
	}
	tl.add(ender())


