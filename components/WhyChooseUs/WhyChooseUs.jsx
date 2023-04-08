import React, { useEffect, useState } from "react";
import SlickSlider from "../SlickSlider/SlickSlider";
import WhyChooseUsItem from "./WhyChooseUsItem";

const WhyChooseUs = () => {
  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const slider_items = [
    {
      src: "/img/icon/choose_icon04.svg",
      alt: "",
      link: "/",
      title: "5",
      description: "Top 5 by trading volume in the top 10 exchanges",
    },
    {
      src: "/img/icon/choose_icon01.svg",
      alt: "",
      link: "/",
      title: "2k",
      description: "Trading more than 2000 tokens and growing",
    },
    {
      src: "/img/icon/choose_icon03.svg",
      alt: "",
      link: "/",
      title: "40",
      description: "Top trading entity on 40 top exchanges",
    },
    {
      src: "/img/icon/choose_icon02.svg",
      alt: "",
      link: "/",
      title: "Future",
      description:
        "invest and support bold founders who want to build the future of Web3",
    },
    {
      src: "/img/icon/choose_icon04.svg",
      alt: "",
      link: "/",
      title: "5",
      description: "Top 5 by trading volume in the top 10 exchanges",
    },
    {
      src: "/img/icon/choose_icon01.svg",
      alt: "",
      link: "/",
      title: "2k",
      description: "Trading more than 2000 tokens and growing",
    },
    {
      src: "/img/icon/choose_icon03.svg",
      alt: "",
      link: "/",
      title: "40",
      description: "Top trading entity on 40 top exchanges",
    },
    {
      src: "/img/icon/choose_icon02.svg",
      alt: "",
      link: "/",
      title: "Future",
      description:
        "invest and support bold founders who want to build the future of Web3",
    },
    // {
    //   src: "/img/icon/choose_icon02.svg",
    //   alt: "",
    //   link: "/",
    //   title: "Lifetime free transaction",
    //   description: "Add new, trending and rare artwork to your collection.",
    // },
    // {
    //   src: "/img/icon/choose_icon03.svg",
    //   alt: "",
    //   link: "/",
    //   title: <>Protect the identity</>,
    //   description: "Add new, trending and rare artwork to your collection.",
    // },
    // {
    //   src: "/img/icon/choose_icon04.svg",
    //   alt: "",
    //   link: "/",
    //   title: "Sercurity & control over money",
    //   description: "Add new, trending and rare artwork to your collection.",
    // },
    // {
    //   src: "/img/icon/choose_icon01.svg",
    //   alt: "",
    //   link: "/",
    //   title: "Lifetime free transaction",
    //   description: "Add new, trending and rare artwork to your collection.",
    // },
    // {
    //   src: "/img/icon/choose_icon03.svg",
    //   alt: "",
    //   link: "/",
    //   title: <>Protect the identity</>,
    //   description: "Add new, trending and rare artwork to your collection.",
    // },
    // {
    //   src: "/img/icon/choose_icon04.svg",
    //   alt: "",
    //   link: "/",
    //   title: "Sercurity & control over money",
    //   description: "Add new, trending and rare artwork to your collection.",
    // },
  ];

  const initalState = 0;
  const [count, setCount] = useState(initalState);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((old) => (old == 6 ? 0 : old + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const toMultiply = 100 / slider_items.length;

  return (
    <section className="choose-area pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-title text-center mb-50">
              <span className="sub-title">why Choose us </span>
              <h2 className="title">
                Why You need contact to <span>Polygon Capital</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row choose-active">
          <SlickSlider settings={slickSettings}>
            {slider_items.map((item, index) => (
              <div key={index} className="col-lg-3">
                <WhyChooseUsItem item={item} />
              </div>
            ))}
          </SlickSlider>
        </div>

        <div className="slide-progressbar">
          <div
            style={{
              // width: `${count * toMultiply}%`,
              backgroundSize: `${count * toMultiply}% 100%`,
            }}
            className="slide-filler"
          />
        </div>

        {/* <div
          className="slide-progress"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <span className="slider__label sr-only"></span>
        </div> */}
      </div>
    </section>
  );
};

export default WhyChooseUs;
