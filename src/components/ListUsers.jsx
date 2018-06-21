import React from 'react';

//components
import TableBody from './TableBody';

const ListUsers = (props) => (

    <div className="table-responsive mt-5">
        <table className="table table-hover table-bordered">
            <thead className="thead-dark">
                <tr>
                    <th className="text-center" scope="col">Foto</th>
                    <th className="text-center" scope="col">Nombre</th>
                    <th className="text-center" scope="col">Url</th>
                    {/* <th scope="col">Url Repos</th> */}
                    <th className="text-center" scope="col">Informacion</th>
                </tr>
            </thead>
            <tbody>

            {
                props.users.map(user => (
                    <TableBody  
                        key = {user.id}
                        id = {user.id}
                        name = {user.name}
                        url = {user.url}
                        picture = {user.picture}
                        // repos = {user.repos}
                        searchUser = {props.searchUser}
                    />
                ))
            }
            </tbody>
        </table>
    </div>
    
)

export default ListUsers;