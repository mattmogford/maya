import React from 'react';
import { Link } from "react-router-dom";

export default class Breadcrumbs extends React.Component {
    constructor({
        match, location, history, staticContext
    }) {
        super(...arguments)
    }

    render() {
        var breadcrumbs = this.props.location.pathname.split('/')
        return (<div className='breadcrumbs'>
            {
                breadcrumbs.map((crumb, i, arr) => {
                    if (crumb === '') {
                        return null
                    } else if (i !== (arr.length - 1)) {
                        return (<span key={crumb}>
                            <Link to={'/' + crumb}>
                                {crumb}
                            </Link>
                            &nbsp; / &nbsp;
                        </span>)
                    } else {
                        return <span key={crumb}>{crumb}</span>
                    }
                })
            }
        </div>)
    }
}