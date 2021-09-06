import React, {Component} from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { message } from "statuses";

class RobotState extends Component {
    state ={
        ros: null,
        x:0,
        y:0,
        orientation:0,
        linear_velocity:0,
        angular_velocity:0,
    };
     
pose_subscriber = new window.ROSLIB.Topic({
         ros : this.state.ros,
});



componentDidMount()
{
    this.getRobotState();
}

getRobotState(){
        var pose_subscriber = new window.ROSLIB.Topic({
            ros: this.state.ros,
            name: "/amcl_pose",
            messageType: "geometry_msgs/PoseWithCovarianceStamped",
        });

pose_subscriber.subscribe((message) => {
           this.setState({x: message.pose.pose.position.x.toFixed(2) });
           this.setState({y:message.pose.pose.position.y.toFixed(2) });
      this.setState({
              orientation: this.getOrientationfromQuarternion(
                  message.pose.pose.orientation
              ).toFixed(2),
      });
        });
    
var velocity_subscriber= new window.ROSLIB.Topic({
   ros: this.state.ros,
   name : "/odom",
   messageType: "nav_msgs/Odometry",
});
}


getOrientationfromQuarternion(ros_orientation_quarternion)
{
    var q = Three.Quarternion(
        ros_orientation_quarternion.x,
        ros_orientation_quarternion.y,
        ros_orientation_quarternion.z,
        ros_orientation_quarternion.w
    );
}

    render(){
        return (
            <div>
               <Row>
                   <Col>
                   <h4 className="mt-4">Position</h4> 
                   <p className="mt-0">x: {this.state.x}</p>
                   <p className="mt-0">y: {this.state.y}</p>
                   <p className="mt-0">Orientation :{this.state.orientation}</p>
                   </Col>
               </Row>
            </div>
        );
     }
    
}

export default RobotState;