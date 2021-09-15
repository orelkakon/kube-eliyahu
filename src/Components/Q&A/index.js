import React from 'react';
import { QADiv } from './style'
import { TITLE, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, A1, A2, A3, A4, A5, A6, A7, A8 } from './hebrew'
import {
    CollapsibleComponent,
    CollapsibleHead,
    CollapsibleContent
} from "react-collapsible-component";
import './style.css'

const QA = () => {
    return (
        <QADiv>
            <p style={{ fontSize: "40px", fontWeight: "bold" }}>{TITLE}</p>
            <CollapsibleComponent>
                <CollapsibleHead className="head">{Q1}</CollapsibleHead>
                <CollapsibleContent className="content">
                    <p className="pp">{A1}</p>
                </CollapsibleContent>
                <CollapsibleHead className="head">{Q2}</CollapsibleHead>
                <CollapsibleContent className="content">
                    <p className="pp">{A2}</p>
                </CollapsibleContent>
                <CollapsibleHead className="head">{Q3}</CollapsibleHead>
                <CollapsibleContent className="content">
                    <p className="pp">{A3}</p>
                </CollapsibleContent>
                <CollapsibleHead className="head">{Q4}</CollapsibleHead>
                <CollapsibleContent className="content">
                    <p className="pp">{A4}</p>
                </CollapsibleContent>
                <CollapsibleHead className="head">{Q5}</CollapsibleHead>
                <CollapsibleContent className="content">
                    <p className="pp">{A5}</p>
                </CollapsibleContent>
                <CollapsibleHead className="head">{Q6}</CollapsibleHead>
                <CollapsibleContent className="content">
                    <p className="pp">{A6}</p>
                </CollapsibleContent>
                <CollapsibleHead className="head">{Q7}</CollapsibleHead>
                <CollapsibleContent className="content">
                    <p className="pp">{A7}</p>
                </CollapsibleContent>
                <CollapsibleHead className="head">{Q8}</CollapsibleHead>
                <CollapsibleContent className="content">
                    <p className="pp">{A8}</p>
                </CollapsibleContent>
            </CollapsibleComponent>
        </QADiv>
    );
};

export default QA;