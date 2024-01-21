import { useState, useEffect } from 'react';
const CancelPopUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    branch: '',
    guestHouse : '',
    accountNumber: '',
    ifscCode: '',
  });
  const [result, setResult] = useState(null);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Calculate cancellation details
    const arrivalDate = new Date(); // Assuming user arrival date is the current date
    const cancellationDate = new Date();
    const numberOfDays = Math.floor((cancellationDate - arrivalDate) / (1000 * 60 * 60 * 24));

    const originalAmount = 1000; // Replace with the actual amount
    const leftDays = Math.floor((cancellationDate - arrivalDate) / (1000 * 60 * 60 * 24));
    let amountDeducted;
    if(leftDays >= 3) {
      amountDeducted = 0.5 * originalAmount;

    }else if(leftDays < 3){
      amountDeducted = 0.75 * originalAmount;
    }
    else{
      alert("You can not cancel the booking");
    }
    const amountReturned = originalAmount - amountDeducted;
    setResult({
      name: formData.name,
      branch: formData.branch,
      accountNumber: formData.accountNumber,
      ifscCode: formData.ifscCode,
      arrivalDate: arrivalDate.toDateString(),
      cancellationDate: cancellationDate.toDateString(),
      numberOfDays,
      amountDeducted,
      amountReturned,
    });
  };
  return (
    <>
      <div className="popup">
        <form onSubmit={handleSubmit}>
          <p>All the fields marked with (*) are mandatory.
          </p>
          <div className="col-md-12">
            <label htmlFor="firstName" className="form-label">
              Name<span className="asterisk">*</span>
            </label>
            <input type="text" className="form-control" id="firstName" name="name" value={formData.name} onChange={handleInputChange} required />
          </div>
          <div className="col-md-6">
            <label htmlFor="Branch" className="form-label">
              Branch<span className="asterisk">*</span>
            </label>
            <input type="text" className="form-control" id="Branch" name="branch" value= {formData.branch} onChange={handleInputChange} required />
          </div>
          <div className="col-md-6">
            <label htmlFor="GuestHouse" className="form-label">
              GuestHouse<span className="asterisk">*</span>
            </label> 
            <select id="GuestHouse" name="guestHouse" value = {formData.guestHouse} className="form-select" aria-label="Default select example" onChange={handleInputChange} >
              <option selected>Choose the GuestHouse</option>
              <option value="Guest House">Guest House</option>
              <option value="SAC Guest House">SAC Guest House</option>
              <option value="Mega Guest House">Mega Guest House</option>
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="accountNumber" className="form-label">
              Account Number<span className="asterisk">*</span>
            </label>
            <input type="text" className="form-control" id="accountNumber" name="accountNumber" value={formData.accountNumber} onChange={handleInputChange} required />
          </div>
          <div className="col-md-6">
            <label htmlFor="IFSC" className="form-label">
              IFSC<span className="asterisk">*</span>
            </label>
            <input type="text" className="form-control" id="IFSC" name="ifscCode" value={formData.ifscCode} onChange={handleInputChange} required />
          </div>
          <br />
          <button type = "sumbit">Submit</button>
        </form>
      </div>
      {result && (
        <div>
        <h2>Cancellation Details:</h2>
        <p>Name: {result.name}</p>
        <p>Branch: {result.branch}</p>
        <p>Account Number: {result.accountNumber}</p>
        <p>IFSC Code: {result.ifscCode}</p>
        <p>Guest House: {result.guestHouse}</p>
        <p>Arrival Date: {result.arrivalDate}</p>
        <p>Cancellation Date: {result.cancellationDate}</p>
        <p>Number of Days: {result.numberOfDays}</p>
        <p>Amount Deducted: {result.amountDeducted}</p>
        <p>Amount Returned: {result.amountReturned}</p>
      </div>
      )}
    </>
  )
}
export default CancelPopUp;