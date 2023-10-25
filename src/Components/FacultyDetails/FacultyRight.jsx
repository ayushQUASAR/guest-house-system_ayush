import '../../style/facultyalumni.css'
import '../../style/MainContainer.css'
export default function FacultyRight() {
  return (
    <div>
      <div className="r">
        <h1 className="rheading">Enter Faculty Details</h1>
      </div>
      <div className="row input">
        <div className="col-md-6 col-sm-12">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="First Name"
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Last Name"
          />
        </div>
      </div>
      
      
      
      <div className="row input">
        <div className="col-12">
          <input type="email" className="form-control" placeholder="Email Address" />
        </div>
      </div>

      <div className="row input">
        <div className="col-12">
          <input type="text" className="form-control" placeholder="Department" />
        </div>
      </div>

      <div className="row input">
        <div className="col-md-3 col-sm-12">
          <div className="input-group">
            <input type="text" className="form-control" value="+91" readOnly />
          </div>
        </div>
        <div className="col-md-9 col-sm-12">
          <input
            type="text"
            className="form-control"
            placeholder="Phone Number"
          />
        </div>
      </div>
      <div className="mt-auto justify-content-end d-flex">
        <button type="submit"className="btn btn-primary btn-lg rounded register-btn">Register</button>
      </div>
    </div>
  );
}
