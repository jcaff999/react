import React, { Component } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import { ThemeProvider} from 'styled-components';
import Grid from 'styled-components-grid';

const theme = {
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  }
};

const ImgContainer = styled.div.attrs({
//    style: props => ({
//      backgroundImage: `url("${ props.src }")`
//    })
  })`
  background: transparent url(images/striped_bg.gif) repeat center top;
  background-size: cover;
  border: 1px solid;
  height: 0;
  padding-bottom: 60%;
  overflow: auto;

`

let CardForm = styled.div.attrs({

})`
  border: 3px solid #343434;
  `

let CardHeader = styled.div.attrs({
  
})`
    height: 50px;
    line-height: 46px;
    padding-left: 25px;
    font-size: 16px;
    color: #fefefe;
    font-weight: 300;
    font-family: 'Titillium Web', Arial, Helvetica, sans-serif;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: transparent url(images/title_bar_bg.png) repeat-x center center;
    text-align:left;
`
let CardBody = styled.div.attrs({
  className: 'card-body'
})`
  background-color:black;
  padding: 10px 10px 10px 10px;
`

let Label = styled.div.attrs({
})`
  font: 14px Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #999;  
  font-size: 14px;
  color: #4d4d4d;
  cursor: pointer;
  display: block;
  font-weight: 500;
  margin-bottom: 3px;
  text-align: left;
  `

let Input = styled.input.attrs({
})`
  font: 16px Arial, Helvetica, sans-serif;
  color: #ccc;
  outline: none;
  border: none;
  padding: 2px 12px;
  height: 36px;
  text-shadow: 1px 1px 0px #000;
  -webkit-box-shadow: inset 0px 2px 2px rgba(0,0,0,0.5);
  -moz-box-shadow: inset 0px 2px 2px rgba(0,0,0,0.5);
  box-shadow: inset 0px 2px 2px rgba(0,0,0,0.5);
  background-color: #3e3e3e;
  background: -webkit-gradient(linear, left top, left bottom, from(#545454), to(#3e3e3e));
  background: -moz-linear-gradient(top, #545454, #3e3e3e);
  border-radius: 5px;

  display: block;
  width:100%;
  margin-top: 10px;
  margin-bottom:20px;
  transition: all 0.15s linear;
  -webkit-appearance: textfield;
  background-color: white;
  -webkit-rtl-ordering: logical;
  cursor: text;  


`;

let Button = styled.input.attrs({
})`
  padding: 1px 15px 2px 15px;
  min-height: 25px;
  color: white;
  font-family: Arial;
  font-size: 13px;
  font-family: 'Titillium Web', Arial, Helvetica, sans-serif;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 50px;
  text-shadow: 1px 1px 0px #1a355f;
  box-shadow: 1px 1px 3px rgba(0,0,0,0.5), inset 0 0 16px rgba(0,0,0,0.5);
  border: none;
  border-top: 1px solid rgba(255,255,255,0.3);
  border-bottom: 1px solid rgba(0,0,0,0.5);
  background: #2c507a;
  background: -moz-linear-gradient(top, #2c507a 0%, #395f89 50%, #2c507a 50%, #305681 100%);
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #2c507a), color-stop(50%, #395f89), color-stop(50%, #2c507a), color-stop(100%, #305681));
  background: -webkit-linear-gradient(top, #2c507a 0%, #395f89 50%, #2c507a 50%, #305681 100%);
  background: -o-linear-gradient(top, #2c507a 0%, #395f89 50%, #2c507a 50%, #305681 100%);
  background: -ms-linear-gradient(top, #2c507a 0%, #395f89 50%, #2c507a 50%, #305681 100%);
  background: linear-gradient(to bottom, #2c507a 0%,#395f89 50%,#2c507a 50%,#305681 100%);
  white-space: nowrap; 
`;

let InnerContainer = styled.div.attrs({ 
})`
  width:90%;
  background: transparent url(images/textile_texture_bg.gif) repeat center top;
  padding: 10px 10px 10px 10px;
`
// className: 'col-12 col-sm-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3'
class Signin extends Component {
  constructor() {
    super();
  }

  submit = () => {

  }

  render() {

    return(
      <div >
        <ImgContainer>
          <ThemeProvider theme ={ theme}>
            <center>
              <Grid.Unit size = {{xs:1/1, sm:4/5, md:3/4, lg:2/3, xl:1/2}}>
                  <InnerContainer >
                  <CardForm>
                  <CardHeader>
                    SignIn
                  </CardHeader>
                  <CardBody>
                    <Label>Name</Label>
                    <Input type='text'  />
                    <Label>E-mail</Label>
                    <Input type='email'  />
                    <center><Button type="button" value="SignIn"></Button></center>

                  </CardBody>
                </CardForm>

                </InnerContainer>
              </Grid.Unit>
            </center>
          </ThemeProvider>
        </ImgContainer>
      </div>
    )
  }
}

export default Signin;