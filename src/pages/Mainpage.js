import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Fade from "react-reveal/Fade";
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






class Mainpage extends Component {
  render() {
    const home = (
      <Fade right>
        <div className="mainpage__home">
          <div className="mainpage__home-header">
            <div className="mainpage__home-header-1">At Home Yoga With Amy</div>
            <div className="mainpage__home-header-2">
              Schedule a home yoga session
            </div>

            <button className="mainpage__home-btn">Schedule a Session</button>
          </div>
        </div>
      </Fade>
    );

    const about = (
      <Fragment>
        <div className="about__left">
          <img src={profile} alt="" className="about__img" />
        </div>
        <div className="about__right">
          <h1 className="about__header">About Amy</h1>
          <div className="about__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Malesuada nunc vel risus commodo viverra maecenas accumsan lacus
            vel. Sapien et ligula ullamcorper malesuada proin libero. Lacus sed
            viverra tellus in hac habitasse platea dictumst. Nisl vel pretium
            lectus quam id leo. Consectetur lorem donec massa sapien faucibus.
            Elementum tempus egestas sed sed risus pretium quam. Netus et
            malesuada fames ac turpis egestas. Non enim praesent elementum
            facilisis leo vel fringilla est ullamcorper. Sit amet risus nullam
            eget felis eget nunc. Quis auctor elit sed vulputate mi. Scelerisque
            in dictum non consectetur a erat nam at lectus.
          </div>
        </div>
      </Fragment>
    );
    const contact = (
      <Fade right>
        <div className="contact">
          <div className="contact-header">
            <div className="contact-header-1">Contact Amy</div>
            <div className="contact-header-2">Schedule a Home Yoga Session</div>
            <input
              type="email"
              placeholder="EMAIL"
              className="contact-header-email"
            />
            <input type="submit" value="Submit" className="contact-btn" />
          </div>
        </div>
      </Fade>
    );
    const photos = (
      <Fade right>
        <div className="photos">
          <PhotoBlock img={photo1} alt="yoga Chicago" />
          <PhotoBlock img={photo2} alt="yoga Chicago" />
          <PhotoBlock img={photo3} alt="yoga Chicago" />
          <PhotoBlock img={photo4} alt="yoga Chicago" />
          <PhotoBlock img={photo5} alt="yoga Chicago" />
          <PhotoBlock img={photo6} alt="yoga Chicago" />
          
         
        </div>
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
