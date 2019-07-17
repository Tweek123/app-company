import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import User from '../usercomponent/user'
import { connect } from 'react-redux';
import { addUser } from "../../actions/actions";
import FormGenerateUser from '../forms/formGenerateUser'

class HomePage extends React.Component {
    constructor(props) {
        super(props)
     
    }

    render()  {
    
        let renderUsers = [];

        this.props.users.forEach(user => {
            renderUsers.push(<User user={user} renderType="HOME_RENDER"/>)
        });

        return <div className='row'>
        {renderUsers}
        <FormGenerateUser/>
        </div>
        
      }
}


const mapStateToProps = (state) => {

    state.reducer.users.forEach(user => {
        user.renderType = "HOME_RENDER";
     });

    return {
    users: state.reducer.users,
     
    };
  };



  export default connect(mapStateToProps)(HomePage);




