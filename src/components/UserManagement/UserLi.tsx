import React, { ReactElement } from 'react'
import { User, UserCallback } from '../../shared/shared'

interface Props {
    user: User;
    onDeleteUser: UserCallback;
    onEditUser: UserCallback;
}

export default function UserLi({user, onDeleteUser, onEditUser}: Props): ReactElement {
    const handleDelete = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        onDeleteUser(user);
      }
      const handleEdit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        onDeleteUser(user);
      }
    return (
        <div className="divTableRow">
       <div className="divTableCell">{user.id}</div>
       <div className="divTableCell">{user.userName}</div>
       <div className="divTableCell">{user.fullName}</div>
       <div className="divTableCell">{user.email}</div>
       <div className="divTableCell">{user.password}</div>
       <div className="divTableCell">{user.phone}</div>
       <div className="divTableCell">{user.adress}</div>
       <div className="divTableCell">{user.isAdmin + ""}</div>
       <div className="divTableCell"><button onClick={handleEdit}>Edit</button><button onClick={handleDelete}>Delete</button></div>
     </div>
    )
}
