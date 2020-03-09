import React from 'react'

import Product from './components/Product'
import productsData from './components/productData'

function App3() {
    const productComponents = productsData.map(item => <Product key={item.id} product={item}/>)

    return (
        <div>
            {productComponents}
        </div>
    )
}

export default App3;