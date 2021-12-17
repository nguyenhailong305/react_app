import React, { Component } from 'react';
import { Alert, AlertContainer } from "react-bs-notifier";
import { connect } from 'react-redux';

class AlertInfo extends Component {
    handleDismiss =() => {
        this.props.alertOff();
    }
     
    render() {
        
        if(this.props.AlertShow===false)
            return null ;
            
        return (
            
            <AlertContainer position="top-left">
					<Alert type="success"  onDismiss={() => this.handleDismiss()} timeout = {1000}>{this.props.AlertContent}</Alert>	   
        </AlertContainer>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        AlertShow: state.AlertShow,
        AlertContent: state.AlertContent,
        AlertType: state.AlertType
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        alertOff: () => {
            dispatch({
              type:"Alert_Off"
            })
          },
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(AlertInfo);
