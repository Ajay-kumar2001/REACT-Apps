import {Component} from "react"
import FooterData from "./FooterData"
class Footermain extends Component{


    render(){
        console.log(this.props.info.arr)
        return(<div>
            
            <FooterData info={this.props.info.arr}/>
        </div>)
    }
}
export default Footermain