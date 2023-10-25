import '../../style/facultyalumni.css'
import '../../style/MainContainer.css'
export default function AlumniRight() {
  return (
    <div>
      <div className="r">
        <h1 className="rheading">Enter Alumni Details</h1>
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
        <div className="col-md-6 col-sm-12">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Branch"
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Batch"
          />
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
      
      <div className="row input">
        <div className="col-12">
          <input type="text" className="form-control" placeholder="Current Job Profile" />
        </div>
      </div>
      <div className="mt-auto justify-content-end d-flex">
        <button type="submit" className="btn btn-primary btn-lg rounded register-btn">Register</button>
      </div>
    </div>
  );
}
