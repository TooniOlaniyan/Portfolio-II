import  gsap , {Power4}  from "gsap";

export const handleHideLoader = (preloader) => {
  const tl = gsap.timeline()
  tl.to(preloader , {transform:'translateY(-100vh)' , duration:1.5 , ease:Power4.easeInOut , borderRadius:'8rem'}).to(preloader, {  display: 'none' , duration:0.5 } , '+=1')
}