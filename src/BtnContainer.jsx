import React from 'react'

const BtnContainer = ({resumes,currentItem,setCurrentItem}) => {
    
  return (
    <div className='btn-container'>
        {resumes.map((resume,index)=>{
            const {company,id} = resume;
            
            return (            
                <button key={id} 
                className={index===currentItem?"job-btn active-btn":'job-btn'} 
                onClick={()=>{
                    setCurrentItem(index)
                }}>
                    {company}
                    </button>
            )})}
    </div>
  )
}

export default BtnContainer