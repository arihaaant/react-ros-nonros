import React, { Component } from "react";
import { Joystick } from "react-joystick-component";
import Config from "../scripts/config";

class Teleoperation extends Component {
state={ros: null};

constructor() {
super();
this.init_connection();

this.handleMove = this.handleMove.bind(this);
}

init_connection() {
    this.state.ros = new window.ROSLIB.Ros();
    console.log(this.state.ros);

    this.state.ros.on("connection", () => {
        console.log("Connection established in Teleoperation Component");
        console.log(this.state.ros);
        this.setState({connected: true});
    });
}

handleMove(event){
    console.log("handle move");

    var cmd_vel = new window.ROSLIB.Topic({
          ros: this.state.ros,
          name:"/turtle/cmd_vel",
          messageType : "geometry_msgs/Twist",

    });

    var twist = new window.ROSLIB.Message({
        linear :{
            x: event.y/50,
            y:0,
            z:0,
        },
        angular: {
            x:0,
            y:0,
            z: -event.x/ 50,
        },
    });

    cmd_vel.publish(twist);
}

handleStop(){
    console.log("handle stop");

    var cmd_vel = new window.ROSLIB.Topic({
        ros: this.state.ros,
        name:"/turtle/cmd_vel",
        messageType : "geometry_msgs/Twist",

  });

  var twist = new window.ROSLIB.Message({
      linear :{
          x: 0,
          y:0,
          z:0,
      },
      angular: {
          x:0,
          y:0,
          z:0,
      },
  });

  cmd_vel.publish(twist);
}

}
