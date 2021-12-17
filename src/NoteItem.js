import React, { Component } from 'react';
import {connect} from 'react-redux';

class NoteItem extends Component {
  twoActionButton = () => {
    this.props.changeEditStatus(); //action 1
    //ham lay noi dung tron store  , de store update du lieu -- action 2
    // console.log(this.props.note);
    this.props.getEditData(this.props.note);
  }

  deleteData = () => {
    // console.log(this.props.note.id);
    this.props.getDeleteData(this.props.note.id);  
    // console.log(this.props.note.title);
    this.props.alertOn('Xoá ghi chú " ' + this.props.note.title + '" Thành Công ' )
  }
    render() {
        return (
            <div className="card">
            <div className="card-header" role="tab" id="note1">
              <h5 className="mb-0">
                <a  data-toggle="collapse"  data-parent="#noteList"  href={"#number" + this.props.i}  aria-expanded="true" aria-controls="noteContent1">
                  {this.props.titleNote}
                  
                </a> 
                <div className="btn-group float-right" >
                <button className="btn btn-outline-danger mr-2 ml-auto  " onClick={() => this.twoActionButton()}  type="button"  >Sửa</button>
                <button className="btn btn-outline-success ml-auto "  onClick={() => this.deleteData()} type="button"  float="right" >Xóa</button>
                </div>
         
                
              </h5>
            </div>
            <div id={"number" + this.props.i} className="collapse in" aria-labelledby="note1" role="tabpanel" >
              <div className="card-body">
              {this.props.contentNote}
              </div>
            </div>
           
          </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
    editStatus: state.isEdit 
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeEditStatus: () => {
      dispatch({
        type:"Change_Edit_Status"
      })
    },
      getEditData: (editOject) => {
        dispatch({
          type:"Get_Edit_Data",
        editOject
      })
    },
    getDeleteData: (deleteId) => {
      dispatch({
        type:"DELETE",
      deleteId
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

export default connect(mapStateToProps, mapDispatchToProps)(NoteItem)  ;

