import React, { Component} from 'react';
import ReactDOM, { render } from 'react-dom';
import styled from 'styled-components';
import { array } from 'prop-types';

let Input = styled.input.attrs({
    type: 'file',
})`
    display:none
`
let Button = styled.button.attrs ( {

})`
  font: 16px Arial, Helvetica, sans-serif;
  color: #ccc;
  outline: none;
  border: none;
  padding: 6px 12px 6px ;
  height: 36px;
  text-shadow: 1px 1px 0px #000;
  box-shadow: inset 0px 2px 2px rgba(0,0,0,0.5);
  background-color: #3e3e3e;
  background: -webkit-gradient(linear, left top, left bottom, from(#545454), to(#3e3e3e));
  background: -moz-linear-gradient(top, #545454, #3e3e3e);
  border-radius: 5px;
  width:100%;
  margin-top: 10px;
  margin-bottom:20px;`

let Icon = styled.label.attrs({

})``


class CustomFileInput extends Component {
  constructor(props) {
        super(props);
        this.state = {
            selectedFiles : null,
            showState : 'Click here to upload files.'
        }
        this.myInput = React.createRef();  
    }

    fileSelectedHandler = (event) => {
        const len = event.target.files.length;
        let result = 'Click here to upload files.'
        if ( len>1) {
            result = len.toString() + ' files were selected.';
        }
        if ( len == 1) {
            result = event.target.files[0].name;
        }

        //for ( var i = 0; i<len; i++) {
        //    result += event.target.files[i].name;
        //    if ( i<len-1) result += ',';
        //}
        //let result = event.target.files.reduce( (fileList, fileEle) => 
        //    fileList + fileEle.name
        //);

        this.setState({
            selectedFiles: event.target.files,
            showState: result
        });
    };

    render() {

        return(
            <div>
                <Input
                    onChange={this.fileSelectedHandler}
                    ref = "myInput"
                    multiple
                />
                <Button onClick={(e) => {
                    ReactDOM.findDOMNode ( this.refs.myInput).click();
                } }>
                    <Icon>{ this.state.showState}</Icon>
                </Button>
            </div>
        )
    }
}

export default CustomFileInput