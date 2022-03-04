import React from 'react'
import img1 from 'D:/github/OnlineBooks/src/Images/1bn.png';
import img2 from 'D:/github/OnlineBooks/src/Images/2bn.png';
import img3 from 'D:/github/OnlineBooks/src/Images/3bn.png';



export const MainFile = (props) => {
    return (
      <>
      <section>
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src={img1} className="d-block w-100" style={{height:'37rem'}} alt="..."/>
    </div>
    <div className="carousel-item">
    <img src={img2} className="d-block w-100" style={{height:'37rem'}}alt="..."/>
    </div>
    <div className="carousel-item">
    <img src={img3} className="d-block w-100" style={{height:'37rem'}} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

        </div>
        </section>
        </>
    )
}
