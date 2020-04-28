import React, { Component } from 'react'


export default class AddTask extends Component {
    constructor(props){
        super(props);
        this.state={
          name: "",
          description:"",
          level:"1", //drop down
          start:"", //timestamp
          complete:"", //timestamp
          buttonText:"Add Task",
          duration:0
        }
    }
    startTimer=(e)=>{
        e.preventDefault();
        let timeStamp=Date.now()
        this.setState({
            start:timeStamp,
        });
    }

    formSubmit=(e)=>{
        e.preventDefault();
        let data ={
            name: this.state.name,
            description:this.state.description,
            level:this.state.level, //drop down
            start:this.state.start, //timestamp
            complete:this.state.complete,
            duration:this.state.duration //
        }
        this.props.pushTask(data);
        this.resetForm();
        this.props.handleClose()
        
    //when a person adds a task its adds it to a list
    
    //
    
        // let data = {
        //     name: this.state.name,
        //     email: this.state.email,
        //     subject:this.state.subject,
        //     message: this.state.message
        // }
        
        // axios.post('http://acme.mayank-suchade.com:8080/api/mail', data)
        // .then( res => {
        //     this.setState({ sent: true }, this.resetForm())
        // })
        // .catch( () => {
        //   console.log('Message not sent')
        // })
    }
    resetForm=()=>{
        this.setState({
          name: '',
          description: '',
          level: '',
          start:'',
          complete:'',
          
        })
      };
  
    render() {
        
        return (
            <div>
                 <form onSubmit={e=>this.formSubmit(e)}>
                        <label htmlFor="name">Name:
                        <input onChange={e=>this.setState({name:e.target.value})} type="text" name="name" value={this.state.name} id=""/>
                        </label>
                        <label htmlFor="description">Description:
                        <textarea onChange={e=>this.setState({description:e.target.value})} name="description" placeholder="" value={this.state.description} >
                        </textarea>
                        </label> 
                        <label htmlFor="level">Level:
                        <select id="level" onChange={e=>this.setState({level:e.target.value})} value={this.state.level}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        </label>
                        <button onClick={e=>this.startTimer(e)} >Start</button>
                        <input type="submit"  value={this.state.buttonText}/>
                    </form>
            </div>
        )
    }
}
