gsap.fromTo('.ironman', { opacity: 0, scale: 0, y: '-100%' }, { duration: 3, scale: 1, delay: 0.5, opacity: 1, y: 40, ease: 'back' })

const floatAnimation = () => {
    const tlCan = new TimelineMax({ repeat: -1 });
    /*Can Animation*/
    tlCan
    //move top left
        .to('.ironman > img', 3, { y: '-=30', x: '+=20', rotation: '-=5', ease: Power1.easeInOut })

    //move down right
    .to('.ironman > img', 2, { y: '+=30', x: '-=20', rotation: '-=5', ease: Power1.easeInOut })


    .to('.ironman > img', 3, { y: '-=20', rotation: '+=5', ease: Power1.easeInOut })

    .to('.ironman > img', 3, { y: '+=20', rotation: '+=5', ease: Power1.easeInOut })


    .to('.ironman > imgn', 3, { y: '-=50', ease: Power1.easeInOut })

    .to('.ironman > img', 3, { y: '+=50', ease: Power1.easeInOut })


    .to('.ironman > img', 3, { y: '-=30', ease: Power1.easeInOut })

    .to('.ironman > img', 3, { y: '+=30', ease: Power1.easeInOut })


    .to('.ironman > img', 2, { y: '-=30', ease: Power1.easeInOut })

    .to('.ironman > img', 2, { y: '+=30', ease: Power1.easeInOut })

    TweenLite.to(tlCan, 27, { ease: Power1.easeInOut })

}
floatAnimation();