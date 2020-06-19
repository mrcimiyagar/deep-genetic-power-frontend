
import React from "react";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col, CardTitle, ButtonGroup
} from "reactstrap";
import {Line} from "react-chartjs-2";
import {chartExample1, chartExample4} from "../variables/charts";
import { SemipolarLoading } from 'react-loadingg';
import ManualDataInput from './ManualDataInput';

class UserProfile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data2",
      files: {},
      processing: false,
      inputting: false
    };
    this.inputData = this.inputData.bind(this);
    this.exitInputData = this.exitInputData.bind(this);
  }

  fileSelected(files) {
    this.setState({
      files: files
    });
  }

  inputData() {
    this.setState({
      inputting: true
    });
  }

  exitInputData() {
    this.setState({
      inputting: false
    });
  }

  render() {

    if (this.state.processing) {
      return (<SemipolarLoading />);
    }

    if (this.state.inputting) {
      return (
        <div style={{
          marginLeft: 96,
          marginTop: 96,
          marginRight: 360
        }}>
          <ManualDataInput/>
          <label
                              style={{
                                border: '1px solid white',
                                borderRadius: 6,
                                marginLeft: 16,
                                marginTop: 16,
                                float: 'left',
                                padding: '6px 12px',
                                cursor: 'pointer'
                              }}
                              onClick={() => {
                                this.exitInputData();
                              }}>
                               تایید
                              </label>
        </div>
      );
    }

    return (
      <>
        <div className="content">
          <Row>
            <Col md="6">
              <form action="../power/forecast-load" method="post" enctype="multipart/form-data">
                <Card>
                <CardHeader style={{
                  width: '100%'
                }}>
                  <h5 className="title" style={{
                    width: '100%',
                    textAlign: 'right'
                  }}>{"بارگذاری اطلاعات"}</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col>
                      <label style={{
                            width: '100%',
                            textAlign: 'right'
                          }}>{"انتخاب فایل"}</label>
                          <div
                              style={{
                                height: 52,
                                border: '1px #e14eca solid',
                                borderRadius: 8,
                                padding: 8
                              }}>
                              <label
                              style={{
                                border: '1px solid white',
                                borderRadius: 6,
                                float: 'left',
                                display: 'inline-block',
                                padding: '6px 12px',
                                cursor: 'pointer'
                              }}>
                                <input 
                                  style={{
                                    display: 'none'
                                  }}
                                  name="input" type="file" onChange={(e) => {
                                    let reader = new FileReader();
                                    let file = e.target.files[0];
                                    reader.onloadend = (theFile) => {
                                      this.setState({
                                        files: file
                                      });
                                    };
                                    reader.readAsDataURL(file);;
                                  }}/>
                                {'انتخاب فایل'}
                              </label>
                              <label
                              style={{
                                border: '1px solid white',
                                borderRadius: 6,
                                marginLeft: 16,
                                float: 'left',
                                display: 'inline-block',
                                padding: '6px 12px',
                                cursor: 'pointer'
                              }}
                              onClick={() => {
                                this.inputData();
                              }}>
                                ورود دستی
                              </label>
                              <label
                              style={{
                                border: '1px solid white',
                                borderRadius: 6,
                                marginLeft: 16,
                                float: 'left',
                                display: 'inline-block',
                                padding: '6px 12px',
                                cursor: 'pointer'
                              }}>
                                از سرویس
                              </label>
                              <label
                              style={{
                                border: 'none',
                                display: 'inline-block',
                                padding: '6px 12px',
                                float: 'right',
                                cursor: 'pointer'
                              }}>
                              {this.state.files.name}
                              </label>
                          </div>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
                <CardFooter style={{
                  width: '100%'
                }}>
                  <Button className="btn-fill" color="primary"
                    onClick={() => {
                        this.setState({
                          processing: true
                        });
                        const data = new FormData();
                        data.append('file', this.state.files);
                        fetch("../power/forecast-load", {
                          method: 'post',
                          body: data
                         })
                         .then(async (response) => {
                           return response.blob();
                         })
                         .then(blob => {
                            this.setState({
                              processing: false
                            });
                            var url = window.URL.createObjectURL(blob);
                            var a = document.createElement('a');
                            a.href = url;
                            a.download = "results.xlsx";
                            document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
                            a.click();    
                            a.remove();  //afterwards we remove the element again         
                          });
                      }}>
                    {'پردازش'}
                  </Button>
                </CardFooter>
              </Card>
              </form>
            </Col>
            <Col md="6">
              <Card className="card-chart">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <h5 className="card-category">پیشبینی مصرف برق با توجه به اطلاعات</h5>
                      <CardTitle tag="h2">مصرف پیش بیینی شده</CardTitle>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                        data={chartExample1[this.state.bigChartData]}
                        options={chartExample1.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <div id="tableRef">
                
              </div>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default UserProfile;
