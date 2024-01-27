import { useState, useEffect } from 'react';
const CancelForm = ({ bookingId, onDeleteSuccess }) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setForm(false);
    try {
      // Make an HTTP POST request to save form data
      const response = await fetch(`${import.meta.env.VITE_API_URL}/saveFormData`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // Include the necessary form data in the request body
          name: formData.name,
          bankname: formData.bankname,
          accountNumber: formData.accountNumber,
          ifscCode: formData.ifscCode,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to save form data');
      }

      // Assuming the server responds with JSON data containing the saved details
      const savedData = await response.json();

      // Update the result state with the saved data
      setResult({
        guestHouse: 'booking.guestHouse',
        name: savedData.name,
        branch: 'booking.branch',
        accountNumber: savedData.accountNumber,
        ifscCode: savedData.ifscCode,
        arrivalDate: arrivalDate.toDateString(),
        cancellationDate: cancellationDate.toDateString(),
        numberOfDays,
        amountDeducted,
        amountReturned,
      });

      onDeleteSuccess()
    } catch (error) {
      console.error('Error saving form data:', error.message);
    }
  };

  return (
    <>
      {form && <div>
        <form onSubmit={handleSubmit}>
          <p>All the fields marked with (*) are mandatory.<br/>
            Please fill the following form for reimbursement of room charges. 
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