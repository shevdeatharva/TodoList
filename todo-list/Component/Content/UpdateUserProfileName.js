import { useUpdateUserName } from "../context/UserContext";
import { useUserName } from "../context/UserContext";
import { useState } from "react";

import React from 'react'

const UpdateUserProfileName = () => {
    const updateUserName = useUpdateUserName();
    const userName = useUserName();
    const [newUserName, setNewUserName] = useState(userName)

    const onUpdateUserName = (e) => {
        e.preventDefault();
        updateUserName(newUserName);
    }
    return ( 

    <div className = " col-xl-20 col-xxl-8 px-4 py-5" >
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold 1h-1 mb-3">Todo-List Profile</h1>
            <p className="col-lg-10 fs-4">Please update your name</p>
          </div>
            <div className="col-md-10 mx-auto col-lg-5">
              <form className="p-4 p-md-5 border rounded-3 bg-light">
                <div className="form-floating mb-3">
                  <input type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Enter the UserName"
                  value={newUserName}
                  onChange={(e)=>setNewUserName(e.target.value)}
                  />
                  <label htmlFor="floatingInput">Username</label>
                  </div>
                  <div className="form-floating mb-3">

                  <input type="password"
                  className="form-control mt-2"
                  id="floatingPassword"
                  placeholder="Enter password"
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <button onClick={onUpdateUserName}
                className="w-100 btn btn-lg btn-primary"
                type="submit">
                  UPDATE
                </button>
                <hr className="my-4"/>
                <small className="text-muted color-success"> <h6>Thank you {userName}! </h6></small>
              </form>
            </div>
        </div>

        </div>
    )
}
export default UpdateUserProfileName