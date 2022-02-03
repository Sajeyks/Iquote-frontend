import React from 'react'

function Quote({ quote }) {
    return (

        <div className='quote'>
            <blockquote>
                {quote.content}
            </blockquote>
            
            <div className='author' title={quote.author}>
                 {quote.author}
              </div>
            
        </div>
    )
    
}

export default Quote