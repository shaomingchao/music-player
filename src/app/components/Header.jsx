import React,{Component} from 'react';
import './HeaderStyle.scss'

class Header extends Component{
    render(){
        return (
            <div className="row components-header">
                <img src="/public/images/logo.png" alt="" width="40" className="-col-auto"/>
                <h1 className="caption">Music Player Build By React</h1>
            </div>
        )
    }
}
export default Header;