import './App.css'
import Swal from 'sweetalert2'
function App() {
//normal sweet alert
const handleAlertClick=()=>{
  Swal.fire('Any fool can use a computer')
}
// delete alert button 
const handleAlertDelete=()=>{
  Swal.fire({
    title:'Are you sure you ?',
    text:'Delete Items',
    icon:'warning',
    showCancelButton: true,
    confirmButtonText:"Yes,Delete it",
    confirmButtonColor:'red',
     cancelButtonText:'Cancel',
     cancelButtonColor:'blue',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      Swal.fire(
        'Cancelled',
        'Your imaginary file is safe :)',
        'error'
      )
    }
  })
}
//for error messages
const handleAlertError=() => {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
    footer: '<a href="">Why do I have this issue?</a>'
  })
};

//set timer for dismiss messages 
const handleMassegeTimer=()=>{
  let timerInterval
Swal.fire({
  title: 'Auto close alert!',
  html: 'I will close in <b></b> milliseconds.',
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})
}
//user  prompt for user email
const handlePromptUserEmail= async ()=> {
const { value: email } = await Swal.fire({
  title: 'Input email address',
  input: 'email',
  inputLabel: 'Your email address',
  inputPlaceholder: 'Enter your email address'
})

if (email) {
  Swal.fire(`Entered email: ${email}`)
}
}

const buttonStyle={
  backgroundColor:'blue',
  color:'white',
  padding:'15px 15px',
  border:"none",
  margin:'15px',
  borderRadius:"15px",
  fontSize:"18px",
}
  return (
    <>
      <div style={{width:'80%',margin:'0 auto',}}>
        <h1 style={{textAlign: "center",fontSize:"45px",color:"red"}}>Test Sweet alert</h1>
        <button style={buttonStyle} onClick={handleAlertClick}>Alert Message</button>
        <button style={buttonStyle} onClick={handleAlertDelete}> Alert With delete Message</button>
        <button style={buttonStyle} onClick={handleAlertError}>Alert With Error Message</button>
        <button style={buttonStyle} onClick={handleMassegeTimer}>A message with auto close timer</button>
        <button style={buttonStyle} onClick={handlePromptUserEmail}>Input prompt for user email</button>
      </div>
    </>
  )
}

export default App
