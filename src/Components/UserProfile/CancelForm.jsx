import { useState, useEffect } from 'react';
const CancelForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    bankname : '',
    accountNumber: '',
    ifscCode: '',
  });
  const [form, setForm] = useState(true);
  const [result, setResult] = useState(null);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault(); 
    setForm(false);
    // Calculate cancellation details 
    const cancellationDate = new Date();
    
    const numberOfDays = 3; // replace with number of days
    const arrivalDate = new Date("2024-02-01"); // replace with the actual arrival date
    // difference of days 
    let differenceInMilliseconds = arrivalDate - cancellationDate;
    let differenceInSeconds = differenceInMilliseconds / 1000;
    let differenceInMinutes = differenceInSeconds / 60;
    let differenceInHours = differenceInMinutes / 60;
    let leftDays = differenceInHours / 24;
    let Amount;
    if(Booking.guestHouseSelected === 1){
      Amount = 1000; // Replace with the actual amount 
    }
    else{
      Amount = 600;
    }
    const originalAmount = Amount * numberOfDays;
    let amountDeducted;
   
    console.log("cancellationDate" + cancellationDate + "numberOfDays" + numberOfDays + "arrivalDate" + arrivalDate + "leftDays" + leftDays);
    if(leftDays >= 3) {
      amountDeducted = 0.25 * originalAmount;
    }else if(leftDays < 3 && leftDays >= 1) {
      amountDeducted = 0.50 * originalAmount;
    }
    else{
      alert("You can not cancel the booking");
    }
    const amountReturned = originalAmount - amountDeducted;
    console.log(amountDeducted, amountReturned);
    setResult({
      guestHouse : 'booking.guestHouse',
      name: formData.name,
      branch: 'booking.branch', 
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
      {form && <div>
        <form onSubmit={handleSubmit}>
          <p>All the fields marked with (*) are mandatory.<br/>
            Please fill the following form for reimbursement of room chargers. 
          </p>
          <div className="col-md-12">
            <label htmlFor="firstName" className="form-label">
              Name<span className="asterisk">*</span>
            </label>
            <input type="text" className="form-control" id="firstName" name="name" value={formData.name} onChange={handleInputChange} required />
          </div>
          <div className="col-md-6">
            <label htmlFor="Bankname" className="form-label">
              Bank Name<span className="asterisk">*</span>
            </label>
            <input type="text" className="form-control" id="Bankname" name="bankname" value= {formData.bankname} onChange={handleInputChange} required />
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
          <button type = "submit">Submit</button>
        </form>
      </div>}
      {result && (
        <div>
        <h2>Cancellation Details:</h2>
        <table>
        <tr><td><strong>Name:</strong> {result.name}</td></tr>
        <tr><td><strong>Branch:</strong> {result.branch}</td>
        </tr>
        <tr><td><strong>Account Number:</strong> {result.accountNumber}</td></tr>
        <tr><td><strong>IFSC Code:</strong> {result.ifscCode}</td></tr>
        <tr><td><strong>Guest House:</strong> {result.guestHouse}</td></tr>
        <tr><td><strong>Arrival Date:</strong> {result.arrivalDate}</td></tr>
        <tr><td><strong>Cancellation Date:</strong> {result.cancellationDate}</td></tr>
        <tr><td><strong>Number of Days:</strong> {result.numberOfDays}</td></tr>
        <tr><td><strong>Amount Deducted:</strong> {result.amountDeducted}</td></tr>
        <tr><td><strong>Amount Returned:</strong> {result.amountReturned}</td></tr>
        <tr><td>for deductation please check the guidelines on the home page.</td></tr>
        </table>
      </div>
      )}
    </>
  )
}
export default CancelForm;