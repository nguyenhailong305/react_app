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

    componentWillMount(){
        if(this.props.editItem){
            this.setState({
                noteTitle: this.props.editItem.title, 
                noteContent: this.props.editItem.content,
                id: this.props.editItem.id
            })
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
        if(this.state.id){
            var editOject = {};
            editOject.id = this.state.id;
            editOject.titleNote = this.state.noteTitle;
            editOject.contentNote = this.state.noteContent;

            this.props.editDataStore(editOject);
            this.props.changeEditStatus(); //tat form di
            this.props.alertOn("Sửa Thành Công" , "");
        }else{
            var item = {} ;
            item.titleNote = title ;
            item.contentNote = content;
            // this.props.getData(item);
            // alert(' Thêm dữ liệu '  + JSON.stringify(item) +  " thành công ");
            // // item = JSON.stringify(item);
            this.props.addDataStore(item); //su dung reducer trong store , // dispath addData
            this.props.alertOn("Đã Thêm Mới Thành Công");
        }
      

    }
    printTitle = () => {
        if (this.props.addStatus){//true = add case
            return <h4>Thêm mới</h4>
        }else {
            return <h4> Sửa ghi chú  </h4>
        }
    }

    render() {
        // console.log(this.props.editItem)
        return (
            <div className="col-4 mt-5">
        {this.printTitle()}
        <form>
        <div className="form-group">
          <label htmlFor="noteTitle">Tiêu đề Note</label>
          <input  defaultValue={this.props.editItem.title} onChange={(event) => this.isChange(event) } type="text" className="form-control" placeholder="Tiêu đề Note" name="noteTitle" id="noteTitle" aria-describedby="helpIdNoteTitle" />
          <small id="helpIdNoteTitle" className="form-text text-muted">Điền tiêu đề vào đây</small>
        </div>
        <div className="form-group">
          <label htmlFor="noteContent">Nội dung Note</label>
          <textarea defaultValue={this.props.editItem.content}  onChange={(event) => this.isChange(event) } type="text" className="form-control" placeholder="Nội dung Note" name="noteContent" id="noteContent" aria-describedby="helpIdNoteContent" >
          </textarea>
          <small id="helpIdNoteTitle" className="form-text text-muted">Điền nội dung vào đây</small>
          <button type="reset" className="btn btn-secondary btn-block" onClick={() =>this.addData(this.state.noteTitle, this.state.noteContent)} >Lưu</button>
        </div>
        </form>
      </div>
        );
    }
}
// 
// 
//this.props.editItem
const mapStateToProps = (state, ownProps) => {
    return {
        daTest: state.testConnect,
        editStatus: state.isEdit,
        editItem : state.editItem,
        addStatus :state.isAdd
        
    }
}
//this.props.daTest
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (getItem) => {
            dispatch({type:"addData" , getItem})
        },
        editDataStore: (getItem) => {
            dispatch({type:"Edit" , getItem})
        },
        changeEditStatus: () => {
            dispatch({
              type:"Change_Edit_Status"
            })
          },
          alertOn: (AlertContent) => {
            dispatch({
              type:"Alert_On",AlertContent
            })
          },
          alertOff: () => {
            dispatch({
              type:"Alert_Off"
            })
          },
    }
}
//this.props.addDataStore

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
