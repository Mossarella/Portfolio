import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar,Navigation,Pagination } from "swiper";

import { Skill } from "./Skill";
import { Work } from "./Work";
import { Extra } from "./Extra";

function Swipes(props){

 



    return(<div className="swipes">


<Swiper
scrollbar={{
  hide: true,
  // draggable: true
}}
initialSlide={props.page}
navigation={true}
modules={[Scrollbar,Navigation,Pagination]}
className="mySwiper"

onSwiper={(swiper) => props.onSwiper(swiper)}



>
<SwiperSlide className="swiper-slide">
<Skill>
</Skill>

</SwiperSlide>
<SwiperSlide className="swiper-slide">
<Work>
</Work>
</SwiperSlide>
<SwiperSlide className="swiper-slide">
  <Extra>
  </Extra>
</SwiperSlide>


</Swiper>
</div>
)
}

export {Swipes};

