import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AlarmIcon from '@mui/icons-material/Alarm';
import DeleteIcon from '@mui/icons-material/Delete';
import RatingDemo from "./ratingDemo"
import FormDemo from "./formDemo"
import './App.css'

function App() {
 

  return (
    <>
    <h1>Hello</h1>
    {/* <RatingDemo /> */}
    <FormDemo />
      {/* <Button color="secondary" size="large" variant="contained" onClick={()=>alert("Contained")}>Contained</Button>
<IconButton color="secondary" aria-label="add an alarm" onClick={()=>alert("ALARM")}>
<AlarmIcon />
</IconButton>
<IconButton aria-label="delete">
<DeleteIcon />
</IconButton> */}
    </>
  )
}

export default App
