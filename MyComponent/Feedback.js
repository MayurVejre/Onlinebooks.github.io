import React from 'react'
import 'D:/github/OnlineBooks/src/css/feedback.css';
export const Feedback = () => {
    return (
        <section>
            <div className='x'>
            <h1 className='y'>FeedBack Form</h1>
            <br/>
            <form className="row g-3 needs-validation" novalidate>
            <div className='col-md-2'></div>
  <div className="col-md-4">
    <label for="validationCustom01" className="form-label">First name</label>
    <input type="text" className="form-control" id="validationCustom01" placeholder="First Name" required/>
    <div className="valid-feedback">
      Mayur vejre
    </div>
  </div>
  <div className="col-md-4">
    <label for="validationCustom02" className="form-label">Last name</label>
    <input type="text" className="form-control" id="validationCustom02" placeholder="Last Name" required/>
    <div className="valid-feedback">
      
    </div>
  </div>
  <div className='col-md-2'></div><br/><br/><br/>
  <div className='col-md-2'></div>
  <div className="col-md-5">
    <label for="validationCustom03" className="form-label">Email Id</label>
    <input type="text" className="form-control" id="validationCustom03" placeholder='Email Id' required/>
    <div className="invalid-feedback">
        Please Provide Your Email Id
    </div>
  </div>
    
  <div className="col-md-3">
    <label for="validationCustom05" className="form-label">Mobile No.</label>
    <input type="text" className="form-control" id="validationCustom05" placeholder='Mobile No.' required/>
    <div className="invalid-feedback">
      Please provide valid Mobile Number
    </div>
  </div>
  <div className='col-md-2'></div>
  <div className='col-md-2'></div>
  <div className='col-md-8'>
    <label for="validationCustom05" className='form-label'>Comment</label>
    <textarea type="text" rows="4" cols="115" className='comment' id='validationCustom05' placeholder='Comment'/>
  </div>
  <div className='col-md-2'></div>
  <div className='col-md-4'></div>
  <div className="col-md-3">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
      <label className="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div className='col-md-5'></div>
  <div className='col-md-4'></div>
  <div className="col-md-3">
    <button className="btn btn-primary" type="submit">Submit</button>
  </div>
</form>
        </div><br/><br/><br/><br/>
        </section>
    )
}
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
   
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()