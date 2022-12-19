import React, {useEffect, useState} from 'react';
import HomeSlide1 from "./homeSlides/HomeSlide1";
import HomeSlide2 from "./homeSlides/HomeSlide2";
import Navbar from "../components/Navbar";
import Aos from 'aos';
import 'aos/dist/aos.css';

import './FutureHome.css';


const FutureHome = (props) => {
    let index = 1;
    let slide = <HomeSlide1></HomeSlide1>
    const slides = [<HomeSlide1></HomeSlide1>, <HomeSlide2></HomeSlide2>, <HomeSlide1></HomeSlide1>]
    const [prevSlide, setPrevSlide] = useState(slide)
    const [currSlide, setCurrSlide] = useState(slide)
    let body = document.body,
        html = document.documentElement;

    let ReactCSSTransitionGroup = require('react-addons-css-transition-group');

    let lastScrollTop = 0;
    useEffect( () => {
        window.addEventListener("scroll", (event) => {
            let scroll = window.pageYOffset || document.documentElement.scrollTop;
            if (scroll > lastScrollTop) {
                 if (index < slides.length - 1 && index < scroll) {
                     index++;
                     setPrevSlide(currSlide);
                     setCurrSlide(slides[index - 1]);
                 }
             } else {
                 if (index > 1) {
                     index--;
                     setPrevSlide(currSlide);
                     setCurrSlide(slides[index - 1]);
                 }
            }
            // slide = <HomeSlide2></HomeSlide2>;
            console.log(index);
            lastScrollTop = scroll <= 0 ? 0 : scroll;
            console.log(slide);
        });
    }, []);
    return(
        <div className="body">
            <div className="slide-wrapper" id="slideH">
                <ReactCSSTransitionGroup transitionName = "example"
                                         transitionAppear = {true} transitionAppearTimeout = {500}
                                         transitionEnter = {false} transitionLeave = {false}>

                    {currSlide}
                </ReactCSSTransitionGroup>
            </div>
            {/*<HomeSlide1></HomeSlide1>
            <div data-aos="fade-up">
                {slide}
            </div>
            <div data-aos="fade-up">
                {slide}
            </div>
            <div data-aos="fade-up">
                {slide}
            </div>*/}
        </div>
    );
}

export default FutureHome;