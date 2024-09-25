"use client"

import { signOut } from "next-auth/react";

const Logout = () => {
    const handleSignOut = () =>{
        signOut({callbackUrl: "http://localhost:3000/login"})
    }
 return (
<button onClick={handleSignOut} className="login">Sign Out</button>
 )
};

export default Logout;