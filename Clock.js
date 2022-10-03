
Flexiple Logo

Programming a Clock using Javascript
In this article, we look at how you can implement a real-time clock in JavaScript. We break down and explain the code so that you can replicate it with ease.

However, in case you are a seasoned programmer and are here only for the code, you can dive straight into the solutions. In case you aren’t, I would recommend you follow along step by step.

Table of Contents
Overview of Javascript Clock 12 Hours clock using JavaScript 24 Hour clock using JavaScript
Overview of Javascript Clock:
Clocks are of utmost importance on websites where time plays a large factor, e.g: booking websites, e-commerce, etc.

However, given JavaScript supports and lets us manipulate web pages in real-time, building clocks that show the current time in JavaScript has become quite straightforward.

Note: In this article, we look closely at the JavaScript code behind a clock. We do not talk about CSS styling as there are plenty of blogs already available that brief about it. We rather focus largely on the JavaScript code.

12 Hours clock using Javascript
As the name suggests, in this section we look at how to build a 12 hours JavaScript clock.

Javascript Clock Code (12 hours):
function currentTime() {
  let date = new Date(); 
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if(hh == 0){
      hh = 12;
  }
  if(hh > 12){
      hh = hh - 12;
      session = "PM";
   }

   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;
    
   let time = hh + ":" + mm + ":" + ss + " " + session;

  document.getElementById("clock").innerText = time; 
  let t = setTimeout(function(){ currentTime() }, 1000);
}
currentTime();
