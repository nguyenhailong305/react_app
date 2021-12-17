import {noteData} from './firebaseConnect';

var redux = require('redux');

const noteInitialState = {
    testConnect : 'daTest',
    isEdit :false,
    editItem : {},
    isAdd :false,
    AlertShow :false,
    AlertContent :'',
    AlertType :'',
}



const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "addData":
            noteData.push(action.getItem);
            console.log(' Thêm dữ liệu '  + JSON.stringify(action.getItem) +  " thành công ");
            return state

            case "Change_Edit_Status":
                
                return {...state,isEdit:!state.isEdit}

            case "Change_Add_Status":
                
                return {...state,isAdd:!state.isAdd}

            case "Get_Edit_Data":
                
                return {...state,editItem:action.editOject}

            case "Edit":
                //update du lieu len tren fisebase
                console.log(action.getItem)
                noteData.child(action.getItem.id).update({
                //    noteTitle: action.getItem.noteTitle, 
                //    noteContent: action.getItem.noteContent,

                   titleNote: action.getItem.titleNote,
                   contentNote: action.getItem.contentNote,

                })
                return {...state,editItem:{}}

            case "DELETE":   
                // console.log(action.DeleteId);
                noteData.child(action.deleteId).remove();   
                console.log("Da xoa phan tu co id la " + action.deleteId);   
                return state
            case "Alert_On":
                
                return {...state,AlertShow:true,AlertContent:action.AlertContent,AlertType:action.AlertType}
            
            case "Alert_Off":
                
                return {...state,AlertShow:false,}
               
        default:
            return state
            
    }
}
var store = redux.createStore(allReducer);
store.subscribe(function (){
    console.log(JSON.stringify(store.getState()));
})
export default store ;