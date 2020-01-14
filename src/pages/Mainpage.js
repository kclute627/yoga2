import React, { Component, Fragment } from "react";
import { Document, Page } from 'react-pdf';
import { connect } from "react-redux";
import Fade from "react-reveal/Fade";
import AliceCarousel from "react-alice-carousel";
import PhotoBlock from "../Components/PhotoBloc";
import photo1 from "../assets/yoga2.jpg";
import profile from "../assets/profile.jpg";
import photo2 from "../assets/yoga1.jpg";
import photo3 from "../assets/yoga3.jpg";
import photo4 from "../assets/yoga4.jpg";
import photo5 from "../assets/yoga5.jpg";
import photo6 from "../assets/yoga6.jpg";
import photo7 from "../assets/yoga7.jpg";
import photo8 from "../assets/yoga8.jpg";
import photo9 from "../assets/yoga9.jpg";
import file from "../assets/pdf/invoice.pdf";






class Mainpage extends Component {
    state = {
      email: '',
      error: false,
      message: false,
    }


    changeHandler = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      })
    }

    submitHandler = ( e ) => {
      e.preventDefault();

      if(this.emailCheck(this.state.email)){

        this.setState({ 
           email: '',
          error: false,
          message: true,

        })
        setTimeout( () => {
          this.setState( prevState => ({
            message: !prevState.message
          }));
        }, 4000);
      }else{
        this.setState({error: true});
      }

      
    }


    emailCheck= (email)=>{
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    }


  render() {
    const home = (
      <Fade right>
        <div className="mainpage__home">
          <div className="mainpage__home-header">
            <div className="mainpage__home-header-1">At Home Yoga With Amy</div>
            <Document file={file} >

            </Document>
            <div className="mainpage__home-header-2">
              Schedule a home yoga session
            </div>

            <button className="mainpage__home-btn">Schedule a Session</button>
          </div>
        </div>
      </Fade>
    );

    const about = (
        <div className="about">

        
        <div className="about__left">
          <img src={profile} alt="" className="about__img" />
          <div className="about__right">
          <h1 className="about__header">About Amy</h1>
          <div className="about__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Malesuada nunc vel risus commodo viverra maecenas accumsan lacus
            vel. Sapien et ligula ullamcorper malesuada proin libero. Lacus sed
            viverra tellus in hac habitasse platea dictumst. Nisl vel pretium
            lectus quam id leo. didunt ut labore et dolore magna aliqua.
            Malesuada nunc vel risus commodo viverra maecenas accumsan lacus
            vel. Sapien et ligula ullamcorper malesuada proin libero. Lacus sed
            viverra tellus in hac habitasse platea dictumst. Nisl didunt ut labore et dolore magna aliqua.
            Malesuada nunc vel risus commodo viverra maecenas accumsan lacus
            vel. Sapien et ligula ullamcorper malesuada proin libero. Lacus sed
            viverra tellus in hac habitasse platea dictumst. Nisl 
          </div>
          <div className="about__text-mobile">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Malesuada nunc vel risus commodo viverra maecenas accumsan lacus
            vel. Sapien et ligula ullamcorper malesuada proin libero. Lacus sed
            viverra tellus  
          </div>
        </div>
        </div>
        
        </div>
     
    );
    const contact = (
      <Fade right>
        <div className="contact">
          <div className="contact-header">
            <div className="contact-header-1">Contact Amy</div>
            <div className="contact-header-2">Schedule a Home Yoga Session</div>
            <form className="form" name='contact' onSubmit={this.submitHandler}>
              <input
              type="email"
              name='email'
              placeholder="EMAIL"
              className="contact-header-email"
              value={this.state.email}
              onChange={this.changeHandler}
            />
            {this.state.error ?  
            <div className="error"> Please Enter a Valid Email Address </div> : 
            this.state.message ?
            <div className="message">Thank You Amy will reach out to you within 24 Hours</div>
            :
            null}
            <input type="submit" value="Submit" className="contact-btn" />
            <input type="hidden" name="form-name" value="contact" />

            </form>
            
          </div>
        </div>
      </Fade>
    );
    const photos = (
      <Fade right>
        <Fragment>

        
        <div className="photos">
          <PhotoBlock img={photo1} alt="yoga Chicago" />
          <PhotoBlock img={photo2} alt="yoga Chicago" />
          <PhotoBlock img={photo3} alt="yoga Chicago" />
          <PhotoBlock img={photo4} alt="yoga Chicago" />
          <PhotoBlock img={photo5} alt="yoga Chicago" />
          <PhotoBlock img={photo6} alt="yoga Chicago" />
          
         
        </div>
        <div className="photos-phone">
        <AliceCarousel
              items={[photo1, photo3, photo9, photo7, photo8].map((cur, i) => (
                <div className="image-phone">
                  <img className={`image-phone-${i}`} src={cur} alt="" />
                </div>
              ))}
              duration={1800}
              
              autoPlay={true}
              dotsDisabled={true}
              buttonsDisabled={true}
              responsive={{
                0: {
                  items: 1
                },
                415: {
                  items: 1 
                }

              }}
            />

        </div>
        </Fragment>
      </Fade>
    );

    return (
      <Fade right duration={5000}>
        <div className="mainpage__container">
          {this.props.menu === "home" ? home : null}
          {this.props.menu === "contact" ? contact : null}
          {this.props.menu === "about" ? about : null}
          {this.props.menu === "photos" ? photos : null}
          {!this.props.menu ? "home" : null}
        </div>
      </Fade>
    );
  }
}

const mapStateToProps = state => {
  return {
    menu: state.menu
  };
};

export default connect(mapStateToProps)(Mainpage);
