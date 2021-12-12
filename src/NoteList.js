import React, { Component } from 'react';
import NoteItem from './NoteItem';
import {noteData} from './firebaseConnect';

class NoteList extends Component {
constructor(props) {
  super(props);
  this.state = {
    dataFisebase:[],
  }
}

componentWillMount() {
  noteData.on('value',(notes) => {
    var arrayData = [];
    notes.forEach(element => {
      const key = element.key;
      const titleNote = element.val().titleNote;
      const contentNote = element.val().contentNote;
      // console.log(key);
      arrayData.push({
        id: key,
        title: titleNote,
        content: contentNote
      });
    });
    this.setState({
      dataFisebase: arrayData,
    });
    // console.log(notes.val());
    // console.log(arrayData);
  })
}

  getData = () => {
    if (this.state.dataFisebase){
      // console.log(this.state.dataFisebase);
     return this.state.dataFisebase.map((value, key) => {
        return (
          <NoteItem 
          key={key}
          i = {key}
          note = {value}
          titleNote = {value.title}
          contentNote={value.content}/>
        )
      })
    }
  }
    render() {
        return (
            <div className="col mt-5">
            <div id="noteList" role="tablist"   aria-multiselectable="true" >
              {
                this.getData()
              }
              {/* <NoteItem/>
              <NoteItem/>
              <NoteItem/>
              <NoteItem/> */}
            </div>
          </div>
        );
    }
}

export default NoteList;