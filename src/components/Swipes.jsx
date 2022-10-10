import React,{Suspense} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar,Navigation,Pagination } from "swiper";


// const Skill = React.lazy(() => import("./Skill"));
// const Work = React.lazy(() => import("./Work"));
// const Extra = React.lazy(() => import("./Extra"));

import {Skill} from "./Skill";
import {Work} from "./Work";
import {Extra} from "./Extra";

function Swipes(props){

 



    return(<div className="swipes" id="swipes" style={props.style}>


<Swiper
scrollbar={{
  hide: true,
  // draggable: true
}}
// initialSlide={props.page}
navigation={true}
modules={[Scrollbar,Navigation,Pagination]}
className="mySwiper"

onSwiper={(swiper) => props.onSwiper(swiper)}



>
<SwiperSlide className="swiper-slide">

<Work/>


</SwiperSlide>
<SwiperSlide className="swiper-slide">

<Skill/>



</SwiperSlide>
<SwiperSlide className="swiper-slide">

<Extra/>


</SwiperSlide>


</Swiper>
</div>
)
}

export  default Swipes;

