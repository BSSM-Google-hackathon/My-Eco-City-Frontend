import React from 'react'
import { Link } from "react-router-dom";
import '../../styles/Canvas/backtohome.css'

export const BackToHome = () => {
  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
      <div className="backToHome"><span>홈 화면으로</span></div>
    </Link>
  )
}
