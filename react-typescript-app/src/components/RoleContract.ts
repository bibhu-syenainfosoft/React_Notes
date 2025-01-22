export interface RoleGETContract {
    id: number;
    name: string;
    description: string;
    sortOrder: number,
    active: number
}
export interface RolePOSTContract {
    id: number;
    name: string;
    description: string;
    sortOrder: number,
    updatedUser: number,
    catererId: string
}


// Here in case of GET request, Whatever the parameters we will try to fetch from db we need to put all the required fetched data here.
// In  case of POST request, Whatever the parameters we will try to send as api payload we need to put inside the contract.
// npm install formik yup axios  (We can install more than one library at a time)