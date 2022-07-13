import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";
import SampleImg117 from "../assets/images/117.png";
import SampleImg119 from "../assets/images/119.png";
import SampleImg128 from "../assets/images/128.png";
import SampleImg1368 from "../assets/images/1368.png";
import SampleImg17 from "../assets/images/17.png";
import SampleImg27 from "../assets/images/27.png";
import SampleImg285 from "../assets/images/285.png";
import SampleImg286 from "../assets/images/286.png";
import SampleImg387 from "../assets/images/387.png";
import SampleImg41 from "../assets/images/41.png";
import SampleImg414 from "../assets/images/414.png";
import SampleImg47 from "../assets/images/47.png";
import SampleImg486 from "../assets/images/486.png";
import SampleImg512 from "../assets/images/512.png";
import SampleImg598 from "../assets/images/598.png";
import SampleImg6 from "../assets/images/6.png";
import SampleImg633 from "../assets/images/633.png";
import SampleImg647 from "../assets/images/647.png";
import SampleImg74 from "../assets/images/74.png";
import SampleImg78 from "../assets/images/78.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      swipeToSlide: false,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <Image
              src={SampleImg117}
              alt=""
              width={220}
              height={220}
              style={{ borderRadius: 10 }}
            />
          </div>
          <div>
            <Image
              src={SampleImg119}
              alt=""
              width={220}
              height={220}
              style={{ borderRadius: 10 }}
            />
          </div>
          <div>
            <Image
              src={SampleImg128}
              alt=""
              width={220}
              height={220}
              style={{ borderRadius: 10 }}
            />
          </div>
          <div>
            <Image
              src={SampleImg1368}
              alt=""
              width={220}
              height={220}
              style={{ borderRadius: 10 }}
            />
          </div>
          <div>
            <Image
              src={SampleImg17}
              alt=""
              width={220}
              height={220}
              style={{ borderRadius: 10 }}
            />
          </div>
          <div>
            <Image
              src={SampleImg27}
              alt=""
              width={220}
              height={220}
              style={{ borderRadius: 10 }}
            />
          </div>
          <div>
            <Image
              src={SampleImg286}
              alt=""
              width={220}
              height={220}
              style={{ borderRadius: 10 }}
            />
          </div>
          <div>
            <Image
              src={SampleImg285}
              alt=""
              width={220}
              height={220}
              style={{ borderRadius: 10 }}
            />
          </div>
          <div>
            <Image
              src={SampleImg387}
              alt=""
              width={220}
              height={220}
              style={{ borderRadius: 10 }}
            />
          </div>
          <div>
            <Image
              src={SampleImg41}
              alt=""
              width={220}
              height={220}
              style={{ borderRadius: 10 }}
            />
          </div>
          <div>
            <Image
              src={SampleImg414}
              alt=""
              width={220}
              height={220}
              style={{ borderRadius: 10 }}
            />
          </div>
          <div>
            <Image
              src={SampleImg47}
              alt=""
              width={220}
              height={220}
              style={{ borderRadius: 10 }}
            />
          </div>
          <div>
            <Image
              src={SampleImg486}
              alt=""
              width={220}
              height={220}
              style={{ borderRadius: 10 }}
            />
          </div>
          <div>
            <Image
              src={SampleImg512}
              alt=""
              width={220}
              height={220}
              style={{ borderRadius: 10 }}
            />
          </div>
          <div>
            <Image
              src={SampleImg598}
              alt=""
              width={220}
              height={220}
              style={{ borderRadius: 10 }}
            />
          </div>
          <div>
            <Image
              src={SampleImg6}
              alt=""
              width={220}
              height={220}
              style={{ borderRadius: 10 }}
            />
          </div>
          <div>
            <Image
              src={SampleImg633}
              alt=""
              width={220}
              height={220}
              style={{ borderRadius: 10 }}
            />
          </div>
          <div>
            <Image
              src={SampleImg647}
              alt=""
              width={220}
              height={220}
              style={{ borderRadius: 10 }}
            />
          </div>
          <div>
            <Image
              src={SampleImg74}
              alt=""
              width={220}
              height={220}
              style={{ borderRadius: 10 }}
            />
          </div>
          <div>
            <Image
              src={SampleImg78}
              alt=""
              width={220}
              height={220}
              style={{ borderRadius: 10 }}
            />
          </div>
        </Slider>
      </div>
    );
  }
}
