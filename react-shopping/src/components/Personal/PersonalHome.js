import { Outlet,Link } from "react-router-dom";

export default function PersonalHome() {
    return (
        <div className="container-fluid">
            <h2><b>Personal Home</b></h2>
            <ul>
                <li><Link to='plogin'>Login</Link></li>
                <li><Link to='pregister'>Register</Link></li>
            </ul>
            <Link to='/'>Back to Home</Link>
            <hr />
            <Outlet/>
        </div>
    )
}