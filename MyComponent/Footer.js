import React from 'react'
import 'D:/github/OnlineBooks/src/css/Main1.css';
export const Footer = () => {
    return (
        <div className="bg-dark text-light">
            <p className="text-center"></p>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h5>POLICIES</h5>
                        <p>Terms</p>
                        <p>Privacy</p>
                        <p>Copyright</p>
                    </div>
                    <div className="col">
                       <h5>Address</h5>
                       <p>B/7,Siddhakala chs</p>
                       <p>Sawarkar Nagar</p>
                       <p>Thane-400606</p>
                      </div>
                    <div className="col">
                        <h5>Follow Us</h5>
                        <p><a href='https://www.linkedin.com/in/mayurvejre23/'>LinkedIn</a></p>
                        <p><a href='https://www.instagram.com/_mayur_v_2310_/'>Instagram</a></p>
                        <p><a href='https://www.facebook.com/mayur.vejare'>Facebook</a></p>
                     </div>
                     <div className="col">
                       <h5>Contact Us</h5>
                       <p>mayur.vejare27@gmail.com</p>
                       <p>8369161798</p>
                       <p>8424031062</p>
                      </div>
                  </div>
              </div>
            <h6 className="copy">Copyright<span className='c'> &copy; </span>Online BookStore.com</h6>

        </div>
    )
}
