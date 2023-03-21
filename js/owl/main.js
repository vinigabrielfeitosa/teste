$('.owl-carousel').owlCarousel({
    // stagePadding: 0,
    loop:true,
    nav:false,
    rewind: false,
    responsive:{
        900:{
            loop:true,
            items: 0
        },
        1200:{
            items: 8,
            loop:false
        }
    }
})

