import React, {Component} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Typography } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import FormHelperText from '@material-ui/core/FormHelperText';

const customStyles = {
    content:{
        top : '50%',
        left : '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
}

const TabContainer = function(props) {
    return (
    <Typography container='div' style={{padding: 0, textAlign: 'center'}}>
        {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
}


class Header extends Component{

    constructor(){
        super();
        this.state={
            modalIsOpen: false,
            value: 0,
            username: "",
            loginPassword: "",
            registerPassword: "",
            firstname: "",
            lastname: "",
            email: "",
            contactno: "",
            usernameRequired: "dispNone",
            loginPasswordRequired: "dispNone",
            registerPasswordRequired: "dispNone",
            firstnameRequired: "dispNone",
            lastnameRequired: "dispNone",
            emailRequired: "dispNone",
            contactnoRequired: "dispNone"
        }
    }

   
    openModalHandler = () => {
        this.setState({modalIsOpen: true});
        this.setState({
            usernameRequired: 'dispNone',
            loginPasswordRequired: "dispNone",
            registerPasswordRequired: "dispNone",
            firstnameRequired: "dispNone",
            lastnameRequired: "dispNone",
            emailRequired: "dispNone",
            contactnoRequired: "dispNone",
            username: "",
            loginPassword: "",
            registerPassword:"",
            firstname: "",
            lastname: "",
            email: "",
            contactno: "",
            value: 0        
        });
    }

    closeModalHandler = () => {
        this.setState({modalIsOpen: false});
    }

    openTabHandler = (event,value) => {
        this.setState({value})
    }

    loginClickHandler= () => {
        this.state.username === "" ? this.setState({usernameRequired: 'dispBlock'}) 
        : this.setState({usernameRequired: 'dispNone'})

        this.state.loginPassword === "" ? this.setState({loginPasswordRequired: 'dispBlock'}) 
        : this.setState({loginPasswordRequired: 'dispNone'})
    }

    registerClickHandler= () => {
        this.state.firstname === "" ? this.setState({firstnameRequired: 'dispBlock'}) 
        : this.setState({firstnameRequired: 'dispNone'})

        this.state.lastname === "" ? this.setState({lastnameRequired: 'dispBlock'}) 
        : this.setState({lastnameRequired: 'dispNone'})

        this.state.email === "" ? this.setState({emailRequired: 'dispBlock'}) 
        : this.setState({emailRequired: 'dispNone'})

        this.state.contactno === "" ? this.setState({contactnoRequired: 'dispBlock'}) 
        : this.setState({contactnoRequired: 'dispNone'})

        this.state.registerPassword === "" ? this.setState({registerPasswordRequired: 'dispBlock'}) 
        : this.setState({registerPasswordRequired: 'dispNone'})

    } 

    inputUserNameChangeHandler =(e) => {
        this.setState({username: e.target.value})
    }

    inputLoginPasswordChangeHandler = (e) => {
        this.setState({loginPassword: e.target.value})
    }

    inputFirstNameChangeHandler = (e) => {
        this.setState({firstname: e.target.value})
    }

    inputLastNameChangeHandler =(e) => {
        this.setState({lastname: e.target.value})
    }

    inputEmailChangeHandler = (e) =>{
        this.setState({email: e.target.value})
    }

    inputContactNoChangeHandler = (e) => {
        this.setState({contactno: e.target.value})
    }

    inputRegisterPasswordChangeHandler = (e) => {
        this.setState({registerPassword: e.target.value})
    }


    render (){
        return (
            <header className="app-header">
                <img src={logo} className="app-logo" alt="logo" />
                    <div className="login-button">
                        <Button variant="contained" color="default" onClick={this.openModalHandler}>
                            Login
                        </Button>
                    </div>

                <Modal isOpen={this.state.modalIsOpen} contentLabel='Login Modal' ariaHideApp={false}
                onRequestClose={this.closeModalHandler}
                style={customStyles}>

                    <Tabs className='tabs' value={this.state.value} onChange={this.openTabHandler}>
                        <Tab label='Login' />
                        <Tab label='Register' />
                    </Tabs>

                    {this.state.value===0 &&
                <TabContainer>
                    <FormControl required>
                        <InputLabel htmlFor='username'>UserName</InputLabel>
                        <Input id='username' type='text' username = {this.state.username} 
                        onChange={this.inputUserNameChangeHandler} />
                        <FormHelperText className={this.state.usernameRequired}> <span className='red'>
                            required </span>
                        </FormHelperText>
                    </FormControl> <br /> <br />
                    <FormControl required>
                        <InputLabel htmlFor='loginPassword'>Password</InputLabel>
                        <Input id='loginPassword' type='password' loginpassword={this.state.loginPassword}
                        onChange={this.inputLoginPasswordChangeHandler}/>
                        <FormHelperText className={this.state.loginPasswordRequired}> <span className='red'>
                            required </span>
                        </FormHelperText>
                    </FormControl><br /> <br />
                    <Button variant='contained' color='primary' onClick={this.loginClickHandler}>LOGIN</Button>
                </TabContainer>
                    }

                    {this.state.value===1 &&
                    <TabContainer>
                    <FormControl required>
                        <InputLabel htmlFor='firstname'>First Name</InputLabel>
                        <Input id='firstname' type='text' firstname = {this.state.firstname} 
                        onChange={this.inputFirstNameChangeHandler} />
                        <FormHelperText className={this.state.firstnameRequired}> <span className='red'>
                            required </span>
                        </FormHelperText>
                    </FormControl> <br /> <br />
                    <FormControl required>
                        <InputLabel htmlFor='lastname'>Last Name</InputLabel>
                        <Input id='lastname' type='text' lastname = {this.state.lastname} 
                        onChange={this.inputLastNameChangeHandler} />
                        <FormHelperText className={this.state.lastnameRequired}> <span className='red'>
                            required </span>
                        </FormHelperText>
                    </FormControl> <br /> <br />
                    <FormControl required>
                        <InputLabel htmlFor='email'>Email</InputLabel>
                        <Input id='email' type='email' email = {this.state.email} 
                        onChange={this.inputEmailChangeHandler} />
                        <FormHelperText className={this.state.emailRequired}> <span className='red'>
                            required </span>
                        </FormHelperText>
                    </FormControl> <br /> <br />
                    <FormControl required>
                        <InputLabel htmlFor='registerPassword'>Password</InputLabel>
                        <Input id='registerPassword' type='password' registerPassword={this.state.registerPassword}
                        onChange={this.inputRegisterPasswordChangeHandler}/>
                        <FormHelperText className={this.state.registerPasswordRequired}> <span className='red'>
                            required </span>
                        </FormHelperText>
                    </FormControl><br /> <br />
                    <FormControl required>
                        <InputLabel htmlFor='contactno'>Contact No</InputLabel>
                        <Input id='contactno' type='text' contactno = {this.state.contactno} 
                        onChange={this.inputContactNoChangeHandler} />
                        <FormHelperText className={this.state.contactnoRequired}> <span className='red'>
                            required </span>
                        </FormHelperText>
                    </FormControl> <br /> <br />
                    <Button variant='contained' color='primary' onClick={this.registerClickHandler}>REGISTER</Button>
                </TabContainer>
                    }
                </Modal>
                
                </header>
            
        )
    }
}

export default Header;