import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import FileViewer from 'react-file-viewer';
// import { CustomErrorComponent } from 'custom-error';
const file = 'http://www.africau.edu/images/default/sample.pdf';
const type = 'pdf';
class DocumentRow extends React.Component {
  constructor(props){
    super(props);
  }
  handleClick() {
    console.log(this.props.file);
    this.props.onDocChange(this.props.file);
  }
  render() {
    return (
        <div className="card" onClick={(e) => this.handleClick(e)}>
          <div className="card-blue"></div>
          <div className="card-body">
            <h5 className="card-title">{this.props.file.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{this.props.file.name1},{this.props.file.nick}</h6>
          </div>
        </div>
      );
  }
}

class App extends React.Component {
  constructor(props){
    let headerVal = 'Document #1';
    super(props);
    this.state = {headerVal: 'Document #1',Files: this.props.Files}
  }
  selectHandle = (selectItem)=>{
    this.setState({headerVal:selectItem.name,Files: this.props.Files});
  }
  fileupload = (event)=>{
    document.getElementById('imgupload').click();
    // document.getElementById('imgupload').addEventListener('change', this.props.fileChange);
  }
  fileChange = (event)=>{
    console.log(event.target.files[0]);
    let obj = {
      name: event.target.files[0].name,
      name1: '',
      nick: '',
      type: 'docx',
      path:''
    }
    this.props.Files.push(obj);
    this.setState({Files: this.props.Files});
    console.log(this.props.Files);
  }
  submitForm = () =>{
    document.getElementById('formid').submit();
  }
  handleSubmit = (event) =>{
    console.log(event);
  }
  render() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-sm-3">
          <div className="left-side-header">
            <div className="file-text">FILES</div>
            <form id='formid' onSubmit={this.handleSubmit} enctype="multipart/form-data">
              <input type="file" id="imgupload" className="displayNone" onChange={this.fileChange}/> 
            </form>
            <div className="upload-text" onClick={this.fileupload}>Upload <FontAwesomeIcon  icon={faUpload}/></div>
          </div>
          <div className="doc-list">
            {this.state.Files.map((item,index)=>(
              <DocumentRow file={item} onDocChange={this.selectHandle}/>
            ))}
          </div>
        </div>
        <div className="col-sm-9">
          <div className="right-header">{this.state.headerVal}</div>
          <div className="doc-viewer">
          <FileViewer
              fileType={type}
              filePath={file}
              // errorComponent={CustomErrorComponent}
              />
          </div>
        </div>
      </div>
    </div>
  );
 }
}

export default App;
