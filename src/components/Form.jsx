


const Form = () => {

    let usernameValue = '';


    let inputOne = document.querySelector('.input-one');

    const handleChange = () => {
        usernameValue = inputOne.value;
        console.log(usernameValue)
    }

  return (
    <div>
        <form>
            <h1>Form Handling</h1>
            <div>
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    value={usernameValue}
                    onChange={() => handleChange()}
                    className="input-one"
                />
            </div>
            <div>
                <label htmlFor="lastname">LasName</label>
                <input 
                    type="text" 
                    value='' 
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    value='' 
                />
            </div>
            <div>
                <label htmlFor="Phone">Phone</label>
                <input 
                    type='tel' 
                    value='' 
                />
            </div>
            <div>
                <label htmlFor="Password">Password</label>
                <input 
                    type='password'
                    value='' 
                />
            </div>
        </form>
    </div>
  )
}

export default Form