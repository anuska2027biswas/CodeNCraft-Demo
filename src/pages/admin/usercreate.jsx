import React, { useState } from 'react';

import axios from 'axios';
const FileCreateDialog = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const currentUser=window.localStorage.getItem('InvertrekuserRole')

  const [FName, setFName] = useState("");
  const [LName, setLName] = useState("");
  const [Email, setEmail] = useState("");
  const [CPassword, setCPassword] = useState("");
  const [password, setpassword] = useState("");
  const [Phone, setPhone] = useState("");
  const [Department, setDepartment] = useState("")

  const [userRole, setuserRole] = useState(""); 

  const [Loader, setLoader] = useState(false)
  const [error, seterror] = useState("")

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => {
    setIsDialogOpen(false);
    setMessage('');
    setFileName('');
    setFileDescription('');
    setFileType('');
    setFileImage(null);
  };

  const handleSubmit =  (e) => {
    e.preventDefault()
    const Username=FName+" "+LName
    if(currentUser==="Admin"){

      try {
        // setLoader(true)
        axios.post(`${import.meta.env.VITE_DEV_URL}users/registerAdmin`,{Username,Email,Phone,Department,password}) // replace https://craftncode.onrender.com/ in place of import.meta.env.VITE_DEV_URL
        .then(res=>{
          console.log(res.data.message)
          alert(res.data.message)
          
          setLoader(false)
          window.location.reload();
          // window.localStorage.setItem("Username",FName)
          // navigate("/")
        })
      } catch (error) {
        console.log(error)
        seterror("Failed to register. Please try again later.")
        setLoader(false)
      }
    }
    if(currentUser==="Invertory Staff"){
      try {
        // setLoader(true)
        axios.post(`${import.meta.env.VITE_DEV_URL}users/registerAdmin`,{Username,Email,Phone,Department,password}) // replace https://craftncode.onrender.com/ in place of import.meta.env.VITE_DEV_URL
        .then(res=>{
          console.log(res)
          alert("User Registered Successfully")
          
          setLoader(false)
          // window.localStorage.setItem("Username",FName)
          // navigate("/")
        })
      } catch (error) {
        seterror("Failed to register. Please try again later.")
        setLoader(false)
      }
    }
  }

  return (
    <div>
    <button onClick={openDialog} className="open-dialog-btn">Create User</button>

    {isDialogOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-semibold text-center text-[#15B392]">Register</h2>
            <p className="text-center text-sm text-gray-600">Signup now and get full access to our app.</p>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name"
                value={FName}
                onChange={(e) => setFName(e.target.value)}
                required
                className="border-b-2 text-black focus:border-gray-400 outline-none"
              />
              <input
                type="text"
                placeholder="Last name"
                value={LName}
                onChange={(e) => setLName(e.target.value)}
                required
                className="border-b-2 text-black focus:border-gray-400 outline-none"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border-b-2 text-black focus:border-gray-400 outline-none"
            />

            <input
              type="text"
              placeholder="Phone number"
              value={Phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full border-b-2 text-black focus:border-gray-400 outline-none"
            />

            <select
              value={Department}
              onChange={(e) => setDepartment(e.target.value)}
              required
              className="w-full border-b-2 text-black focus:border-gray-400 outline-none"
            >
              <option value="" disabled>Select Department</option>
              <option value="Accounts">Accounts</option>
              <option value="Admission">Admission</option>
              <option value="Academics">Academics</option>
            </select>

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required
              className="w-full border-b-2 text-black focus:border-gray-400 outline-none"
            />

            <input
              type="password"
              placeholder="Confirm password"
              value={CPassword}
              onChange={(e) => setCPassword(e.target.value)}
              required
              className="w-full border-b-2 text-black focus:border-gray-400 outline-none"
            />

            {error && <p className="text-red-600 text-xs text-center">{error}</p>}

            <button
              type="submit"
              disabled={Loader}
              className="w-full bg-[#15B392] text-white py-2 rounded-lg"
            >
              {Loader ? "Submitting..." : "Submit"}
            </button>

            <p className="text-center text-sm text-gray-600">
              Already have an account? <a href="/login" className="text-[#15B392]">Sign in</a>
            </p>
            <button onClick={closeDialog} className="text-red-500 text-center w-full mt-2">Close</button>
          </form>
        </div>
      </div>
    )}
  </div>
);
}



export default FileCreateDialog;