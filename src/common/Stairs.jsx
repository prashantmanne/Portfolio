import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

export default function Stairs({ children }) {

  const location = useLocation()

  const wrapperRef = useRef(null)
  const stairsRef = useRef([])
  const pageRef = useRef(null)

  useGSAP(() => {

    window.scrollTo(0,0)

    const ctx = gsap.context(()=>{

      const tl = gsap.timeline()

      tl.set(wrapperRef.current,{
        display:"flex"
      })

      tl.fromTo(
        stairsRef.current,
        { yPercent:-100 },
        {
          yPercent:0,
          duration:0.5,
          stagger:0.1,
          ease:"power3.out"
        }
      )

      tl.to(stairsRef.current,{
        yPercent:100,
        duration:0.5,
        stagger:0.1,
        ease:"power3.in"
      })

      tl.set(wrapperRef.current,{
        display:"none"
      })

      tl.from(pageRef.current,{
        opacity:0,
        duration:0.3
      })

    })

    return ()=> ctx.revert()

  },[location.pathname])


  return (
    <div>

      {/* stairs */}
      <div
        ref={wrapperRef}
        className="fixed top-0 left-0 w-full h-screen hidden z-50"
      >
        <div className="flex w-full h-full">
          {[1,2,3,4,5].map((_,i)=>(
            <div
              key={i}
              ref={(el)=>stairsRef.current[i]=el}
              className="w-1/5 h-full bg-white"
            />
          ))}
        </div>
      </div>

      {/* page */}
      <div ref={pageRef}>
        {children}
      </div>

    </div>
  )
}