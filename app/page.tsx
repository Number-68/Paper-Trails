
import HandDrawnArrow from "./components/handDrawnArrow";



export default function Home() {

  // todo: loading animations figure something out.
  // imagining something kinda like... text appearing in a text line as if it's being texted... 
  // imagine... at the end, of something thinking, there's the thought of ... always... or that | line that's blinking
  // can have an animation like that as everything appears to form the webpage.




  //todo: cool little stat line. like take it from github or something like that... "commits done"
  // "years coding/developping"
  // "etc etc"
  // "website views" would be pretting interesting too...


  // also, how do peopel make those animations of like... the words being written out? that's really cool.


  // intro animation: everything drops down like a paper theatre.

  // todo: the introduction. 
  // like a little cutscene? 
  // starts with introduction, then it goes on like each little thing fades in and out...
  // hi. 
  // my name's Ahleeryan-Joe ventura
  // I am a full stack developer
  // blah blah blah. 
  // you can navigate my work
  // after that introduction is done, we present it all together on a single page. 
  // and then





  // it's all about the introduction! how do you make an introduction? a slam!
  // the introduction animation is just opening on a blank screen, and then the paper cutouts slamming down with force! 
  // bang!
  // this way, I also wanna try building like physics for the pull tabs too... how could we add something like that? 



  // todo: wobble animations? like when we're moving the page, shouldn't we have a little bit of give to make it look a lot more dynamic? 
  //i mean for the text obviously... the text can be separate from the entire page to give it a look. y'knoww?




  //cool game to add. 
  //like playing in the sand of letters. what if we just made everything on the screen, you're able to interact with. 
  //so like... the arrow, you can drag, 
  // each and every single letter, you can drag around and like it has a physics engine.... and you can play around with it. 
  // fun stuff, but would probably get super heavy to handle on regular machines.
  return (
    <main className="quick-about-me-main">
      <section className="playful-words text-shadow">
        
        <HandDrawnArrow />

        <p className="font-covered">pull a tab to explore!</p>
      </section>

      <section className="quick-about-me">
        
        <h1 className="text-shadow">
          Ahleeryan-Joe Ventura
        </h1>
        <p className="text-shadow"> 
          Full-Stack Developer excited to learn about full stack frameworks etc.
        </p>
      </section>
      
    </main>
    
  );
}
