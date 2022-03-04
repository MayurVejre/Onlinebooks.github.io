import React from 'react'
import img1 from 'D:/github/OnlineBooks/src/Images/9english.jfif';
import pdf1 from 'D:/github/OnlineBooks/src/pdf/10th/English.pdf';
import img2 from 'D:/github/OnlineBooks/src/Images/9marathi.jfif';
import pdf2 from 'D:/github/OnlineBooks/src/pdf/10th/Marathi.pdf';
import img3 from 'D:/github/OnlineBooks/src/Images/9science.jfif';
import pdf3 from 'D:/github/OnlineBooks/src/pdf/10th/Science1.pdf';
import img4 from 'D:/github/OnlineBooks/src/Images/Science2.jfif';
import pdf4 from 'D:/github/OnlineBooks/src/pdf/10th/Science2.pdf';
import img5 from 'D:/github/OnlineBooks/src/Images/9history.jfif';
import pdf5 from 'D:/github/OnlineBooks/src/pdf/10th/History.pdf';
import img6 from 'D:/github/OnlineBooks/src/Images/9geography.jfif';
import pdf6 from 'D:/github/OnlineBooks/src/pdf/10th/Geography.pdf';
import img7 from 'D:/github/OnlineBooks/src/Images/9maths1.jfif';
import pdf7 from 'D:/github/OnlineBooks/src/pdf/10th/Geometry.pdf';
import img8 from 'D:/github/OnlineBooks/src/Images/9maths2.jfif';
import pdf8 from 'D:/github/OnlineBooks/src/pdf/10th/Algebra.pdf';
import 'D:/github/OnlineBooks/src/css/Main1.css';

export const Arts = () => {
    return (
      <>
      <section>
      <h3 className="Nametitle">Arts Books</h3>
      <div>
              <div className="container">
                <div className="row">
                <div className="col" style={{width:'18rem'},{height:'40rem'}} >
                    <div className="card" >
                    <img src={img7} className="card-img-top" alt="..."/>
                      <div className="card-body">
                      <h5 className="card-title">Geometry</h5>
                      <a href={pdf7} className="btn btn-primary" download>Download</a>
                      </div>
                    </div>
                  
                  <div className="col"  style={{width:'18rem'},{height:'40rem'}} >
                    <div className="card">
                    <img src={img8} className="card-img-top" alt="..."/>
                      <div className="card-body">
                      <h5 className="card-title">Algebra</h5>
                      <a href={pdf8} className="btn btn-primary">Download</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col"  style={{width:'18rem'},{height:'40rem'}} >
                    <div className="card">
                    <img src={img3} className="card-img-top" alt="..."/>
                      <div className="card-body">
                      <h5 className="card-title">Science1</h5>
                      <a href={pdf3} className="btn btn-primary">Download</a>
                      </div>
                    </div>
                  
                  <div className="col"  style={{width:'18rem'},{height:'40rem'}} >
                    <div className="card">
                    <img src={img4} className="card-img-top" alt="..."/>
                      <div className="card-body">
                      <h5 className="card-title">Science2</h5>
                      <a href={pdf4} className="btn btn-primary">Download</a>
                      </div>
                    </div>
                  </div>
                  </div>

                  <div className="col"  style={{width:'18rem'},{height:'40rem'}} >
                    <div className="card">
                    <img src={img1} className="card-img-top" alt="..."/>
                      <div className="card-body">
                      <h5 className="card-title">English</h5>
                      <a href={pdf1} className="btn btn-primary">Download</a>
                      </div>
                    </div>
                  
                  <div className="col"  style={{width:'18rem'},{height:'40rem'}} >
                    <div className="card">
                    <img src={img2} className="card-img-top" alt="..."/>
                      <div className="card-body">
                      <h5 className="card-title">Marathi</h5>
                      <a href={pdf2} className="btn btn-primary">Download</a>
                      </div>
                    </div>
                  </div>
                  </div>
                  

               


                  <div className="col" style={{width:'18rem'},{height:'40rem'}} >
                    <div className="card" >
                    <img src={img5} className="card-img-top" alt="..."/>
                      <div className="card-body">
                      <h5 className="card-title">History</h5>
                      <a href={pdf5} className="btn btn-primary" download>Download</a>
                      </div>
                    </div>
                  
                  <div className="col"  style={{width:'18rem'},{height:'40rem'}} >
                    <div className="card">
                    <img src={img6} className="card-img-top" alt="..."/>
                      <div className="card-body">
                      <h5 className="card-title">Geography</h5>
                      <a href={pdf6} className="btn btn-primary">Download</a>
                      </div>
                    </div>
                  </div>
                </div>

               
                


                </div>
              <div>
              
                </div>
                </div>
                </div>
            
        </section>
    </>
    )
}

