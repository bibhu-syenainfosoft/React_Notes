import { Outlet,Link } from "react-router-dom";

export default function NRIHome() {
    return (
        <div className="container-fluid">
            <h2><b>NRI Homek</b></h2>
            <ul>
                <li><Link to='nlogin'>Login</Link></li>
                <li><Link to='nregister'>Register</Link></li>
            </ul>
            <Link to='/'>Back to Home</Link>
            <hr />
            <Outlet/>
        </div>
    )
}