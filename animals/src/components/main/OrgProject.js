import React, { Component } from 'react'
import Header from './main-components/Header';
import Description from './main-components/Description';
import SupportButton from './main-components/SupportButton';

export class OrgProject extends Component {
    render() {
        return (
            <div>
                {/* <Header /> */}
                <Description />
                <SupportButton />
            </div>
        )
    }
}

export default OrgProject
