import React from "react";
import { Button } from 'antd'

const ButtonLogic = ({ onClick, value }) => {
    return (
        <Button
            onClick={() => onClick(value)}
            style={{ width: '100%', height: '50px', fontSize: '18px' }}
        >
            {value}
        </Button>
    )
}

export default ButtonLogic