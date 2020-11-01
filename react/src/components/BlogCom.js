import React, { Component } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import { ThemeProvider} from 'styled-components';
import Grid from 'styled-components-grid';
import media from "styled-media-query";
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; 
import plugins from 'suneditor/src/plugins';
import suneditor from 'suneditor';
import ReactHtmlParser from 'react-html-parser';


const theme = {
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xx: 30000
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
  border-radius: 5px;

  display: block;
  width:100%;
  margin-top: 10px;
  margin-bottom:20px;
  transition: all 0.15s linear;
  -webkit-appearance: textfield;
  -webkit-rtl-ordering: logical;
  cursor: text;  
`;

//background: -webkit-gradient(linear, left top, left bottom, from(#545454), to(#3e3e3e));
//background: -moz-linear-gradient(top, #545454, #3e3e3e);

let WysEditor = styled.textarea.attrs({
  id:'full_editor'
})`
  width:100%;
  `

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

let Preview = styled.div.attrs({
})`
  height: 200px;
  padding: 12px 12px;
  font: 16px Arial, Helvetica, sans-serif;
  color: #ccc;
  outline: none;
  border: none;
  text-shadow: 1px 1px 0px #000;
  box-shadow: inset 0px 2px 2px rgba(0,0,0,0.5);
  background-color: #3e3e3e;
  border-radius: 5px;  
  overflow: auto;
  vertical-align: top;  
  margin: 10px 0px 20px 0px;
  text-align:left;
  `
  //background: -webkit-gradient(linear, left top, left bottom, from(#545454), to(#3e3e3e));
  //background: -moz-linear-gradient(top, #545454, #3e3e3e);

let InnerContainer = styled.div.attrs({
})`
  width:90%;
  background: transparent url(images/textile_texture_bg.gif) repeat center top;
  padding: 10px 10px 10px 10px;
`

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




class BlogCom extends Component {
  constructor() {
    super();

    this.state = {
      wysiwygText: 'Preview the Text'
    }
  }


  submit = () => {
  }
  onEditorChange = (contents, core) => {
    this.setState( {
      wysiwygText: contents
    })
  }
  /*
  onSunEditorLoad = ( e)=> {
    if ( e == true) {
      console.log(document.getElementsByClassName ('se-btn-tray')[0].style.height='auto');
    }
  }*/
  componentDidMount() {
      const editor = suneditor.create('full_editor', {
        plugins: plugins,
        height: 170,
        maxHeight: 170,
        width: '100%',
        buttonList: [
            ['undo', 'redo',
            'font', 'fontSize', 'formatBlock',
            'paragraphStyle', 'blockquote',
            'bold', 'underline', 'italic', 'strike', 'subscript', 'superscript',
            'fontColor', 'hiliteColor', 'textStyle',
            'removeFormat',
            'outdent', 'indent',
            'align', 'horizontalRule', 'list', 'lineHeight',
            'table', 'link', 'image', 'video', 'audio', /** 'math', */ // You must add the 'katex' library at options to use the 'math' plugin.
            /** 'imageGallery', */ // You must add the "imageGalleryUrl".
            'fullScreen', 'showBlocks', 'codeView',
            'preview', 'print', 'save', 'template']
        ]
      });
    
      console.log(document.getElementsByClassName ('se-btn-tray')[0].style.height='auto');

      let mainFrame = document.getElementsByClassName('sun-editor')[0];
      mainFrame.style.border = 'none';
      mainFrame.style.borderradius = '5px';


      let board = document.getElementsByClassName('se-wrapper-wysiwyg')[0];
      board.style.background = '#3e3e3e';
      board.style.color = 'white';
      let statusBar = document.getElementsByClassName('se-navigation')[0];
      statusBar.style.background = '#5e5e5e';
      statusBar.style.color = 'white';

      let menuList = document.getElementsByClassName ( 'se-menu-list')[0];
      menuList.style.background = '#5e5e5e';

      let toolBar = document.getElementsByClassName ( 'se-toolbar')[0];
      toolBar.style.background = '#3e3e3e';
      toolBar.style.outline = 'none';

      let resizeBar = document.getElementsByClassName ( 'se-resizing-bar')[0];
      resizeBar.style.background = '#5e5e5e';
      resizeBar.style.border='none';
      
      editor.onChange = this.onEditorChange.bind(this);
  }

  render() {

    return(
      <div >
        <ImgContainer>
          <ThemeProvider theme = {theme}>
            <center>
            <Grid.Unit size = {{xs:1/1, sm:6/7, md:5/6, lg:4/5, xl:4/5}}>
              <InnerContainer>
                <CardForm>
                  <CardHeader>
                    Blog Composition
                  </CardHeader>
                  <CardBody>
                    <ColLeft>
                      <Label>Subject Field</Label>
                      <Input type='text' />
                    </ColLeft>
                    <ColRight>
                      <Label>Category</Label>
                      <Select>
                        <option>1</option>
                        <option>2</option>
                      </Select>
                    </ColRight>
                    <Col>
                      <WysEditor
                        onLoad = { this.onSunEditorLoad}
                        onChange =  { this.onTextChange }
                      />
                    </Col>
                    <Col>
                      <Label style = {{ marginTop:300}}>Preview</Label>
                      <Preview>
                        { ReactHtmlParser(this.state.wysiwygText)}
                      </Preview>
                    </Col>
                    <center><Button >Submit</Button></center>
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

export default BlogCom;

