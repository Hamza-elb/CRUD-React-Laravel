import React, { Component, Fragment } from 'react';
import axios from 'axios';
//import './style.css'
import SuccessAlert from './SuccessAlert';
import ErrorAlert from './ErrorAlert';

export default class Edit extends Component {
     constructor(props){
            super(props);
              this.state={
                name:'',
                email:'',
                gender:'',
                alert_msg:''
                }
              this.handelNameInputChange=this.handelNameInputChange.bind(this); 
              this.handelEmailInputChange=this.handelEmailInputChange.bind(this); 
              this.handelGenderInputChange=this.handelGenderInputChange.bind(this);  
              this.handelForumSubmit=this.handelForumSubmit.bind(this); 
              this.handleClean=this.handleClean.bind(this);

        }

        componentDidMount(){
     axios.get('http://127.0.0.1:8000/edit/'+this.props.match.params.id)
     .then(response=>{
       this.setState({
         name : response.data.name,
         email : response.data.email,
         gender : response.data.gender,
       });
     });
   }

        
        handelNameInputChange(e){
            this.setState({
                name:e.target.value
            })
        }

        handelEmailInputChange(e){
            this.setState({
                email:e.target.value
            })
        }

        handelGenderInputChange(e){
                     
            this.setState({
                gender : e.target.value
            });
        }

        handelForumSubmit(e){
            e.preventDefault();
            const student = {
                name : this.state.name,
                email : this.state.email,
                gender : this.state.gender,
            }

          axios.put('http://127.0.0.1:8000/update/'+this.props.match.params.id,student)
          .then(response=>{
               this.setState({alert_msg:"success"})
          }).catch(error=>{
              this.setState({alert_msg:"error"});
          })

            this.setState({
                name:'',
                email:'',
                gender:''
            })

        }

    handleClean(){
        this.setState({
                name:'',
                email:'',
                gender:''
            })
    }
       

    render() 
    {
      return (
          <Fragment>
              <hr/>
              <div className="mb-3">
  < button type="submit" onClick={this.handleClean} class="btn border-shadow delete" >
    <span class="text-gradient">
      <i class="fas fa-broom"></i>
      </span>
      </button>
</div>

              {this.state.alert_msg=="success"?<SuccessAlert/>:null}
              {this.state.alert_msg=="error"?<ErrorAlert/>:null}
        
<form onSubmit={this.handelForumSubmit}>
<div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" name="name" placeholder="Enter Your Name..."
    onChange={this.handelNameInputChange}
    value={this.state.name}
    />
    
  </div>


  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name="email" placeholder="Enter Your Email..."
    onChange={this.handelEmailInputChange}
    value={this.state.email}
    />
    
  </div>
  <div className="form-group">

      <div className="mb-3">

         <label htmlFor="gender" class="text-dark">Gender</label>
       </div>


                   <div className="radio-buttons">
                            <input type="radio" name="gender"
                            onChange={this.handelGenderInputChange}
                            value="Male"
                           checked={this.state.gender=="Male"}
                           />
                            <label htmlFor="radio-2" className="radio-label">Male</label>
                        </div>



                        <div className="radio-buttons">
                            <input type="radio"  name="gender" 
                             value="Female"
                           checked={this.state.gender=="Female"}
                            onChange={this.handelGenderInputChange}
                  
                            />
                            <label htmlFor="radio-3" className="radio-label">Female</label>
                        </div>
                        
        </div>

<div className="mb-3">
  < button type="submit"  className="btn btn-primary">Submit</button>
</div>
</form>
    </Fragment>        
        );
    }
}