import { useState} from "react";
import Admin from "./Admin";
import {Table} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default props => {
    const [users,setusers]=useState(["Tareq","Ahmad","Mustafa","Ammar","Kahld","David","Amr"])
    const islogin=[1,0,0,1,1,1,0,0,0]

    const partys=['bashar','ISIS','Nusra','FreeArmy','Russia']
    return(
        <div>
            <Admin/>
            <div>
            <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Login</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((user, index) => {
                            return(
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user}</td>
                                    <td><input type="checkbox" checked={islogin[index]} /> </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </Table>
            </div>
        </div>
    )

}