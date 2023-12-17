import React from 'react'

function Error({children}) {
  return (
    <div className=' bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md'>
         {children}
    </div>
  )
}

export default Error

/* 
Podemos pasarle como prop " children"
que tambien hace enfasis en un prop hijo que se le envia el padre


*/