import { useState } from "react";

export default function FormValidations() {
    const [users] = useState([
        { userName: 'john' },
        { userName: 'john12' },
        { userName: 'jilu' },
        { userName: 'bibhu' }
    ]);
    const [msg, setMsg] = useState("");
    const [userValid, setUserValid] = useState(false);
    const [pwdMsg, setPwdMsg] = useState("");
    const [pwdValid, setPwdValid] = useState(false);
    const [pwdValid2, setPwdValid2] = useState(false);
    const [capsSts, setCapsSts] = useState(false);
    const [jsonObj, setJsonObj] = useState({ Username: "", Password: "", City: "" });
    const [citySts, setCitySts] = useState("");

    function handleChange(e) {
        for (var value of users) {
            if (value.userName === e.target.value) {
                setMsg("UserId Taken - Try Another!!!");
                setUserValid(true);
                break;
            } else {
                setMsg("UserId Available!!!");
                setUserValid(false);
            }
        }
    }

    function hideMsg() {
        setMsg("");
    }

    function handlePwdMsg(x) {
        if (x.target.value.match(/(?=.*[A-Z])\w{4,10}/)) {
            setPwdMsg("Strong Password");
            setPwdValid(true);
            setPwdValid2(false);
        } else {
            if (x.target.value.length < 4) {
                setPwdMsg("Poor Password");
                setPwdValid(false);
                setPwdValid2(true);
            } else {
                setPwdMsg("Weak Password");
                setPwdValid(false);
                setPwdValid2(false);
            }
        }
    }

    function hidePwdMsg() {
        setPwdMsg("");
    }

    function capsVerifySts(e) {
        if (e.keyCode >= 65 && e.keyCode <= 90 || e.which >= 65 && e.which <= 90) {
            setCapsSts(true);
        }
        else {
            setCapsSts(false);
        }
    }
    function handleUserChange(e) {
        setJsonObj({
            "Username": e.target.value,
            "Password": jsonObj.Password,
            "City": jsonObj.City
        })
    }
    function handlePwdChange(e) {
        setJsonObj({
            "Username": jsonObj.Username,
            "Password": e.target.value,
            "City": jsonObj.City
        })
    }
    function handleCityChange(e) {
        setJsonObj({
            "Username": jsonObj.Username,
            "Password": e.target.Password,
            "City": e.target.value
        })
    }
    function registerClick() {
        alert(JSON.stringify(jsonObj))
    }
    function dropChange(e) {
        if (e.target.value == 'nocity') {
            setCitySts('Select a City');
        }
        else {
            setCitySts('');
        }
    }

    return (
        <div>
            <div>
                <dl>UserName</dl>
                <dt>
                    <input
                        type="text" onChange={handleUserChange}
                        onBlur={hideMsg}
                        onKeyUp={handleChange}
                        className="w-25 form-control"
                    />
                </dt>
                <dd className={userValid === true ? "text-danger" : "text-success"}>
                    {msg}
                </dd>
            </div>
            <div>
                <dl>Password</dl>
                <dt>
                    <input
                        type="password" onChange={handlePwdChange}
                        onBlur={hidePwdMsg} onKeyPress={capsVerifySts}
                        onKeyUp={handlePwdMsg}
                        className="w-25 form-control"
                    />
                </dt>
                <dd
                    className={
                        pwdValid
                            ? "text-success"
                            : pwdValid2
                                ? "text-danger"
                                : "text-warning"
                    }
                >
                    {pwdMsg}
                </dd>
                <dd className={capsSts ? 'd-block' : 'd-none'}>
                    <span className="text-warning"><span className="bi bi-exclamation-triangle"></span> Caps ON</span>
                </dd>
                <dd><select onChange={e => {
                    dropChange(e);
                    handleCityChange(e);
                }}>
                    <option value="nocity">-Select City-</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Hyd">Hyd</option>
                </select><br />
                    <span className="text-warning">{citySts}</span>
                </dd>
                <br />
                <dt><button onClick={registerClick} className="btn btn-primary ms-5">Register</button></dt>
            </div>
        </div>
    );
}
