import React, { useState } from 'react'

function MultiInput() {

  const [userRegistration, setuserRegistration] = useState({
    username: "",
    email: "",
    phone: "",
    password: ""
  })

  const [record, setRecord] = useState([])

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value)
    setuserRegistration({ ...userRegistration, [name]: value })
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...userRegistration, id: new Date().getTime().toString() };
    // console.log(record)
    setRecord([...record, newRecord])
    // console.log(setRecord)
    setuserRegistration({ username: "", email: "", phone: "", password: "" })

  }

  return (
    <>
      <form action="" onSubmit={handlesubmit}>
        <div>
          <label htmlFor="username">fullname</label>
          <input type="text" autoComplete='off' name='username' value={userRegistration.username} onChange={handleInput} id='username' />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input type="text" autoComplete='off' name='email' value={userRegistration.email} onChange={handleInput} id='email' />
        </div>
        <div>
          <label htmlFor="phone">phone</label>
          <input type="text" autoComplete='off' name='phone' value={userRegistration.phone} onChange={handleInput} id='phone' />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input type="password" autoComplete='off' name='password' value={userRegistration.password} onChange={handleInput} id='password' />
        </div>
        <button type='submit' >Registration</button>
      </form>

      <div>
        {
          record.map((curElem) => {
            return (
              <div>
                <p>{curElem.username}</p>
                <p>{curElem.email}</p>
                <p>{curElem.phone}</p>
                <p>{curElem.password}</p>
              </div>
            )
          })
        }
      </div>

    </>
  )
}

export default MultiInput
