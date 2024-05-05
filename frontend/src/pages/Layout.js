import { Link } from 'react-router-dom';

function Layout(){
  const cookies = document.cookie.split(';')[0];
return(
    <>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
  Your Website Name
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <ul className="navbar-nav mr-auto">
      </ul>
    <ul className="navbar-nav ml-auto">
      {
        cookies == null || cookies == ""? (
          <>
          <li className="nav-item">
        {/* <a className="nav-link" href="#">Login</a> */}
        <Link to="/login" className='nav-link'>Login</Link>

      </li>
      <li className="nav-item">
        {/* <a className="nav-link" href="#">Register</a> */}
        <Link to="/register" className='nav-link'>Register</Link>

      </li>
          </>
        ) : <>
        <li className="nav-item">
        {/* <a className="nav-link" href="#">Register</a> */}
        <Link to="/logout" className='nav-link'>Logout</Link>
      </li>
        </>
      }
     
      <li className="nav-item">
        {/* <a className="nav-link" href="#">Register</a> */}
        <Link to="/weather-report" className='nav-link'>Weather report</Link>

      </li>
    </ul>
  </div>
</nav>
    </>
)
}

export default Layout;