// Working in Progress
// Missing Timeout/Interval Time is Banked For Later
(()=>{const a=setInterval,b=setTimeout,c=(a,b,c,e,f,g,h,i)=>{d+=new Date().getTime()-i-b,a(c,e,f,g,h)};let d=0;setTimeout=(a,e,f,g,h,i,j)=>{const k=e;return e=Math.max(0,e-d),d-=k-e,b(c,e,a,e,f,g,h,i,j,new Date().getTime())},setInterval=(b,e,f,g,h,i,j)=>{const k=e;return e=Math.max(0,e-d),d-=k-e,a(c,e,b,e,f,g,h,i,j,new Date().getTime())}})();
