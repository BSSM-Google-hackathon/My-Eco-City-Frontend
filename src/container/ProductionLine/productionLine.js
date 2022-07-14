import React from 'react'

// style
import '../../styles/Canvas/productionLine.css'

const ProductionLine = () => {

  const list = [1,2,3,4,5,6,7,8]
  const lineItem = list.map((i) => {
    return(
      <div className="line--item">{i}</div> 
    )
  })

  return (
    <div className="line">
        {lineItem}
    </div>
  )
}

export default ProductionLine;