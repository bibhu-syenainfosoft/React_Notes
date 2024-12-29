import { useFormik, Formik, Form, ErrorMessage, Field } from "formik";
import * as yup from 'yup';

export default function Formik_Component() {

    return (
        <div className="container-fluid">
            <h2>Register User</h2>
            <Formik initialValues={
                {
                    UserName: '',
                    Age: 0,
                    Email: '',
                    Mobile: ''
                }
            }
                validationSchema={
                    yup.object({
                        UserName: yup.string().required().min(4, 'Name too Short..').max(10),
                        Age: yup.number().required('Age Required').min(18, 'Not Eligible for Voting'),
                        Email: yup.string().required('Email Required').email(),
                        Mobile: yup.string().required().matches(/^\+91\d{10}$/, 'Mobile Format is Invalid')
                    })
                }
                onSubmit={
                    values => {
                        alert(JSON.stringify(values));
                    }
                }>
                {
                    props =>
                        <Form>
                            {
                                <div>
                                    <dl>
                                        <dt>User Name</dt>
                                        <dd><Field type="text" name="UserName" /></dd>
                                        <dd className="text-danger">
                                            <ErrorMessage name="UserName"></ErrorMessage>
                                        </dd>
                                        <dt>Age</dt>
                                        <dd><Field type="number" name="Age" /></dd>
                                        <dd className="text-danger">
                                            <ErrorMessage name="Age"></ErrorMessage>
                                        </dd>
                                        <dt>Email</dt>
                                        <dd><Field type="email" name="Email" /></dd>
                                        <dd className="text-danger">
                                            <ErrorMessage name="Age"></ErrorMessage>
                                        </dd>
                                        <dt>Mobile</dt>
                                        <dd><Field type="text" name="Mobile" /></dd>
                                        <dd className="text-danger">
                                            <ErrorMessage name="Mobile"></ErrorMessage>
                                        </dd>
                                    </dl>
                                    <button disabled={(props.isValid)?false:true} className="btn btn-outline-primary">Register</button>
                                </div>
                            }
                        </Form>
                }
            </Formik>
        </div>
    );
}
