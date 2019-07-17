import React from 'react';

class Message extends React.Component {
    constructor(props) {
        
        super(props);
    }


    render()  {
        
            return(
            <div className="container-message100 messages">
                <div className="wrap-message100">
                    <div className="message100-form validate-form">
                        <div className="row">
                                <span className="message100-form-title">
                                    {this.props.comment.title} 
                                </span>
                                <span className="message100-form-title phonenumber">
                                    {this.props.comment.phone}
                                </span>	
                        </div>
        
                        <div className="wrap-text100" data-validate = "Valid email is required: ex@abc.xyz">
                            <p>
                                {this.props.comment.message}
                            </p>	
                        </div>
                    </div>
                </div>
            </div>            
        )
        
      }
}



export default Message




