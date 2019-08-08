import React, { useState } from 'react';
import './login.css';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import BigComponent from './app/component/component';
import {Link} from 'react-router-dom'
// import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Popup from './app/component/popup'


const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(1),
      width: '350px',
    },
  }));

  const ColorButton = withStyles(theme => ({
    root: {
      color: theme.palette.getContrastText('#f76262'),
      backgroundColor: '#f76262',
      '&:hover': {
        backgroundColor: '#c8dad3',
        color: theme.palette.getContrastText('#c8dad3'),
      },
      margin:"10px 10px 10px 23px",
      width:'350px',
    },
  }))(Button);



export default function Login ({kirimloggedIn}) {

    const classes = useStyles();

    const [values, setValues] = React.useState({
        username: '',
        password: '',
      });

    // const [login, setlogin] = useState(false)

    const handleChange = (username, password, redirect) => event => {
        setValues({ ...values, [username]: event.target.value, [password]: event.target.value, [redirect] : true});
    };

    const handleLoggedIn = (value) => {
          this.props.kirimloggedIn(value)
      }


    const signin = () => {
        if (values.username === 'a') {
            if (values.password === 'a') {
                // setlogin(true)
                kirimloggedIn(true)
            } else {
                alert('Password anda salah');
                    // setlogin(false)
                kirimloggedIn(false)   
            }
        } else {
            alert('Sorry, your username is not registered');
            // setlogin(false)
            kirimloggedIn(false)
            return (
                <Popup 
                        title='LOGIN FAILED'
                        content='Sorry, your username is not registered'
                />
            )
            

           
        }
    }

    // const isi = () => {
    //     return (
    //         <div className='login'>
    //         <div className='login-center'>
    //             <img src="https://s3.gifyu.com/images/logo_facegram.png" alt=""></img>
    //             <Box
    //                 boxShadow={3}
    //                 bgcolor="background.paper"
    //                 m={1}
    //                 p={1}
    //                 style={{ width: '25rem', height: '23rem' }}
    //                 marginTop="120px"
    //             >
    //                 <form className={classes.container} noValidate autoComplete="off" >
    //                     <p id='form-name-app'>facegram</p>
    //                     <TextField
    //                         id="outlined-name"
    //                         label="Username"
    //                         className={classes.textField}
    //                         value={values.name}
    //                         onChange={handleChange('username')}
    //                         margin="10px"
    //                         variant="outlined"
    //                     />
    //                     <TextField
    //                         id="outlined-password-input"
    //                         label="Password"
    //                         className={classes.textField}
    //                         type="password"
    //                         autoComplete="current-password"
    //                         onChange={handleChange('password')}
    //                         margin="10px"
    //                         variant="outlined"
    //                     />
    //                     {/*<ColorButton variant="contained" color="primary" className={classes.margin} onClick={() => signin()}>
    //                         Sign In 
    //                     </ColorButton>*/}
    //                     <Link id="button00" to="/main"><ColorButton variant="contained" color="primary" className={classes.margin} onClick={() => signin()}>Sign in</ColorButton></Link>
                        
    //                     <i style={{textAlign:'center', width:'100%'}}>If you don't have an account, please <a href='http://localhost:3000'>register</a></i>
    //                 </form>
    //             </Box>
    //         </div>
    //         <div className='login-bottom'>
    //             <div style={{width:'50%'}}>
    //                 <p>
    //                 <a href='http://localhost:3000'>About us</a>
    //                 <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
    //                 <a href='http://localhost:3000'>Jobs</a>
    //                 </p>
    //             </div>
    //             <div style={{width:'50%', textAlign:'right'}}>
    //             <i>&copy; 2019 FACEGRAM</i>
    //             </div>
    //         </div>
    //         </div>
    //     )
    // }

    return (
        /*<BigComponent
            islogin={(e) => this.setState(this.state.login=e.target.value)}
            ClassName='login'
            smallComponent={isi()} >
        </BigComponent>*/
        <div className='login'>
            <div className='login-center'>
                <img src="https://s3.gifyu.com/images/logo_facegram.png" alt=""></img>
                <Box
                    boxShadow={3}
                    bgcolor="background.paper"
                    m={1}
                    p={1}
                    style={{ width: '25rem', height: '23rem' }}
                    marginTop="120px"
                >
                    <form className={classes.container} noValidate autoComplete="off" >
                        <p id='form-name-app'>facegram</p>
                        <TextField
                            id="outlined-name"
                            label="Username"
                            className={classes.textField}
                            value={values.name}
                            onChange={handleChange('username')}
                            // margin="10px"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            className={classes.textField}
                            type="password"
                            autoComplete="current-password"
                            onChange={handleChange('password')}
                            // margin="10px"
                            variant="outlined"
                        />
                        {/*<ColorButton variant="contained" color="primary" className={classes.margin} onClick={() => signin()}>
                            Sign In 
                        </ColorButton>*/}
                        <Link id="button00" to="/main"><ColorButton variant="contained" color="primary" className={classes.margin} onClick={() => signin()}>Sign in</ColorButton></Link>
                        
                        <i style={{textAlign:'center', width:'100%'}}>If you don't have an account, please <a href='http://localhost:3000'>register</a></i>
                    </form>
                </Box>
            </div>
            <div className='login-bottom'>
                <div style={{width:'50%'}}>
                    <p>
                    <a href='http://localhost:3000'>About us</a>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <a href='http://localhost:3000'>Jobs</a>
                    </p>
                </div>
                <div style={{width:'50%', textAlign:'right'}}>
                <i>&copy; 2019 FACEGRAM</i>
                </div>
            </div>
            </div>
    )
}