import React, { Component } from 'react';
import {
    Grid, Row, Col
} from 'react-bootstrap';
import Tabs from './template/tab'
import Display from './notification/display'
class ConfigNotification extends Component{
  constructor(){
    super();
    this.state = {

    }

  }
   activeState(val){
      var data = {'tab' : val}
      this.props.callbackFromParent(data)
   }
    render(){
        return (
            <div className="content">
                <Grid fluid>
                 <Tabs active="4" callbackFromParent ={this.activeState.bind(this)}/>
                  <Row>
                    <Display/>
                  </Row>

                 </Grid>
            </div>
        );
    }
}


export default ConfigNotification;
