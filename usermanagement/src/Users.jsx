import UserForm from "./UserForm";
import UsersTable from "./UsersTable";
import Box from "@mui/material/Box";
import Axios from "axios";
import { useEffect, useState } from "react";

function Users()  {
    const[users, setUsers] = useState([]);
    const[submited, setSubmited] = useState(false);
    const[selectedUser, setSelectedUser]= useState([]);
    const[isEdit,setIsEdit] = useState(false);

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = () => {
        Axios.get(import.meta.env.VITE_REACT_APP_ENDPOINT + '/api/users')
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
        Axios.post(import.meta.env.VITE_REACT_APP_ENDPOINT + "/api/adduser", payload)
        .then((response) => {
            setUsers(response.data?.response || []);
            getUsers();
            setSubmited(false);
            
        })
        .catch((error)=>{
            console.error("Axios error:",error);
        })
    }

    const updateUser = (data) => {
        setSubmited(true);

        const payload={
            id: data.id,
            name: data.name,
        }

    Axios.post(import.meta.env.VITE_REACT_APP_ENDPOINT + "/api/updateUser", payload)
        .then((response) => {
            
            getUsers();
            setSubmited(false);
            setIsEdit(false);
            
        })
        .catch((error)=>{
            console.error("Axios error:",error);
        })    

    }

    const deleteUser = (data) =>{

    Axios.delete(import.meta.env.VITE_REACT_APP_ENDPOINT + "/api/deleteUser", { data: data })
        .then(() => {
            getUsers();
            
        })
        .catch((error)=>{
            console.error("Axios error:",error);
        })    
    }

    return (

        <Box >
            
            <UserForm 
                addUser={addUser}
                updateUser={updateUser}
                submited={submited}
                data={selectedUser}
                isEdit={isEdit}
            />
            <UsersTable 
             rows={users}
             selectedUser={data =>{
                setSelectedUser(data);
                setIsEdit(true);
             }} 
             deleteUser={data => window.confirm("Are you sure you want to delete this user?") && deleteUser(data)}
             />
        </Box>
    );
}

export default Users;