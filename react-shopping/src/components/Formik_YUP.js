import { useFormik } from "formik";
import * as yup from 'yup';

export default function Formik_YUP() {
    const formik = useFormik({
        initialValues: {
            UserName: '',
            Age: 0,
            Email: '',
            Mobile: ''
        },

        validationSchema: yup.object({
            UserName: yup.string().required('Username Required').min(4, 'Name too Short..').max(10),
            Age: yup.number().required('Age Required').min(18, 'Not Eligible for Voting'),
            Email: yup.string().required('Email Required').email(),
            Mobile: yup.string().required().matches(/^\+91\d{10}$/,'Mobile Format is Invalid')
        }),


        onSubmit: values => {
            alert(JSON.stringify(values));
        }
    })
    return (
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h2>Register User</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input {...formik.getFieldProps('UserName')} type="text" /></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Age</dt>
                    <dd><input {...formik.getFieldProps('Age')} type="text" /></dd>
                    <dd className="text-danger">{formik.errors.Age}</dd>
                    <dt>Email</dt>
                    <dd><input {...formik.getFieldProps('Email')} type="text" /></dd>
                    <dd className="text-danger">{formik.errors.Email}</dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" {...formik.getFieldProps('Mobile')} /></dd>
                    <dd className="text-danger">{formik.errors.Mobile}</dd>
                </dl>
                <button>Register</button>
            </form>
        </div>
    )
}
