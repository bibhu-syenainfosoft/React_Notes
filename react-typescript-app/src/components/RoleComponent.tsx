import { useEffect, useState } from 'react';
import { RoleGETContract, RolePOSTContract } from "./RoleContract"
import axios from 'axios';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';

export function RoleComponent() {
    const [roles, setRoles] = useState<RoleGETContract[]>([]);
    useEffect(() => {
        getRolesList();
    }, []);

    function getRolesList() {
        axios.get('https://testapps.aquilasoftware.com/CRMV1/maintenance/getRolesList', {
            params: {
                jsonObj: JSON.stringify({
                    name: "",
                    active: 1,
                    upperbound: 10,
                    lowerbound: 1,
                    catererId: "compasscrmtest"
                })
            }
        }).
            then(response => {
                setRoles(response.data);
            })
    }
    function close(): RolePOSTContract {
        return {
            id: 0,
            name: '',
            description: '',
            sortOrder: 0,
            updatedUser: 1,
            catererId: 'compasscrmtest'
        }
    }

    const formik = useFormik<RolePOSTContract>({
        initialValues: {
            id: 0,
            name: '',
            description: '',
            sortOrder: 0,
            updatedUser: 1,
            catererId: 'compasscrmtest'
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name cannot be Empty'),
            description: Yup.string().required('Description cannot be Empty'),
            sortOrder: Yup.number()
        }),
        onSubmit: values => {
            axios.post('https://testapps.aquilasoftware.com/CRMV1/maintenance/saveOrUpdateRoles', values)
                .then(response => {
                    if (response.data.status?.length > 0) {
                        Swal.fire('Success', response.data.status, 'success');
                        getRolesList();
                        // values.name = '';
                        // values.description = '';
                        // values.sortOrder = 0;
                        close();
                    }
                }).catch(ex => {
                    Swal.fire('Information', 'Record Exists with same Name', 'warning');
                    values.name = '';
                    values.description = '';
                    values.sortOrder = 0;
                })
        }
    });

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-8 col-md-8 col-lg-8'>
                    <h1><b>Roles List</b></h1>
                    {roles?.length > 0 ?
                        <table className='table table-hover table-bordered'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Sort Order</th>
                                    <th>Active</th>
                                </tr>
                            </thead>
                            <tbody>
                                {roles.sort((a, b) => a.id - b.id).map((role, index) => (
                                    <tr key={index}>
                                        <td>{role.id}</td>
                                        <td>{role.name}</td>
                                        <td>{role.description}</td>
                                        <td>{role.sortOrder}</td>
                                        <td>{role.active == 1 ? 'Yes' : 'No'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table> :
                        <p className='text-center text-danger'>No Records Found</p>}
                </div>
                <div className='col-sm-4 col-md-4 col-lg-4'>
                    <h1><b>New Role</b></h1>
                    <form onSubmit={formik.handleSubmit}>
                        <dl>
                            <dt>Name <span className='text-danger'>*</span></dt>
                            <dd>
                                <input type="text" value={formik.values.name} name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} className='form-control-w-25 rounded-2' />
                                {formik.touched && formik.errors ?
                                    <div className='text-danger'>{formik.errors.name}</div>
                                    : null}
                            </dd>
                            <dt>Description <span className='text-danger'>*</span></dt>
                            <dd>
                                <textarea value={formik.values.description} name="description" onChange={formik.handleChange} onBlur={formik.handleBlur} className='form-control-w-25 rounded-2' />
                                {formik.errors ?
                                    <div className='text-danger'>{formik.errors.description}</div>
                                    : null}
                            </dd>
                            <dt>Sort Order</dt>
                            <dd>
                                <input type="text" name="sortorder" value={formik.values.sortOrder == 0 ? '' : formik.values.sortOrder} onChange={formik.handleChange} onBlur={formik.handleBlur} className='form-control-w-25 rounded-2' />
                                {formik.errors ?
                                    <div className='text-danger'>{formik.errors.sortOrder}</div>
                                    : null}
                            </dd>
                        </dl>
                        <button className='btn btn-outline-success w-25 ms-5'>Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
