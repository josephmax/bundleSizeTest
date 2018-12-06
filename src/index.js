import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'antd'

function APP () {
    return <Button>hello ant</Button>
}

ReactDOM.render(
    <APP />,
    document.getElementById('app')
)