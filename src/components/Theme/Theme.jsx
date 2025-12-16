import React from 'react'
import { useThemeContext } from '../../contexts/ThemeContext'

const Theme = () => {

  const {theme, toggleTheme} = useThemeContext()

  return (
    <>
      <button 
        className='btn primary-btn position-fixed top-50 end-0 py-3 z-3 rounded-left'
        onClick={toggleTheme}
      >
        {
          theme === "light" ? (
            <i className='bi bi-brightness-high-fill'></i>
          ) : (
            <i className='bi bi-moon-stars-fill'></i>
          )
        }        
      </button>
    </>
  )
}

export default Theme