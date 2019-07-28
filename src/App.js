import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Field, FormSection, Form, reduxForm } from 'redux-form';
import _ from 'lodash';
import LoadingOverlay from 'react-loading-overlay';
import { confirmAlert } from 'react-confirm-alert';

import 'react-confirm-alert/src/react-confirm-alert.css';
import 'react-widgets/dist/css/react-widgets.css';
import './App.css';

import {getCustomerAction, submitAction, deleteSelectedUserAction, handleErrorClick } from './actions';

import {required, isNumeric, minLength8, isDropDownValid} from './validation';

import {renderDropdownList, renderField} from './fieldComponent';

class App extends Component {

  constructor(props){
    super(props);
    this.state = this.componentState();
  }
  componentState = () =>{
    return {
      contactFields:[],
      isFieldUpdated:false,
      customerContact:[]
    }
  }

  static getDerivedStateFromProps(props,state){
    
    if(props.customerContact[0] && props.customerContact[0]._id){
      props.change('customerList',props.customerContact[0]._id);
    }
    return {
      contactFields:props.customerContact[0] && props.customerContact[0].contactDetail,
    }
  }

  componentDidMount(){
    this.props.getCustomer({key:'customerList'});
  }

  componentDidUpdate(prevProps, prevState){
    const initialValues = {};
    const {customerContact} = this.props;
    // const {contactFields} = this.state;
    // const isNewPropsEqualToPrevProps = _.isEqual(customerContact,prevProps.customerContact);
    
    if(!this.state.isFieldUpdated){
      
      if(customerContact && customerContact[0] && customerContact[0].contactDetail){
          customerContact[0].contactDetail.forEach((obj,key)=>{ console.log(obj,key);
            initialValues[`section_${key}.phone`]=obj.phone;
            initialValues[`section_${key}.isActive`]=obj.isActive;
          });
      }

      Object.keys(initialValues).forEach(obj=>this.props.change(obj,initialValues[obj]));
      this.setState({isFieldUpdated:true});
    }
  }

  onChange = params=>{
    
    if( typeof this.props.customerContact[0] === "undefined"||(this.props.customerContact[0] && params.id!== this.props.customerContact[0].id)){
      this.setState({contactFields:[],isFieldUpdated:false},
        ()=>this.props.getCustomer({...params,key:'customerContact'}));
    }
  }

  handleSubmit= (params,props) => { 
    let new_array = [];
    delete params.customerList;
    Object.keys(params).forEach(obj=>{
      if(_.isObject(params[obj])){
        new_array.push({phone:params[obj].phone, isActive:params[obj].isActive.value})
      }
    });
    props.submitContact({key:'customerContact', contactDetail:new_array,id:props.customerContact[0]._id})
  }
  
  onDelete = (i,customerContact,fn)=>{
      let newContactList = [];

      new Promise((resolve,reject)=>{
        newContactList =customerContact[0].contactDetail && customerContact[0].contactDetail.filter((obj,k)=>i!==k);
        resolve(newContactList);
      })
      .then((result)=>{
        if(newContactList.length){
          fn({action:'delete', key:'customerContact', contactDetail:newContactList,id:customerContact[0]._id})
        }else{
          const newContactField = customerContact;
          newContactField[0].contactDetail=[];
          this.setState({contactFields:newContactField})
        }
      });
      
  }

  createUser = ()=>{
    window.location.href = `/createnewcustomer`;
  }

  addContact = () =>{
    let updatedContactField= this.state.contactFields||[];
    updatedContactField.push({'phone':'','isActive':0});
    this.setState({contactFields:updatedContactField,isFieldUpdated:false});
  }

  getContactFields = params=>{ 
      const {submitting, submitContact ,customerContact} = this.props;
      const {onDelete,addContact} = this;
      const {contactFields} = this.state;
      const statusArray = [{value:0,text:'deactivate'},{value:1,text:'activate'}];
      let html = contactFields && contactFields.map((obj,i)=>{   
                return (
                  <FormSection key={`field_${i}`} name={`section_${i}`}>
                    <tr key={`row_${i}`}>
                      <td className="table-column">
                          <Field
                            name="phone"
                            component={renderField}
                            type="text"
                            placeholder="Phone number"
                            maxlength={15}
                            validate={[required, isNumeric, minLength8]}
                          />
                        </td>
                      <td className="table-column">    
                        <Field
                          name={`isActive`}
                          component={renderDropdownList}
                          data={statusArray}
                          valueField='value'
                          textField='text'
                          defaultValue={obj.isActive}
                          validate={[isDropDownValid]}
                      />
                      </td>  
                      <td className="table-column"> <button type="button" onClick={e=>onDelete(i,customerContact,submitContact)}>Delete</button> </td>
                    </tr>
                  </FormSection>
                )    
          });
      
      return (<>
                {html}
                <tr>
                  <td colSpan="3">
                  <button type="button" onClick={addContact}>
                    Add Number
                  </button>
                  </td>
                </tr>
                <tr>
                  <td colSpan="3">
                  <button type="submit" disabled={submitting}>
                    Update
                  </button>
                  </td>
                </tr>
              </>)
  }
  handleErrorClick=()=>{
    this.props.handleErrorClick();
    this.props.history.push('/');
  }
  render(){ 
    const {
      customerList, 
      isFetching, 
      customerContact, 
      handleSubmit, 
      deleteSelectedUser,
      submitContact,
      error,
      isError,
      } = this.props;

      if(isError){
        confirmAlert({
        title: 'Error',
        message: error||"There is an Error Sorry !!",
        buttons: [
          {
            label: 'Ok',
            onClick: () => this.handleErrorClick('Click Yes')
          },
          
        ]
      });
    }
    return (
            <LoadingOverlay
            active={isFetching}
            spinner
            >
            <Form name="add-contact" onSubmit={handleSubmit(e=>this.handleSubmit(e,{customerContact,submitContact}))}>
                
                <table>
                  <tbody>
                    <tr>
                      <td colSpan="3">
                      <Field
                          busy={isFetching}
                          busySpinner={<span className="fas fa-sync fa-spin" />}
                          name="customerList"
                          component={renderDropdownList}
                          data={customerList}
                          valueField='id'
                          textField='name'
                          placeholder='Select Customer'
                          onChange={this.onChange}
                        />
                      </td>
                    </tr>
                    {!!customerContact.length && this.getContactFields()}
                    <tr>
                    <td colSpan="3">
                      <button type="button" onClick={this.createUser}>
                        Create User
                      </button>
                      </td>
                    </tr>
                    {(customerContact[0] &&
                      (<tr>
                      <td colSpan="3">
                        <button type="button" onClick={e=>deleteSelectedUser(customerContact[0]._id)}>
                          Delete Selected User
                        </button>
                        </td>
                      </tr>))||null
                    }
                  </tbody>
                </table>
            </Form>
          </LoadingOverlay> )
  }
}

const ContactForm = reduxForm({form : 'ContactForm',enableReinitialize: true,})(App);

const mapStateToProps = state=>{
  return {
    customerList : state.app.customerList || [],
    isFetching : state.app.isFetching,
    customerContact : state.app.customerContact || [],
    error: state.app.error,
    isError: state.app.isError
  }
}

const mapDispatchToProps = dispatch => ({
  getCustomer : params=> dispatch(getCustomerAction(params)),
  submitContact : params=>dispatch(submitAction(params)),
  deleteSelectedUser : params=>dispatch(deleteSelectedUserAction(params)),
  handleErrorClick : params=> dispatch(handleErrorClick(params))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
