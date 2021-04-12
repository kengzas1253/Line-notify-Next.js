import React from 'react'
import axios from 'axios'

export default function index() {
  const [massage,setMassage] = React.useState('')
  
  const sentLine = async()=>{
    const res = await axios.post('http://localhost:5000/line', { massage});
    console.log(res);
    window.location.reload();
  }  

  return (
    <div>
      <head>
        <title>Line API</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css"></link>
      </head>
      <div class="container is-fluid">
      <div class="notification is-primary">
    Line Notify <strong>fluid</strong>: send massage 
  </div>
  <div class="control">
  <input class="input is-focused" type="text" placeholder="Focused input"
  onChange={e => setMassage(e.target.value)}
  />
  <h1>{massage}</h1>
 <button className="button is-success" onClick={sentLine}>Sent Line</button>
  </div>
</div>
    </div>
  )
}
