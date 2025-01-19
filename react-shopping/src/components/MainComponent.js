import { BrowserRouter, Routes,Route } from "react-router-dom";
import NRIHome from "./NRI/NRIHome";
import BankAppHome from "./BankAppHome";
import NRILogin from "./NRI/NRILogin";
import NRIRegister from "./NRI/NRIRegister";
import PersonalHome from "./Personal/PersonalHome";
import PersonalLogin from "./Personal/PersonalLogin";
import PersonalRegister from "./Personal/PersonalRegister";

export default function MainCogmponent() {
    return (
        <div className="container-fluid">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<BankAppHome />}>
                        <Route path='nri' element={<NRIHome />}>
                            <Route path='nlogin' element={<NRILogin />} />
                            <Route path='nregister' element={<NRIRegister />} />
                        </Route>
                        <Route path='personal' element={<PersonalHome />}>
                            <Route path='plogin' element={<PersonalLogin />} />
                            <Route path='pregister' element={<PersonalRegister />} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>


        </div>
    )
}