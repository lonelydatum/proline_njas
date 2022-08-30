import {olg} from "./proline"
import {origin} from "./helpers/helpers.js"
const banner = document.getElementById('banner')
const bannerSize = {w:banner.offsetWidth, h:banner.offsetHeight}

gsap.defaults({
  ease: "power3.out"
});



const {w, h} = bannerSize






function init(){	
	const tl = new TimelineMax({onComplete:()=>{
		if(document.getElementById("legalBtn")){			
			TweenLite.set("#legalBtn", {display:"block"})
		}
	}})
	tl.set(".frame1", {opacity:1})
	return tl	
}


function hero(){
	const tl = init()
	tl.add("f1")
	tl.from(".hero", {duration:.4, x:"+=200", opacity:0, ease:"power4.out"}, "f1")
	tl.from(".logo1", {duration:.4, x:"+=200", opacity:0}, "f1+=.15")
	tl.to(".logo1", {duration:.2, x:"-=200", opacity:0}, "+=.3")

	tl.from(".t1a", {duration:.3, opacity:0}, "+=.3")
	tl.from(".t1b", {duration:.3, opacity:0}, "+=.3")
	tl.to([ ".hero", ".bg", ".t1"], {duration:.2, opacity:0}, "+=2.6")
	return tl
}



function b_160x600(){	
	b_300x250()
}



function b_300x250(){	
	const tl = hero()


	tl.from(".logo2", {duration:.3, opacity:0}, "+=.1")
	tl.from(".t2", {duration:.3, opacity:0}, "+=.3")
	tl.to(".njas", {duration:.2, opacity:0}, "+=2.1")

	tl.from([".t3", ".logo3"], {duration:.3, opacity:0}, "+=.2")
	tl.from([".footer", ".cta"], {duration:.3, opacity:0}, "+=.5")

	tl.add(olg())

	return tl
	
}



function tint(){
	const tl = new TimelineMax()
	const y = 15
	const duration = .3
	tl.add("t1-scale-start")
	tl.to(".t1a", {duration, ease:"power3.easein", y:`-=${y}`}, "t1-scale-start")
	tl.to(".t1b", {duration, ease:"power3.easein", scale:.7}, "t1-scale-start")
	tl.to(".t1b feFlood", {duration:.3, floodColor:'#ffd100'}, "t1-scale-start")

	tl.add("t1-scale-normal", "+=.2")
	tl.to(".t1a", {duration:.2, ease:"power3.easein", y:`+=${y}`}, "t1-scale-normal")
	tl.to(".t1b", {duration:.2, ease:"power3.easein", scale:.5}, "t1-scale-normal")
	// tl.to(".t1b feFlood", {duration:.5, floodColor:'#ffffff'}, "t1-scale-normal")
	return tl
}



function b_300x250__(){	
	origin(".t1b", 300, 320)

	

	const tl = init()
	

	tl.to(".logo1", {duration:.2, opacity:0}, "+=.6")
	tl.add("t1")
	tl.from(".t1a", {duration:.3, x:"-=130", y:"+=30", opacity:0}, "t1")
	tl.from(".t1b", {duration:.3, x:"+=130", y:"-=30", opacity:0}, "t1+=.6")

	tl.add(tint(), "+=.5")
	

	
	tl.to([ ".hero", ".bg", ".t1"], {duration:.2, opacity:0}, "+=1")


	
	
	

	tl.from(".logo2", {duration:.3, opacity:0}, "+=.1")
	tl.from(".t2", {duration:.3, opacity:0}, "+=.3")
	tl.to(".njas", {duration:.2, opacity:0}, "+=2.1")

	tl.from([".t3", ".logo3"], {duration:.3, opacity:0}, "+=.2")
	tl.from([".footer", ".cta"], {duration:.3, opacity:0}, "+=.5")

	tl.add(olg())

	return tl
	
}

function b_300x600(){	
	const tl = hero()


	tl.from(".logo2", {duration:.3, opacity:0}, "+=.1")
	tl.from(".t2", {duration:.3, opacity:0}, "+=.3")
	tl.to(".njas", {duration:.2, opacity:0}, "+=2.8")

	tl.from(".t2b", {duration:.3, opacity:0}, "+=.1")
	tl.to(".t2b", {duration:.3, opacity:0}, "+=3")

	tl.from([".t3", ".logo3"], {duration:.3, opacity:0}, "+=.2")
	tl.from([".footer", ".cta"], {duration:.3, opacity:0}, "+=.5")

	tl.add(olg())

	return tl
	
}

export { init, b_160x600, b_300x250, b_300x600, b_300x250__ }