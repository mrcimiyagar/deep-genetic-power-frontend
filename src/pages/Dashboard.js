
import React from "react";
import classNames from "classnames";
import { Line, Bar } from "react-chartjs-2";

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4
} from "../variables/charts.js";

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { createMuiTheme } from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/core';

class Dashboard extends React.Component {
  recordClickListener = null;
  constructor(props) {
    super(props);
    this.recordClickListener = props.recordClickListener;
    this.state = {
      bigChartData: "data1"
    };
  }
  setBgChartData = name => {
    this.setState({
      bigChartData: name
    });
  };
  render() {
    const theme = createMuiTheme({
      palette: {
        primary: {
          main: '#1d8cf8',
        },
      },
    });
    return (
      <>
        <div className="content" style={{padding: 32}}>
        <Row>
          <Col xs="12">
            <div style={{
              width: 72,
              height: 72,
              marginLeft: 32,
              marginRight: 32
            }}
            onClick={() => {
              this.recordClickListener(-1);
            }}>
              <i className="tim-icons icon-storage" />
            </div>
          </Col>
        </Row>
          <Row>
            <Col xs="12">
              <Card className="card-chart">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <h5 className="card-category" style={{width: "100%", direction: "rtl", color: "#fff"}}>{"نمودار مصرف برق امروز"}</h5>
                      <CardTitle tag="h2" style={{width: "100%", direction: "rtl", color: "#fff"}}>{(this.state.bigChartData === "data1" ?
                          "مصرف تا این لحظه" :
                      this.state.bigChartData === "data2" ?
                      "مصرف پیش بیینی شده" :
                      "واقعی تا این لحظه و پیشبینی")}</CardTitle>
                    </Col>
                    <Col sm="6">
                    <ThemeProvider theme={theme}>
                    <ButtonGroup variant="contained" color="primary" style={{marginBottom: 24}}>
                      <Button
                          onClick={() => this.setBgChartData("data1")}>واقعی</Button>
                      <Button
                          onClick={() => this.setBgChartData("data2")}>پیشبینی</Button>
                      <Button
                          onClick={() => this.setBgChartData("data3")}>هر دو</Button>
                    </ButtonGroup>
                    </ThemeProvider>
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

          <div style={{width: "100%", height: 2, backgroundColor: "#fff", marginTop: 32}}></div>

          <Row>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category" style={{marginTop: 32, width: "100%", direction: "rtl", color: "#fff"}}>{"مصرف برق روزانه"}</h5>
                  <CardTitle tag="h3" style={{width: "100%", direction: "rtl", color: "#fff"}}>
                    <i className="tim-icons icon-sound-wave text-success" />
                    {"8000 مگاوات"}
                  </CardTitle>
                  <h5 className="card-category" style={{width: "100%", direction: "rtl", color: "#fff"}}>{"در روز قبل"}</h5>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                        data={chartExample4.data}
                        options={chartExample4.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <div style={{width: "100%", height: 2, backgroundColor: "#fff", marginTop: 32}}></div>

          <Row>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category" style={{marginTop: 32, width: "100%", direction: "rtl", color: "#fff"}}>{"مصرف برق ماهانه"}</h5>
                  <CardTitle tag="h3" style={{width: "100%", direction: "rtl", color: "#fff"}}>
                    <i className="tim-icons icon-sound-wave text-info" />{" "}
                    {"240000 مگاوات"}
                  </CardTitle>
                  <h5 className="card-category" style={{width: "100%", direction: "rtl", color: "#fff"}}>{"در ماه قبل"}</h5>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={chartExample2.data}
                      options={chartExample2.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
