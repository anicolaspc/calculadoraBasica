import React from "react";
import { Input } from 'antd'
const { TextArea } = Input

const Display = ({ value }) => {
    return (
        <>
            <TextArea autoSize value={value} style={{
                fontSize: '24px',
                textAlign: 'end',
                marginBottom: '10px',
                background: 'grey',
                color: 'white'
            }} />
            
        </>
    )
}

export default Display