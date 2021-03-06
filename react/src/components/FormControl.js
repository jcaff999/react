import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const ImgContainer = styled.div.attrs({
    style: props => ({
      backgroundImage: `url("${ props.src }")`
    })
  })`
  background-size: cover;
  border: 1px solid;
  height: 0;
  padding-bottom: 60%;
`

let CardForm = styled.div.attrs({
  className: 'card'
})`
  width:40%;
  margin-top:50px;
  margin-left:auto;
  margin-right:auto;`

let CardHeader = styled.div.attrs({
  className: 'card-header'
})`
  color:white;
  border-bottom: 1px solid rgb(150, 150, 150);
  background-color: rgb(20, 20, 20)
`

let CardBody = styled.div.attrs({
  className: 'card-body'
})`
  background-color:black;
`

let Label = styled.div.attrs({
})`
  color: rgb(200,200,200)`

let Input = styled.input.attrs({
  className: 'form-control'
})`
  display: block;
  background-color: rgb(76,76,76);
  width:100%;
  margin-top: 10px;
  margin-bottom:20px;
`;

let Button = styled.button.attrs({
  className: 'btn btn-primary'
})``;

let Select = styled.select.attrs({
  className: 'form-control'
})`margin-top: 10px;
  margin-bottom:20px;`