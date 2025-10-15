import UserForm from "./UserForm";
import UsersTable from "./UsersTable";
import Box from "@mui/material/Box";
import Axios from "axios";
import { useEffect, useState } from "react";

function Users()  {
    const[users, setUsers] = useState([]);
    const[submited, setSubmited] = useState(false);

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = () => {
        Axios.get("http://localhost:3001/api/users")
        .then((response) => {
            console.log(response.data.response); 
            setUsers(response.data.response || []); 
        })
        .catch((error)=>{
            console.error("Axios error:",error);
        })
    }

    const addUser = (data)=> {
        setSubmited(true);

        const payload={
            id: data.id,
            name: data.name,
        }
        Axios.post("http://localhost:3001/api/adduser", payload)
        .then((response) => {
            setUsers(response.data?.response || []);
            getUsers();
            setSubmited(false);
            
        })
        .catch((error)=>{
            console.error("Axios error:",error);
        })
    }

    return (

        <Box >
            
            <UserForm 
                addUser={addUser}
                submited={submited}
            />
            <UsersTable  rows={users} />
        </Box>
    );
}

export default Users;