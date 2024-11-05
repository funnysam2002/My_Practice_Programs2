import TextField from '@mui/material/TextField';
import {useState} from "react";
export default function formDemo(){
    const [name,setName] = useState("")
    const upName = (r)=> setName(r.target.value)
    return <div>
        <h2>Name:{name}</h2>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" placeholder="name" onChange={upName} />
    </div>
}