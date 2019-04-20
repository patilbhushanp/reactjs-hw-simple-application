import React from 'react';

export class HomeComponent extends React.Component {

    constructor() {
        super();
        this.state = ({
            displayUserMoreOption: '...',
            displayUserMoreButtonName: 'More Info'
        });
    }

    render() {
        const divHeaderStyle = {textAlign:'left', fontSize:'24px'};
        const divStyle = {textAlign:'right', fontSize:'14px'};
        
        return (
            <div className="row">
                <div className="col-lg-12" style={divHeaderStyle}>
                    Hello {this.props.user.firstName},
                </div>
                <div className="col-lg-12" style={divStyle} >
                    <h5>User Information:&nbsp;&nbsp;</h5>
                    <p>Name - {this.props.user.firstName}&nbsp;{this.props.user.lastName}&nbsp;&nbsp;<br/>
                    Last Login time - {this.props.user.lastLoginTime}&nbsp;&nbsp;<br/>
                    {this.props.user.hobbies.map((item) => <li>{item}&nbsp;&nbsp;</li>)}
                    {this.state.displayUserMoreOption}&nbsp;&nbsp;</p>
                    
                    <button className='ButtonStyle' onClick={() => {
                        if(this.state.displayUserMoreButtonName === 'More Info') {
                            this.setState({
                                displayUserMoreOption : "Phone Number - 9030389834",
                                displayUserMoreButtonName: 'Hide Info'
                            });
                        } else {
                            this.setState({
                                displayUserMoreOption : "...",
                                displayUserMoreButtonName: 'More Info'
                            });
                        }
                    }}>
                        {this.state.displayUserMoreButtonName}
                    </button>&nbsp;&nbsp;
                </div>    
            </div>
        );
    }
}

/* HomeComponent.prototypes = {
    user: React.Prototypes.string,
    message: React.Prototypes.string
} */ 
