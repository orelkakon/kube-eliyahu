import React, { useEffect, useState } from 'react';
import { QADiv } from './style'
import { TITLE } from './hebrew'
import {
    CollapsibleComponent,
    CollapsibleHead,
    CollapsibleContent
} from "react-collapsible-component";
import './style.css'
import axios from 'axios'
import config from './../../config.json'

const getFaqData = async (setFaq) => {
    const faq = await axios({
        method: 'get',
        url: `${config.protocol}://${config.host}:${config.port}${config.urls.getFaq}`
    })
    setFaq(faq.data[0])
    return
}

const QA = () => {
    const [faq, setFaq] = useState("")
    useEffect(() => {
        getFaqData(setFaq)
    }, [])
    // MUST AT LEAST 6 QUESTIONS AND NO MORE 10 
    return (
        <QADiv>
            <p style={{ fontSize: "40px", fontWeight: "bold" }}>{TITLE}</p>
            <CollapsibleComponent>
                <CollapsibleHead className="head">
                    {faq['q1']}
                </CollapsibleHead>
                <CollapsibleContent className="content">
                    {faq['a1']} <br /><br />
                </CollapsibleContent>
                <CollapsibleHead className="head">
                    {faq['q2']}
                </CollapsibleHead>
                <CollapsibleContent className="content">
                    {faq['a2']} <br /><br />
                </CollapsibleContent>
                <CollapsibleHead className="head">
                    {faq[`q3`]}
                </CollapsibleHead>
                <CollapsibleContent className="content">
                    {faq['a3']} <br /><br />
                </CollapsibleContent>
                <CollapsibleHead className="head">
                    {faq[`q4`]}
                </CollapsibleHead>
                <CollapsibleContent className="content">
                    {faq['a4']} <br /><br />
                </CollapsibleContent>
                <CollapsibleHead className="head">
                    {faq[`q5`]}
                </CollapsibleHead>
                <CollapsibleContent className="content">
                    {faq['a5']} <br /><br />
                </CollapsibleContent>
                <CollapsibleHead className="head">
                    {faq[`q6`]}
                </CollapsibleHead>
                <CollapsibleContent className="content">
                    {faq['a6']} <br /><br />
                </CollapsibleContent>
                {
                    faq[`q7`] !== undefined && <>
                        <CollapsibleHead className="head">
                            {faq[`q7`]}
                        </CollapsibleHead>
                        <CollapsibleContent className="content">
                            {faq['a7']} <br /><br />
                        </CollapsibleContent>
                    </>
                }
                {
                    faq[`q8`] !== undefined && <>
                        <CollapsibleHead className="head">
                            {faq[`q8`]}
                        </CollapsibleHead>
                        <CollapsibleContent className="content">
                            {faq['a8']} <br /><br />
                        </CollapsibleContent>
                    </>
                }
                {
                    faq[`q9`] !== undefined && <>
                        <CollapsibleHead className="head">
                            {faq[`q9`]}
                        </CollapsibleHead>
                        <CollapsibleContent className="content">
                            {faq['a9']} <br /><br />
                        </CollapsibleContent>
                    </>
                }
                {
                    faq[`q10`] !== undefined && <>
                        <CollapsibleHead className="head">
                            {faq[`q10`]}
                        </CollapsibleHead>
                        <CollapsibleContent className="content">
                            {faq['a10']} <br /><br />
                        </CollapsibleContent>
                    </>
                }
            </CollapsibleComponent>
            <br /> <br />
        </QADiv>
    );
};

export default QA;