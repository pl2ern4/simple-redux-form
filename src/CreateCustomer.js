import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Field, Form, reduxForm } from 'redux-form';
import {Redirect} from 'react-router-dom';
import {createNewUserAction} from './actions';

const CreateCustomer = props => {
    const redirect = () => {
        return <Redirect to="/"/>
    }
    const [value,setValue] = useState(0);
    if(props.toRedirect){
        return <Redirect to="/"/>
    }
    return (<Form name='newCustomer' onSubmit={props.handleSubmit(props.createNewCustomer)}>
                <Field
                    name="name"
                    component="input"
                    type="text"
                    placeholder="Customer Name"
                    onChange={e=>setValue(e.target.value)}
                    value={value}
                />
            <button type="Submit">Create Customer</button>
            <button type="button" onClick={redirect}>Redirect To Customer Contact Page </button>
        </Form>)
}

const NewCustomer = reduxForm({form : 'newCustomer',enableReinitialize: true,})(CreateCustomer);

const mapStateToProps = state=>({
    toRedirect:state.app.isCreatedUser && state.app.isCreatedUser.ok
})

const mapDispatchToProps = dispatch => ({
    createNewCustomer : payload=>dispatch(createNewUserAction(payload))
})

export default connect(mapStateToProps,mapDispatchToProps)(NewCustomer);
