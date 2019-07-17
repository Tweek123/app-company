import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import User from '../usercomponent/user'
import Slider from '../carouselcomponent/carousel'
import CommentForm from '../forms/formMessage'
import Message from '../message'
import { connect } from 'react-redux';
import { getUsers } from '../../actions/actions'


class UserPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {user: this.props.renderUser};
     
    }

    render()  {
        
    try {

        let renderUsers = [];
        let comments = this.props.users[this.props.renderID].comments;
        let renderComments = [];
        


        if(comments.length-5 >0) { 
            for(let i = comments.length-5; i<comments.length; i++ ) {
                renderComments.push(<Message comment = {comments[i]}/>)
            }
        } else {
            for(let i = 0; i<comments.length; i++ ) {
                renderComments.push(<Message comment = {comments[i]}/>)
            }
        }


        this.props.users.forEach(user => {
            user.renderType = "CAROUSEL_RENDER";
            renderUsers.push(<User user={user}/>)
        });


        return (
        <div className = "user-page"> 
        <Slider users = {renderUsers}/>
        <div className = "row">  
         <div className = "card profile-card">
           <div src="" className = "avatar" style = { { backgroundImage: 'url('+this.props.users[this.props.renderID].avatarUrl+')', backgroundSize:'cover', backgroundRepeat: "no-repeat"} }></div>
           <h1>{this.props.users[this.props.renderID].firstName}</h1>
           <h1>{this.props.users[this.props.renderID].lastName}</h1>
           <p className="title">{this.props.users[this.props.renderID].position}</p>
           <p>{this.props.users[this.props.renderID].address}</p>
        </div>
       </div>
       {renderComments}   
       <CommentForm userID = {this.props.renderID} /> 
      </div>

        )
    } catch {

        return (
            <div className = "user-page"> 
            </div>
            )
        }
      }
}


const mapStateToProps = (state) => {
    let stringId;
    try {
        stringId = state.routing.locationBeforeTransitions.search.split("id=");
    } catch {
        getUsers();
        stringId = window.location.href.split("id=");
    }
    let id = stringId[stringId.length-1];
    return {
        users: state.reducer.users,
        renderID: id
    };
  };



  export default connect(mapStateToProps)(UserPage);




