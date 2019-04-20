import React, {Component} from 'react';

export class BottomFooter extends Component {
    render() {
        const companyDivStyle = {
            textAlign:'left',
            verticalAlign:'middle',
            display: 'table-cell'
        };
        const lastLoginDivStyle = {
            textAlign:'right',
            verticalAlign:'middle',
            display: 'table-cell'
        };

        return(
            <div className="row">
                <div className="col-lg-5" style={companyDivStyle}>
                    {this.props.children}
                </div>
                <div className="col-lg-3">&nbsp;</div>
                <div className="col-lg-4" style={lastLoginDivStyle}>
                    Last Login Time: {this.props.user.lastLoginTime}
                </div>
            </div>
        );
    }
}
