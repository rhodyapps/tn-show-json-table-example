import React, { Component } from 'react'
// import PostData from '../data/posts.json'
import Data from '../data/mtpatient1.json'
import '../css/styles-list.css'
import { JsonToTable } from "react-json-to-table";

// this.setState({isLoaded: true, dataDetail: json});
// <JsonToTable json={dataDetail} />

class MtPatientsList extends Component {
render () {
return (
<div>
<h1>MEDITECH Patient Data</h1>
{Data.map((dataDetail, index) => {
return <div>
<JsonToTable json={dataDetail} />
</div>
})}
</div>
)
}
}

export default MtPatientsList
