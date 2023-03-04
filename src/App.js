import './styles/App.scss';
import './styles/colors.scss';
import './styles/intro.scss';
import './styles/section.scss';
import './styles/footer.scss';
import './styles/misc.scss';
import './styles/mediaquery.scss';
import Introvideo from './components/Introvideo';
import Section from './components/Section';
import data from './data/data.json';
import Footer from './components/Footer';
import Misc from './components/Misc';
import Loader from './components/Loader';

import freshtopicimg from './assets/academy.png';
import freshtopic2img from './assets/story.png';
import tedimg from './assets/in-the-news.gif';
import franchiseimg from './assets/franchise.gif';
import mapimg from './assets/locations.png';
import courseimg from './assets/image2.png';
import albumimg from './assets/mba-cares.gif';
import baratimg from './assets/image1.png';
import chaiwalaimg from './assets/image3.png';

import {useEffect, useState} from 'react';

const yellow= "#fff100", pink= "#ed1e79", white= "#fff", brown= "#6d3d0f"

function App() {
  const [loading,setloading] = useState(true)
  const { freshTopic,freshTopic2,tedTalks,franchise,map,courses,album,barat,chaiwala } = data;


  const dotCursor = (e) => {
    const cursor = document.querySelector(".cursor");
    cursor.style.top = `${e.pageY - 14}px`;
    cursor.style.left = `${e.pageX - 14}px`;

    const element = e.target;
    if (element.getAttribute("data-cursorpointer")) {
      cursor.classList.add("cursorhover");
    }
    else if(element.getAttribute("data-cursorpointer-mini")){
      cursor.classList.add("cursorhovermini");
    }
    else{
      cursor.classList.remove("cursorhover");
      cursor.classList.remove("cursorhovermini");
    }
  }
  useEffect(() => {
    window.addEventListener("mousemove",dotCursor)
    setTimeout(() =>{
      setloading(false);
    },3000)
    return () => {
      window.removeEventListener("mousemove",dotCursor)
    }
  }, [])
  

  return (
    <>
    {loading && <Loader/>}
    <Introvideo />
    {/* FreshTopics */}
    <Section h3={freshTopic.heading} text={freshTopic.text} btntext={freshTopic.btn} imgsrc={freshtopicimg} bgclr={pink} headingclr={yellow} textclr={yellow} btnbgclr={yellow} btnclr={pink} />

    {/* FreshTopics2 */}
    <Section h3={freshTopic2.heading} text={freshTopic2.text} btntext={freshTopic2.btn} imgsrc={freshtopic2img} bgclr={pink} headingclr={yellow} textclr={yellow} btnbgclr={yellow} btnclr={pink} />

    {/* tedTalks */}
    <Section h3={tedTalks.heading} text={tedTalks.text} btntext={tedTalks.btn} imgsrc={tedimg} bgclr={yellow} headingclr={pink} textclr={pink} btnbgclr={pink} btnclr={yellow} />

    {/* franchise */}
    <Section h3={franchise.heading} text={franchise.text} btntext={franchise.btn} imgsrc={franchiseimg} bgclr={white} headingclr={pink} textclr={brown} btnbgclr={brown} btnclr={yellow} />

    {/* map */}
    <Section h3={map.heading} text={map.text} btntext={map.btn} imgsrc={mapimg} hasbtn={false} bgclr={pink} headingclr={yellow} textclr={yellow} btnbgclr={yellow} btnclr={pink} />

    {/* courses */}
    <Section h3={courses.heading} text={courses.text} btntext={courses.btn} imgsrc={courseimg} imgsize="30%" bgclr={yellow} headingclr={pink} textclr={pink} btnbgclr={pink} btnclr={yellow} />

    {/* album */}
    <Section h3={album.heading} text={album.text} btntext={album.btn} imgsrc={albumimg} bgclr={white} headingclr={pink} textclr={brown} btnbgclr={brown} btnclr={yellow} />

    {/* barat */}
    <Section h3={barat.heading} text={barat.text} btntext={barat.btn} imgsrc={baratimg} bgclr={pink} headingclr={yellow} textclr={yellow} btnbgclr={yellow} btnclr={pink} />

    {/* chaiwala */}
    <Section h3={chaiwala.heading} text={chaiwala.text} btntext={chaiwala.btn} imgsrc={chaiwalaimg} bgclr={white} headingclr={pink} textclr={brown} btnbgclr={brown} btnclr={yellow} />

    <Footer />
    <Misc />
    </>
  );
}

export default App;
