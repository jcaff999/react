import React, { Component } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import { ThemeProvider} from 'styled-components';
import Grid from 'styled-components-grid';

import media from "styled-media-query";
import { file } from '@babel/types';

import CustomFileInput from './CustomFileInput';

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

let Button = styled.button.attrs({
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

let Select = styled.select.attrs({
})`
  background-color: #3e3e3e;
  font: 16px Arial, Helvetica, sans-serif;
  color: #ccc;
  outline: none;
  border: none;
  padding: 2px 12px;
  height: 36px;
  text-shadow: 1px 1px 0px #000;  
  box-shadow: inset 0px 2px 2px rgba(0,0,0,0.5);  
  border-radius: 5px;
  width: 100%;
  text-transform: none;
  box-sizing: border-box;
  align-items: center;
  white-space: pre;
  cursor: default;

  margin-top: 10px;
  margin-bottom:20px;
  `

let InnerContainer = styled.div.attrs({
})`
  width:90%;
  background: transparent url(images/textile_texture_bg.gif) repeat center top;
  padding: 10px 10px 10px 10px;
`


let Textarea = styled.textarea.attrs({
})`
  height: 150px;
  padding: 12px 12px;
  font: 16px Arial, Helvetica, sans-serif;
  color: #ccc;
  outline: none;
  border: none;
  text-shadow: 1px 1px 0px #000;
  box-shadow: inset 0px 2px 2px rgba(0,0,0,0.5);
  background-color: #3e3e3e;
  background: -webkit-gradient(linear, left top, left bottom, from(#545454), to(#3e3e3e));
  background: -moz-linear-gradient(top, #545454, #3e3e3e);
  border-radius: 5px;  
  display: block;
  width:100%;
  overflow: auto;
  vertical-align: top;  
  
  margin-top:10px;
  margin-bottom:20px;
  `
let ColLeft = styled.div`
  display:inline-block;
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    width:95%;
  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    width:45%;
  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    width:45%;
  `}
`

let ColRight = styled.div`
  display:inline-block;
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    width:95%;
  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    width:45%;
    margin-left:40px;
  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    width:45%;
    margin-left:40px;
  `}
`

let Col = styled.div`
  display:inline-block;
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    width:95%;
  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    width:95%;
  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    width:95%;
  `}
`






class Submission extends Component {
  constructor() {
    super();

    this.state = {
      firsName: '',
      lastName: '',
    }
  }

  submit = () => {
    let {
      firsName,
      lastName,
    } = this.state;
  }

  render() {

    return(
      <div >
        <ImgContainer>
        <ThemeProvider theme= {theme}>
          <center>
            <Grid.Unit size = {{xs:1/1, sm:6/7, md:5/6, lg:4/5, xl:4/5}}>
              <InnerContainer>
                <CardForm>
                  <CardHeader>
                    Submission
                  </CardHeader>
                  <CardBody>
                    <ColLeft>
                        <Label>Car VIN Number</Label>
                        <Input type='text' />
                    </ColLeft>
                    <ColRight>
                        <Label>Brand</Label>
                        <Input type='text' />
                    </ColRight>
                    <ColLeft>
                        <Label>Model</Label>
                        <Input type='text' />
                    </ColLeft>
                    <ColRight>
                      <Label>Build</Label>
                      <Input type='text' />
                    </ColRight>
                    <ColLeft>
                      <Label>Engine</Label>
                      <Input type='text' />
                    </ColLeft>
                    <ColRight>
                      <Label>Enginer Power HP</Label>
                      <Input type='text' />
                    </ColRight>
                    <ColLeft>
                      <Label>Year</Label>
                      <Input type='text' />
                    </ColLeft>
                    <ColRight>
                      <Label>Tuning Level</Label>
                      <Select>
                        <option>I</option>
                        <option>II</option>
                        <option>III</option>
                        <option>Special</option>
                      </Select>
                    </ColRight>

                    <Col>
                      <Label>User message</Label>
                      <Textarea />
                    </Col>

                    <ColLeft>
                      <Label>Reading method</Label>
                      <Select>
                        <option>AlienTech Kess</option>
                        <option>AlienTech K-Tag</option>
                      </Select>
                    </ColLeft>
                    <ColRight>
                      <Label>ECU type</Label>
                      <Select>
                        <option>1</option>
                        <option>2</option>
                      </Select>
                    </ColRight>
                    <ColLeft>
                      <Label>Car plate number</Label>
                      <Input type='text' />
                    </ColLeft>

                    <ColRight>
                      <Label>Upload files</Label>
                      <CustomFileInput></CustomFileInput>

                    </ColRight>




                    <center><Button>Submission</Button></center>

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

export default Submission;