import '../style/contact.css';
const Contact = () =>{
    return(
        <>
        
            <div  className="row outer-container" style = {{padding : '0rem 0rem', fontSize : '' }}>
                <div className="box col-sm-12 col-md-6 col-lg-3" >
                    <h2 style = {{color : '#008cff'}}>Location</h2>
                    <p>G.T Road, Amritsar Bypass, Jalandhar, Punjab, India-144008</p>
                </div>
                <div className="box col-sm-12 col-md-6 col-lg-3" >
                    <h2 style = {{color : '#008cff'}}> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/></svg> Email Id</h2>
                    <p>rajbirsaini@nitj.ac.in</p>
                </div>
                <div className="box col-sm-12 col-md-6 col-lg-3" >
                    <h2 style = {{color : '#008cff'}}>Phone Number:</h2>
                    <p>8968659090</p>
                </div>
            </div>
        
        </>
    )
}
export default Contact;