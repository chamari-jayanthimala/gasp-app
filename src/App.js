import React from "react";
import './App.css';
import { gsap } from "gsap";

const { useEffect, useRef } = React;

function App() {
   // store a reference to the box div
   const el = useRef();
   //const q = gsap.utils.selector(el);

   useEffect(() => {
    
    // Target any descendant with the class of .box - no matter how far down the descendant tree. 
    //Uses el.current.querySelectorAll() internally
  //   gsap.to(q(".drop"), {
  //     x: 0,
  //     y: 200,
  //     stagger: 0.33,
  //     repeat: -1,
  //     repeatDelay: 1,
  //     yoyo: true,
  //     ease: "power2.in",
  //     yoyoEase :"power1.in",
      
  //   });
  gsap.fromTo(".drop", {x:0 , y: 0, ease: "power2.in"} ,
                       {x :0, y:"random( -500, 0 )", duration : 3, repeat: -1, repeatDelay: 0,yoyo : true, repeatRefresh: true});
   }, []);
    
  return (
    <div className="app" ref={el}>
      <svg width="100" height="100" className = "drop">
      <circle cx="50" cy="50" r="10" fill="blue" />
      Sorry, your browser does not support inline SVG.
      </svg>
      <svg width="100" height="100" className = "drop">
      <circle cx="50" cy="50" r="40" fill="blue" />
      Sorry, your browser does not support inline SVG.
      </svg>
      <svg width="100" height="100" className = "drop">
      <circle cx="50" cy="50" r="30" fill="blue" />
      Sorry, your browser does not support inline SVG.
      </svg>
      <svg width="100" height="100" className = "drop">
      <circle cx="50" cy="50" r="20" fill="blue" />
      Sorry, your browser does not support inline SVG.
      </svg>
      <svg width="100" height="100" className = "drop">
      <circle cx="50" cy="50" r="40" fill="blue" />
      Sorry, your browser does not support inline SVG.
      </svg>
      <svg width="100" height="100" className = "drop">
      <circle cx="50" cy="50" r="32" fill="blue" />
      Sorry, your browser does not support inline SVG.
      </svg>
    </div>
  );
}

export default App;
