import { useState } from "react";

function Register() {

    const [user, setUser] = useState(
        {
            fullName: "",
            email: "",
            password: ""
        }
    );

    //const handleInput = (e) => {
    //  const v = e.target.value; //lay gia tri input dc type
    //const name = e.target.name;
    //  setUser({ ...user, [name]: v })

    //user[name] = v; //user.fullName = v.  user.gmail = v...
    // setUser(user);
    //}

    const [fullName, setFullName] = useState("");
    const changeFullName = (e) => { //cung nhu dung function
        const v = e.target.value; //lay gia tri input dc typing
        setFullName(v);
    }
    const [email, setEmail] = useState("");
    const changeEmail = (e) => { //cung nhu dung function
        const v = e.target.value; //lay gia tri input dc typing
        setEmail(v);
    }
    const [password, setPassword] = useState("");
    const changePassword = (e) => { //cung nhu dung function
        const v = e.target.value; //lay gia tri input dc typing
        setPassword(v);
    }

    const formSubmit = (e) => {
        e.preventDefault(); //chan form khong submit kieu truyen thong

        if (confirm("Xac nhan da gui thong tim?")) {
            alert("da gui thanh cong")
        } else {
            alert("nah, no send :[...")
        }
    }
    return (
        <>
            <h1>Register</h1>
            <h2>Full name: {fullName}</h2>
            <h2>Email: {email}</h2>
            <h2>Password: {password}</h2>
            <form onSubmit={formSubmit} method="post">
                <div className="mb-3">
                    <label>Full name</label>
                    <input onChange={changeFullName} type="text" name={fullName} className="form-control" />
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input onChange={changeEmail} type="email" name={email} className="form-control" />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input onChange={changePassword} type="password" name={password} className="form-control" />
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Register</button>
                </div>
            </form>
        </>
    )
}
export default Register;