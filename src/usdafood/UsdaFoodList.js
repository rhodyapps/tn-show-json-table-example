import React, { Component } from 'react'
// import PostData from '../data/posts.json'
import Data from '../data/usdafood.json'
import '../css/styles-list.css'
import { JsonToTable } from "react-json-to-table";


class UsdaFoodList extends Component {
render () {
return (
<div>
<h1>USDA Food Data</h1>
{Data.map((dataDetail, index) => {
return <div>
<JsonToTable json={dataDetail} />
</div>
})}
</div>
)
}
}

export default UsdaFoodList
