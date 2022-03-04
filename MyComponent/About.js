import React from 'react'
import 'D:/github/OnlineBooks/src/css/about.css';
import img1 from 'D:/github/OnlineBooks/src/Images/mayur.JPG';
export const About = () => {
    return (
        <div>
            <section className='z'>
                <h1 className='a'>About Us</h1>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <h5 className='d'>Mayur Vejre</h5>
                            <div>
                            <img src={img1} className="e" alt="..."/></div>
                        </div>
                        <div className='col'>
                            <p className='b'>Mayur Vejre is a visionary B2B digital marketer and an effective CEO with over 20 years of experience in building highly successful organizations. A serial entrepreneur, his portfolio includes multiple thriving businesses.
<br/>
<br/>
Focusing on solutions for B2B marketing, digital marketing, demand generation, data management, and security software, among others, Alexander embraces innovation and turns concepts & methodologies into products that drive ROI. In fact, his companies made it into Inc 5000, Inc 500, and Entrepreneur 360 lists as some of the best, fastest-growing private companies in America.
<br/>
<br/>
Alexander serves on several advisory boards. He is a graduate of Babson College with a degree in Entrepreneurship, Marketing, and International Business.</p>
                        </div>
                    </div>
                </div>
                
            </section>
        </div>
    )
}
