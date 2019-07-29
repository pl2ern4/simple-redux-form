import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Field, Form, reduxForm } from 'redux-form';
import {Redirect} from 'react-router-dom';
import {createNewUserAction} from './actions';
import {renderField} from './fieldComponent';
import {required, maxLength15, minLength2, isString} from './validation';

const CreateCustomer = props => {
    
    const [toRedirect,setToBeRedirect] = useState(false);
    if(props.toRedirect || toRedirect){
        return <Redirect to="/"/>
    } 
    return (<Form name='newCustomer' onSubmit={props.handleSubmit(props.createNewCustomer)}>
                <p className="heading">Create New User</p>
                <Field
                    name="name"
                    component={renderField}
                    type="text"
                    placeholder="Customer Name"
                    validate={[required, maxLength15, minLength2, isString]}
                />
                {props.touched &&((props.error && <span>{props.error}</span>))}
            <p><button type="Submit">Create Customer</button></p>
            <p><button type="button" onClick={e=>setToBeRedirect(true)}>Redirect To Customer Contact Page </button></p>
        </Form>)
}

const NewCustomer = reduxForm({
    form : 'newCustomer',
    enableReinitialize: true,})(CreateCustomer);

const mapStateToProps = state=>({
    toRedirect:state.app.isCreatedUser && state.app.isCreatedUser.ok
})

const mapDispatchToProps = dispatch => ({
    createNewCustomer : payload=>dispatch(createNewUserAction(payload))
})

export default connect(mapStateToProps,mapDispatchToProps)(NewCustomer);
