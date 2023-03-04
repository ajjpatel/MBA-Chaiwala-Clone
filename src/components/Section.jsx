import React from 'react';
import { motion } from 'framer-motion';

const Section = ({h3,text,hasbtn=true,btntext,imgsrc,imgsize="70%",bgclr,headingclr,textclr,btnclr,btnbgclr}) => {
  const headingoptions = {
    initial:{
      y:"-100%",
      opacity:0
    },
    whileInView:{
      y:0,
      opacity:1
    },
  };
  
  const textoptions={
    ...headingoptions,
    transition:{
      delay:0.3,
    }
  }

  const btnoptions = {
    initial:{
      y:"100%",
      opacity:0
    },
    whileInView:{
      y:0,
      opacity:1
    },
    transition:{
      delay:0.3,
      ease:"easeIn"
    }
  }

  const imgoptions = {
    initial:{
      scale:0.1,
      opacity:0
    },
    whileInView:{
      scale:1,
      opacity:1
    },
    transition:{
      delay:0.3,
    }
  }
  return (
    <section className="section" style={{backgroundColor: bgclr}}>
        <div>
            <motion.h3 style={{color: headingclr}} data-cursorpointer={true} {...headingoptions}>{h3}</motion.h3>
            <motion.p style={{color: textclr}} {...textoptions}>{text}</motion.p>
            {hasbtn && <motion.button style={{color: btnclr,backgroundColor:btnbgclr}} data-cursorpointer={true} {...btnoptions}>{btntext} </motion.button>}
            <motion.div {...imgoptions}><img src={imgsrc} alt="ImgSrc" style={{width:imgsize}}/></motion.div>
        </div>
    </section>
  )
}

export default Section