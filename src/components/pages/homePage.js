import React from 'react';
import User from '../usercomponent/user'
import { connect } from 'react-redux';
import FormGenerateUser from '../forms/formGenerateUser'
import { getUsers } from '../../actions/actions'
class HomePage extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.dispatch(getUsers())
    }

    render()  {
        
        const renderUsers = [];

        this.props.users.forEach(user => {
            user.renderType = "HOME_RENDER";
            renderUsers.push(<User user={user}/>)
        });

        return <div className='row'>
                    {renderUsers}
                    <FormGenerateUser/>
                </div>
      }
}


const mapStateToProps = (state) => {
    return {
        users: state.reducer.users,
    };

  };

  export default connect(mapStateToProps)(HomePage);




