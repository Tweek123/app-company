import React from 'react';
import { addComment } from "../../actions/actions";
import { connect } from 'react-redux';

class formMessage  extends React.Component {
    constructor(props) {
        
        super(props);
        this.form = new Object;

        this.mouseOver = false;

        let notValid = new Object;
        notValid.title = false;
        notValid.comment = false;
        notValid.phoneLenght = false;
        notValid.phone1 = false;
        notValid.phone2 = false;
        notValid.phone = false;
        notValid.valid = false;

        this.clicked = false;
        this.state = {notValid: notValid};
    }


    render()  {
            return(
            <div className="container-contact100">
                <div className="wrap-contact100">
                    <div className="contact100-form validate-form" >
                        <span className="contact100-form-title">
                            Message
                        </span>
        
                        <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                            <input className={ this.state.notValid.phone? "input100 not-valid-data": "input100"} type="text" onChange={() => inputChange.bind(this)()} name="" placeholder="Phone number" ref={(inputPhone) => { this.form.phone = inputPhone; }}></input>
                            <span className="focus-input100-1"></span>
                            <span className="focus-input100-2"></span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                            <input className={ this.state.notValid.title? "input100 not-valid-data": "input100"} type="text" onChange={() => inputChange.bind(this)()}  name="" placeholder="Title" ref={(inputTitle) => { this.form.title = inputTitle; }}></input>
                            <span className="focus-input100-1"></span>
                            <span className="focus-input100-2"></span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate = "Message is required">
                            <textarea onBlur={disableButton.bind(this)} onFocus={enableButton.bind(this)} className={ this.state.notValid.comment? "input100 not-valid-data": "input100"} onChange={() => inputChange.bind(this)()} name="text" placeholder="Your comment" ref={(inputMessage) => { this.form.comment = inputMessage; }}></textarea>
                            <span className="focus-input100-1"></span>
                            <span className="focus-input100-2"></span>
                        </div>
        
                        <div className="container-contact100-form-btn">
                            <button     onMouseOver={() => mouseOver.bind(this)()} onMouseOut={() => mouseOut.bind(this)()}  disabled = { this.state.notValid.valid? false: true}  onClick={() => clicked.bind(this)()} className="contact100-form-btn" ref={(buttonSend) => { this.form.button = buttonSend; }}          >
                                Send Comment
                            </button>
                        </div>
                    </div>
                </div>



                
            </div>
            
            )
        
      }
}

function mouseOver() {
    this.mouseOver = true;
}

function mouseOut() {
    this.mouseOver = false;

}
function enableButton() {
      this.clicked = false;
      let notValidObj = this.state.notValid;

      notValidObj.valid = true;

      this.setState({ 
         notValid: this.state.notValid
      });   
}

function inputChange() {
    if(this.clicked === true) {
        let form = this.form;
        let notValid = checkValid(form);

        this.setState({ 
            notValid: notValid
        });
    }
}
function clicked() {  
    let form = this.form;
    let notValid = checkValid(form); 
    this.clicked = true;
    this.setState({ 
        notValid: notValid
    });

    if(notValid.valid === true) {
        this.props.dispatch(addComment(this.form, this.props.userID))
    }

    disableButton.bind(this)();
}



function disableButton() {
    if(!this.mouseOver || this.clicked) {
      let notValidObj = this.state.notValid;

      notValidObj.valid = false;

      this.setState({ 
         notValid: this.state.notValid
      });
    }
}

function checkValid(form) {


    let notValidObj = new Object;
    notValidObj.title = false;
    notValidObj.comment = false;
    notValidObj.phoneLenght = false;
    notValidObj.phone1 = false;
    notValidObj.phone2 = false;
    notValidObj.valid = true;
  
    if(  form.title.value.length < 5 || 80 <form.title.value.length) {
      notValidObj.title = true;
      notValidObj.valid = false;
    } 
    
    if( 128 < form.comment.value.length ) {
      notValidObj.comment  = true;
      notValidObj.valid = false;
    } 
  
    let phone1 = "+79";
    let phone2 = "89";
     

    
    for(let i=0; i<3;i++) {
  
      if(phone1[i] !== form.phone.value[i] && i<3) {
        notValidObj.phone1 = true;
      }
  
      if(phone2[i] !== form.phone.value[i] && i<2) {
        notValidObj.phone2 = true;
      }

    }

    if(form.phone.value.length !== 11 && notValidObj.phone2 === false) {
        notValidObj.phoneLenght = true;
        notValidObj.valid = false;
        notValidObj.phone = true;
    }

      if(form.phone.value.length !== 12 && notValidObj.phone1 === false) {
        notValidObj.phoneLenght = true;
        notValidObj.valid = false;
        notValidObj.phone = true;
    }
    
  
    if(notValidObj.phone1 && notValidObj.phone2) {
      notValidObj.valid = false;
      notValidObj.phone = true;
    }
  
    return notValidObj; 
  }





const mapStateToProps = (state) => {

    return {
    users: state.reducer.users,
    };
  };



  export default connect(mapStateToProps)(formMessage);

