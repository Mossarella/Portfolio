import React,{forwardRef} from "react";
import { Row, Col, Container } from "react-bootstrap";
import {Title} from "./Title";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Scrollbar, Navigation, Pagination, Thumbs, FreeMode } from "swiper";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { containerMotion, cardVariantMotion } from "../AppearOnScroll";

const Extra = forwardRef((props,ref)=>{
    return (

      
      <section className="extra classMargin"  id="extra" ref={ref}>
      
      <div className="minPad ">
     
      <motion.div
            variants={cardVariantMotion}
            initial="initial"
            animate="animate"
            exit="exit"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.5 }}
          >
          <div className="bigPad ">
      <Title titleText={"As Myself."} align="left"></Title>
          <p className="justify extraDesc mb-0">
          &emsp;I'm born creative by heart. Which leads to so much hobbies. Normally if i do got free time. I do Art. Reading things. Writing things. Video games. GameDev. And a lot on the internet.
        But If you wanna hang out. Just hit me up anytime! 
          </p>
          </div>
          </motion.div>
          

      
          <motion.div
          className="extraDiv smallPad pad"
          variants={cardVariantMotion}
          initial="initial"
          animate="animate"
          exit="exit"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.5 }}
        >
          <Container fluid className=" position-relative extraContent ">
          <Swiper
          navigation={true}
          centeredSlides={true}
   
          loop={true}
          slidesPerView={"auto"}
          spaceBetween={15}
          // breakpoints={{
          //   1:{
          //     slidesPerView: 1,
          //     spaceBetween: 15,
          //   },
          //   767.98: {
          //     slidesPerView: 1,
          //     spaceBetween: 15,
          //   },
          //   991.98: {
          //     slidesPerView: 3,
          //     spaceBetween: 15,
          //   },
          //   1199.98:{
          //     slidesPerView: 4,
          //     spaceBetween: 15,
          //   }
          // }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay,Pagination,Navigation]}
          className="mySwiper h-100"
        >
        
       
          <SwiperSlide className="swiperItem unfixedWidthL">
     
          <div className="  zoomable extraSwiperDiv">
          <img className="projImg" src="/images/pixel/STAGE TEST-export2.png" alt="" />
          </div>
    
          

      </SwiperSlide>
      {/* 
      <SwiperSlide className=" swiperItem unfixedWidthL">
      
      
      <div className="zoomable   extraSwiperDiv">
      <img className="projImg" src="/images/Untitled-1.jpg" alt="" />
      </div>
      
      
      
      
      </SwiperSlide>
    */}
    

          <SwiperSlide className="swiperItem unfixedWidthM">
     
          <div className="  zoomable extraSwiperDiv">
          <img className="projImg" src="/images/pixel/owlmergeedited.jpg" alt="" />
          </div>
    
          

      </SwiperSlide>
      <SwiperSlide className=" swiperItem unfixedWidthS">
      
            
      <div className="zoomable   extraSwiperDiv">
      <img className="projImg" src="/images/pixel/bernardmerged.png" alt="" />
      </div>
    
     
      

    </SwiperSlide>
    <SwiperSlide className="swiperItem unfixedWidthM">
     
     <div className="  zoomable extraSwiperDiv">
     <img className="projImg" src="/images/FvhPPNCaEAAyssW.jpg" alt="" />
     </div>

     

 </SwiperSlide>
          
      
      <SwiperSlide className="swiperItem unfixedWidthL">
     
     <div className="  zoomable extraSwiperDiv">
     <img className="projImg" src="/images/pixel/FszfiSvaEAA4U_1.jpg" alt="" />
     </div>

     

 </SwiperSlide>
      <SwiperSlide className="swiperItem unfixedWidthS">
     
     <div className="  zoomable extraSwiperDiv">
     <img className="projImg" src="/images/47924.jpg" alt="" />
     </div>

     

 </SwiperSlide>
      <SwiperSlide className="swiperItem unfixedWidthL">
     
     <div className="  zoomable extraSwiperDiv">
     <img className="projImg" src="/images/47925.jpg" alt="" />
     </div>

     

 </SwiperSlide>
      <SwiperSlide className="swiperItem unfixedWidthL">
     
     <div className="  zoomable extraSwiperDiv">
     <img className="projImg" src="/images/D7BC8C24-9B6D-44BE-80FA-A4EEA25C03D3.jpg" alt="" />
     </div>

     

 </SwiperSlide>


 
 


          {/* <SwiperSlide className=" swiperItem unfixedWidthS">
      
            
            <div className="zoomable   extraSwiperDiv">
            <img className="projImg" src="/images/S__3153938.jpg" alt="" />
            </div>
          
           
            
     
          </SwiperSlide> */}

       
          
     
    
        </Swiper>

          <img className="pixel pix1" src="/images/pixel/chicky-export.gif" alt="" />
          <img className="pixel pix2" src="/images/pixel/133892.gif" alt="" />
          <img className="pixel pix3" src="/images/pixel/ninja-Recoveraaaed.gif" alt="" />
          <img className="pixel pix4" src="/images/unity-69-logo-png-transparent.png" alt="" />
     
          <img className="pixel pix5" src="/images/pixel/cloud.png" alt="" />
{/* 
*/}
          <img className="pixel pix6" src="/images/pixel/Sprite-0003.png" alt="" />
          <img className="pixel pix7" src="/images/pixel/133890.gif" alt="" />
          <img className="pixel pix8" src="/images/pixel/poikat.gif" alt="" />
          <img className="pixel pix9" src="/images/pixel/heart-export.gif" alt="" />
         
          </Container>
          
          </motion.div>
          
     
          <motion.div
    
 
    
      
          variants={cardVariantMotion}
              initial='initial'
              animate='animate'
              exit='exit'
          whileInView='whileInView'
          viewport={{ once: true, amount: 0.5 }}
          
          >
          <div className="bigPad ">
          <div className="underLine ">    </div>
          <p className="skillDesc2">There are lot of fun stuff in this world. Wanna do it together?</p>
          </div>
          </motion.div>


          </div>
      
        </section>
      );
    });

export  {Extra};