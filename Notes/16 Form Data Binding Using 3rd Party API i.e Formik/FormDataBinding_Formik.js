import { useFormik } from "formik";

export default function FormDataBinding_Formik() {
    const formik = useFormik({
        initialValues: {
            'Username': "",
            "Password": "",
            "City": "",
            "Stock": true
        },
        onSubmit: values => {
            alert(JSON.stringify(`UserName: ${values.Username}, Password: ${values.Password}, City:${values.City}, Stock:${values.Stock==true?"Available":"Out of Stock"}`));
        }
    })

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
