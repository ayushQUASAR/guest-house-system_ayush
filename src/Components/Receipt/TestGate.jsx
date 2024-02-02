
import React from 'react'
import {Link} from "react-router-dom"
export default function TestGate() {
  return (
   <div>
    <Link to="/receipt">
    <button>
           PASS
    </button>
    </Link>
    <Link to="/UserDetails">
    <button>
           FAIL
    </button>
    </Link>
   </div>
  )
}

