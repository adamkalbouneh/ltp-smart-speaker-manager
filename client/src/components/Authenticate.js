import React from "react";
import { useState, useEffect } from "react";

const Authenticate = ({setSession}) => {

    useEffect(() => {
        
        async function fetchUserID() {
            const response = await axios.get('/get_user_id');
            if (response.data.userID != null){
                alert(response.data.userID)
                setSession(response.data.userID);
            }
        }
        fetchUserID();

    }, []);

  return (<span style="display: none;"></span>);
};

export default Authenticate;