
import { Link, Outlet } from "react-router-dom"

export default function BankAppHome() {
    return (
        <div className="container-fluid">
            <h2><b>Welcome to HDFC Bank</b></h2>
            <Link to='/nri'>NRI</Link> | <Link to='/personal'>Personal</Link>
            <br />
            <hr />
            <Outlet />
        </div>
    )
}