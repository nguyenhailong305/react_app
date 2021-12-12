import React, { Component } from 'react';
import { noteData } from './firebaseConnect';
import './App.css';
import NoteForm from './NoteForm';
import NoteList from './NoteList';
import Nav from './Nav';
import {connect} from 'react-redux';


class App extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {}
  // }

  // addData = (item) => {
  //   noteData.push(item);
  // }
  showForm = () => {
    if(this.props.isEdit){
      return <NoteForm/>
    }
  }
  render() {
    noteData.once('value').then(function(snapshot) {
      // console.log(snapshot.val());
    })
    console.log(noteData);
    return (
      <div>
      <Nav/>
       <div className="container">
           <div className="row">
            <NoteList/>
            {
            this.showForm()
            }
           </div>
       </div>
       </div>
   
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit,

  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeEditStatus: () => {
      dispatch({
        type:"Change_Edit_Status"
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
