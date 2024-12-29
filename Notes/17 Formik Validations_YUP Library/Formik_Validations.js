import { useFormik } from "formik";

export default function Formik_Validations() {
    const formik = useFormik({
        initialValues: {
            'Username': "",
            "Password": "",
            "City": "",
            "Stock": true,
            "Mobile":""
        },
        onSubmit: values => {
            alert(JSON.stringify(`UserName: ${values.Username}, Password: ${values.Password}, City:${values.City}, Stock:${values.Stock==true?"Available":"Out of Stock"}, Mobile:${values.Mobile}`));
        },
        validate:validateForm
    })

    function validateForm(values){
        const err={};
        if(values.Username==""){
            err.Username = 'UserName Required';
        }
        if(values.Mobile.match(/\+91\d{10}/)){
            err.Mobile = "";   
        }
        else{
            err.Mobile = "Invalid Mobile Number"; 
        }
        return err;
    }

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <dl>UserName</dl>
                    <dt>
                        <input
                            type="text" onChange={formik.handleChange}
                            name="Username" value={formik.values.Username}
                            className="w-25 form-control"
                        />
                        <p className="text-danger">{formik.errors.Username}</p>
                    </dt>
                </div>
                <div>
                    <dl>Mobile</dl>
                    <dt>
                        <input 
                            type="text" onChange={formik.handleChange}
                            name="Mobile" value={formik.values.Mobile}
                            className="w-25 form-control" placeholder="+91"
                        />
                        <p class="text-danger">{formik.errors.Mobile}</p>
                    </dt>
                </div>
                <div>
                    <dl>Password</dl>
                    <dt>
                        <input
                            type="password" onChange={formik.handleChange}
                            name="Password" value={formik.values.Password}
                            className="w-25 form-control"
                        />
                    </dt>
                    <dd><select onChange={formik.handleChange}
                        name="City" value={formik.values.City}>
                        <option value="nocity">-Select City-</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Hyd">Hyd</option>
                    </select><br />
                    </dd>
                    <dd>
                        <div className="form-switch">
                          <input type="checkbox" className="form-check-input" onChange={formik.handleChange}
                          name="Stock" checked={formik.values.Stock}     />
                        </div>
                    </dd>
                    <br />
                    <dt><button className="btn btn-primary ms-5">Register</button></dt>
                </div>
            </form>
        </div>
    );
}
