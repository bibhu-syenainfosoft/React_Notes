import { useState} from "react";

export default function EventDemo() {

    const [userName, setUserName] = useState('John');

   function setUnm(e){
    setUserName(e.target.value)
   }

    return (
        <div className="container-fluid">
          {/* <input type="text" onBlur={setUnm}/> */}
          <input type="text" value={userName} onChange={setUnm}/>
          <h3>Hello, {userName}</h3>
        </div>
    )
}
