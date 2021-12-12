import {noteData} from './firebaseConnect';

var redux = require('redux');

const noteInitialState = {
    testConnect : 'daTest',
    isEdit :false,
    editItem : {}
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "addData":
            noteData.push(action.getItem);
            console.log(' Thêm dữ liệu '  + JSON.stringify(action.getItem) +  " thành công ");
            return state

            case "Change_Edit_Status":
                
                return {...state,isEdit:!state.isEdit}

            case "Get_Edit_Data":
                
                return {...state,editItem:action.editOject}
        default:
            return state
            
    }
}
var store = redux.createStore(allReducer);
store.subscribe(function (){
    console.log(JSON.stringify(store.getState()));
})
export default store ;