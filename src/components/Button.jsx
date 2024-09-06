import React from "react";
import { Row, Col } from 'antd'
import ButtonLogic from "./ButtonLogic";

const Button = ({ handleClick, handleClear, handleCalculate, handleDelete }) => {
    return (
        <>

            <Row gutter={[16]}>
                <Col span={6}><ButtonLogic onClick={handleClick} value="%" /></Col>
                <Col span={6}><ButtonLogic onClick={handleDelete} value="⌫" /></Col>
                <Col span={12}><ButtonLogic onClick={handleClear} value="C" /></Col>
            </Row>
            <Row gutter={[16]}>
                <Col span={6}><ButtonLogic onClick={handleClick} value="1" /></Col>
                <Col span={6}><ButtonLogic onClick={handleClick} value="2" /></Col>
                <Col span={6}><ButtonLogic onClick={handleClick} value="3" /></Col>
                <Col span={6}><ButtonLogic onClick={handleClick} value="-" /></Col>
            </Row>
            <Row gutter={[16]}>
                <Col span={6}><ButtonLogic onClick={handleClick} value="4" /></Col>
                <Col span={6}><ButtonLogic onClick={handleClick} value="5" /></Col>
                <Col span={6}><ButtonLogic onClick={handleClick} value="6" /></Col>
                <Col span={6}><ButtonLogic onClick={handleClick} value="*" /></Col>
            </Row>
            <Row gutter={[16]}>
                <Col span={6}><ButtonLogic onClick={handleClick} value="7" /></Col>
                <Col span={6}><ButtonLogic onClick={handleClick} value="8" /></Col>
                <Col span={6}><ButtonLogic onClick={handleClick} value="9" /></Col>
                <Col span={6}><ButtonLogic onClick={handleClick} value="/" /></Col>
            </Row>
            <Row gutter={[16]}>
                <Col span={6}><ButtonLogic onClick={handleClick} value="0" /></Col>
                <Col span={6}><ButtonLogic onClick={handleClick} value="." /></Col>
                <Col span={6}><ButtonLogic onClick={handleCalculate} value="=" /></Col>
                <Col span={6}><ButtonLogic onClick={handleClick} value="+" /></Col>
            </Row>

        </>
    )
}

export default Button