import '../../style/facultyalumni.css'
export default function StudentRight() {
  return (
    <div>
      <div className="r">
        <h1 className="rheading">Enter Student Details</h1>
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
          <input type="text" className="form-control" placeholder="Roll Number" />
        </div>
      </div>
      <div className="row input">
        <div className="col-12">
          <input type="email" className="form-control" placeholder="Branch" />
        </div>
      </div>

      {/* <button
        type="button"
        // className="form-control btn btn-primary btn-sm rounded"
        className="btn btn-primary btn-lg rounded register-btn"
      >
        Register
      </button> */}
      <div className="mt-auto justify-content-end d-flex">
        <button className="btn btn-primary btn-lg rounded register-btn">Register</button>
      </div>
    </div>
  );
}
