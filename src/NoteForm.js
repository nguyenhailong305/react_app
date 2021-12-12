import React, { Component } from 'react';
import {connect} from 'react-redux';


class NoteForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            noteTitle:'',
            noteContent:'',
        }
    }

    isChange =(event) =>{
        const name = event.target.name;
        const value = event.target.value;
        console.log(name);
        console.log(value);
        this.setState({
            [name]: value
        })
    }

    addData = (title, content) =>{
        var item = {} ;
        item.titleNote = title ;
        item.contentNote = content;
        // this.props.getData(item);
        // alert(' Thêm dữ liệu '  + JSON.stringify(item) +  " thành công ");
        // item = JSON.stringify(item);
        this.props.addDataStore(item); //su dung reducer trong store , // dispath addData

    }

    render() {
        return (
            <div className="col-4 mt-5">
        <h3> Sửa nội dung Note</h3>
        <form>
        <div className="form-group">
          <label htmlFor="noteTitle">Tiêu đề Note</label>
          <input onChange={(event) => this.isChange(event) } type="text" className="form-control" placeholder="Tiêu đề Note" name="noteTitle" id="noteTitle" aria-describedby="helpIdNoteTitle" />
          <small id="helpIdNoteTitle" className="form-text text-muted">Điền tiêu đề vào đây</small>
        </div>
        <div className="form-group">
          <label htmlFor="noteContent">Nội dung Note</label>
          <textarea onChange={(event) => this.isChange(event) } type="text" className="form-control" placeholder="Nội dung Note" name="noteContent" id="noteContent" aria-describedby="helpIdNoteContent" defaultValue={""} />
          <small id="helpIdNoteTitle" className="form-text text-muted">Điền nội dung vào đây</small>
          <button type="reset" className="btn btn-secondary btn-block" onClick={() =>this.addData(this.state.noteTitle, this.state.noteContent)} >Lưu</button>
        </div>
        </form>
      </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        daTest: state.testConnect
        
    }
}
//this.props.daTest
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (getItem) => {
            dispatch({type:"addData" , getItem})
        }
    }
}
//this.props.addDataStore

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
