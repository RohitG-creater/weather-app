import { useState ,  navigate} from "react";
import axios from "axios";

function Register(){

    const [formData,setFormData] = useState({
         name : '',
         password : '',
         email : '',
         phone : ''
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,[name]: value 
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:5000/save-registration", formData)
        .then(result => {console.log(result)
          document.cookie = 'userLogged=true; path=/';
            window.location.replace("/weather-report")
        })
        .catch(err => console.log(err))
    }
    return (
        <><div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                Register
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" value={formData.name} onChange={handleChange} name="name" id="name" placeholder="Enter your name" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={formData.email} onChange={handleChange} name="email" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={formData.password} onChange={handleChange} name="password" id="password" placeholder="Password" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input type="tel" className="form-control" value={formData.phone}  onChange={handleChange} name="phone" id="phone" placeholder="Enter phone number" />
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div></>
    )
}

export default Register;