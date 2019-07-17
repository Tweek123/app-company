import React, { Component } from "react";
import Slider from "react-slick-slider";

export default class SimpleSlider extends Component {

constructor(props) {
    super(props)
    this.users = this.props.users;


    if(window.innerWidth<=800) {
      this.state ={
        renderType: 'SLIDER_1'
      }
    }
    
    else if(window.innerWidth <= 1200) {
      this.state ={
        renderType: 'SLIDER_3'
      }
      }
    
    
    
    else if(window.innerWidth <= 1400) {
      this.state ={
        renderType: 'SLIDER_3'
      }
    }
      
      else {
        this.state ={
          renderType: 'SLIDER_4'
        }
      }


    this.updateDimensions = this.updateDimensions.bind(this); 
    window.addEventListener("resize", this.updateDimensions);
}

  updateDimensions() {
    console.log(window.innerWidth);
    if(window.innerWidth<=800) {
      this.setState({
        renderType: 'SLIDER_1'
      })
    }else if(window.innerWidth <= 1200) {
      this.setState({
        renderType: 'SLIDER_2'
      }) 
    } 
    
    else if(window.innerWidth <= 1400) {
        this.setState({
          renderType: 'SLIDER_3'
        }) 
      }
      
      else {
        this.setState({
          renderType: 'SLIDER_4'
        })
      }
    }

  render() {
    const settings4 = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      centerMode: true
    };

    const settings3= {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      centerMode: true
    };

    const settings2= {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      centerMode: true
    };

    const settings1= {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      centerMode: true
    };

    let carouselUsers = [];

    this.users.forEach(user => {
        carouselUsers.push(  
            <div>{user}</div>
        )
    });

    switch(this.state.renderType)  {
            case "SLIDER_4":
              return (
                <div style={{width: "90%", margin: "auto"}}>
                  {
                  
                  
                  <Slider {...settings4}>
                      {carouselUsers}
                  </Slider>

                  
                  }
                </div>
             )

             case "SLIDER_3":
                return (
                  <div style={{width: "90%", margin: "auto"}}>
                    {
                    
                    
                    <Slider {...settings3}>
                        {carouselUsers}
                    </Slider>
  
                    
                    }
                  </div>
               )

               case "SLIDER_2":
                  return (
                    <div style={{width: "90%", margin: "auto"}}>
                      {
                      
                      
                      <Slider {...settings2}>
                          {carouselUsers}
                      </Slider>
    
                      
                      }
                    </div>
                 )
               case "SLIDER_1":
                  return (
                    <div style={{width: "90%", margin: "auto"}}>
                      {
                      
                      
                      <Slider {...settings1}>
                          {carouselUsers}
                      </Slider>
    
                      
                      }
                    </div>
                 )
        
            }
  }
}