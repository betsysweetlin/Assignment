import React,{Component} from "react";

class Signup extends Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleSubmit(e) {
        e.preventDefault();
        
        const users = {};
        for (const field in this.refs) {
          users[field] = this.refs[field].value;
          console.log(users);
        }
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if((users.email).match(mailformat)){
          alert("entered mail id is not valid");
          window.location.href="/";
        }
        if((users.psw)!=(users.pswrepeat)){
          if(window.confirm("password did not match")){
            window.location.href="/";
          }else{
            window.location.href="/";
          }
        }
        this.props.addUser(users);
      }
    render(){       
        return(
           <div>
                <form onSubmit={this.handleSubmit} required>
            <div className="container">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr />
            <label htmlFor="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" ref="email" required />
            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" ref="psw" required />
            <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password"ref="pswrepeat" required />
            <p>By creating an account you agree to our <a href="#" style={{color: 'dodgerblue'}}>Terms &amp; Privacy</a>.</p>
            <div className="clearfix">
              <button type="submit" className="signupbtn" 
              >Sign Up</button>
            </div>
          </div>
        </form>
    </div>
        )
    }
}
export default Signup;