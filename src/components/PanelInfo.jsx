import React from 'react'

const PanelInfo = ({item}) => {
    const text= ()=>{

        if(item.tittle=='/avaliable'){
            
            return `inline-flex items-center  py-2  text-lime-400 text-base font-medium 
            focus:outline-none focus:ring-2 focus:ring-offset-2 ` 
        }else {
        return    `inline-flex items-center  py-2  text-white text-base font-medium 
      focus:outline-none focus:ring-2 focus:ring-offset-2 hover:underline `
        }
    } 
    const getText= text()

            
    return (
        <div className='flex' >
              <a href={item.link} target="_blank" rel="noopener noreferrer" className={getText}>
        <span >
          {item.icon}
        </span>
      {item.tittle}
    </a>
        </div>
    )
}

export default PanelInfo