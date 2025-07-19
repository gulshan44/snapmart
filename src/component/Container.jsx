import React from 'react'

const Container = ({className, children}) => {
  return (
    <div className={`max-w-[1200px] mx-auto px-4 md:px-6 ${className}`}>
        {children}

    </div>
  )
}

export default Container