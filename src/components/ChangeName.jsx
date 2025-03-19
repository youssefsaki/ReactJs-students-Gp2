import { useState } from "react";


const ChangeName = () => {

    // let name = 'Youssef'; //? normal declaration of a variable in js

    // console.log(useState())
    /*

        * useState returns an array of : 

            - [state, function to update the state]
            - [undefined, f()]

    */

    let [name, setName] = useState('Youssef');


    const handleClick = () => {
        // name = 'Salah' //? Normal Javascript for updates
        // console.log(name);
        setName('Salah')
    }

  return (
    <div>
        <h3>{name}</h3>
        <button onClick={() => handleClick()}>Change Name</button>
    </div>
  )
}

export default ChangeName