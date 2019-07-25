import React from 'react';
import User from '../usercomponent/user'
import Slider from '../carouselcomponent/carousel'
import CommentForm from '../forms/formMessage'
import Message from '../message'
import { connect } from 'react-redux';


class UserPage extends React.Component {
    constructor(props) {
        super(props)     
    }


    render()  {
    
        const renderUsers = [];
        const comments = this.props.users[this.props.renderID].comments;
        const renderComments = [];
        
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
                  <div className = "avatar" style = { { backgroundImage: 'url('+this.props.users[this.props.renderID].avatarUrl+')', backgroundSize:'cover', backgroundRepeat: "no-repeat"} }></div>
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
    }
}



const mapStateToProps = (state) => {
    let stringId = window.location.href.split("id=");
    let id = stringId[stringId.length-1];
    return {
        users: state.reducer.users,
        renderID: id
    };
  };



  export default connect(mapStateToProps)(UserPage);




