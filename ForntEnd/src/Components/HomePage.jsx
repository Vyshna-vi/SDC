import React from "react";


function HomePage() {
    const [count, setCount] = useState(0)
  
    return (
      <>
        <div>
          <div class='header'>
            <h2 class='sdchead'>Supervisory Development Centre</h2>
          </div>
          <div>
            <button>Register</button>
            <button>FAQ</button>
            <button>Staff Login</button>
            <button>Candidate Login</button>
          </div>
        </div>
      </>
    )
  }
  
  export default HomePage