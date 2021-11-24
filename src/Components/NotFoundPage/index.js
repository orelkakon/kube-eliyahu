import React from 'react';
import { NotFoundImg, Wrapper, ReturnButton } from './style'
import { RETURN_HOME } from './hebrew'
import { useHistory } from "react-router-dom";


const NotFoundPage = () => {
    let history = useHistory();
    const movePage = (path) => {
        history.push(path)
    }
    return (
        <Wrapper>
            <NotFoundImg />
            <br />
            <ReturnButton onClick={() => movePage('/')}>
                {RETURN_HOME}
            </ReturnButton>
            <br/>
        </Wrapper>
    );
};

export default NotFoundPage;