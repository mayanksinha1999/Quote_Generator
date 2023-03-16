import React, { Component } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import './App.css';
import Button from '@mui/material/Button';


export class App extends Component {
  state = {
    advice:''
  };

 
  componentDidMount(){
    console.log("component did mount");
    this.fetchAdvice();
  }

  fetchAdvice = () =>{
    axios.get('https://api.adviceslip.com/advice')
      .then((response)=>{
        const {advice} =  response.data.slip;
        // console.log(response.data.slip.advice);
        this.setState({advice});
      })
      .catch((error)=>{
        console.log(error);
      })
  }

  render() {
    console.log("inside render");
    const {advice} = this.state;
    return (
      
      <div >
        <Container maxWidth="sm" style={{backgroundColor:'green'}}>
          <Card variant="outlined" 
          style={{position:'absolute', top:'50%', left:'50%', textAlign:'center',
                  transform: 'translate(-50%, -50%)', padding:'50px', borderRadius:'8px', boxShadow:'8px 8px'}}>
            {advice}
            <br/>
          <Button variant="contained" style={{marginTop:'10px'}} onClick={this.fetchAdvice}>Give Me Advice</Button>
          </Card>
        </Container>
          
        
      </div>
    )
  }
}

export default App
