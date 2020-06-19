import * as React from "react";
import $ from 'jquery';
import rainIcon from '../assets/img/rain.png';
import sunnyIcon from '../assets/img/sun.png';
import windyIcon from '../assets/img/windy.png';
import stormIcon from '../assets/img/stormy.png';

import {Card, CardBody, CardHeader, CardTitle, Col, Row} from "reactstrap";
import {Line} from "react-chartjs-2";
import {chartExample1} from "../variables/charts";

class Weather extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading : true,
            locationName : "Loading...",
            showSettings : false,
            weatherUnits : "C",
            weatherDesign : {
                bgUrl : "",
                icon : ""
            },
            weather : {},
            resizeTrigger: false,
            bigChartData: "data4"
        }
    }

    getWeatherUnits() {
        return this.state.weatherUnits;
    }

    handleSettingsBtn = (e)=>{
        let units = this.getWeatherUnits();
        units = (units === "F" ? "C" : "F");
        this.setState({weatherUnits:units});
        e.preventDefault();
    };

    getWeather() {
        //get location info from ip
        const api = "http://api.openweathermap.org/data/2.5/weather?"
            +"lat="+ 37.28080
            +"&lon="+ 49.58310
            +"&units=metric"
            +"&appid=ad9dcfbd22b9c53608728cb6c3092126";

        $.get(api,"jsonp").done((response)=>{
            //update design state
            let weatherId = response.weather[0].id;

            let weatherDesign = {
                bgUrl : "",
                icon : ""
            };

            //thundersorm
            if(weatherId >= 200 && weatherId <300) {
                weatherDesign = {
                    bgUrl : "http://cdn.makeuseof.com/wp-content/uploads/2011/09/AndroidLiveWallpaper11.png?92a7a3",
                    icon : "stormy"
                };
            }
            //drizzle
            if(weatherId >= 300 && weatherId <400) {
                weatherDesign = {
                    bgUrl : "http://wakefieldnaturalists.org/wp-content/uploads/RAINBOW.jpg",
                    icon : "rainbow"
                };
            }
            //rain
            if(weatherId >= 500 && weatherId <600) {
                weatherDesign = {
                    bgUrl : "http://il2.picdn.net/shutterstock/videos/7345270/thumb/1.jpg",
                    icon : "rainy"
                };
            }
            //snow
            if(weatherId >= 600 && weatherId <700) {
                weatherDesign = {
                    bgUrl : "https://il2.picdn.net/shutterstock/videos/265888/thumb/1.jpg",
                    icon : "snowy"
                };
            }
            //atmosphere
            /*if(weatherId >= 700 && weatherId <800) {

            }*/

            //clear
            if(weatherId === 800) {

                //clear day
                weatherDesign = {
                    bgUrl : "http://images.gmanews.tv/v3/webpics/v3/2015/04/640_2015_04_19_17_28_31.jpg",
                    icon : "sunny"
                };

                let time = new Date().getHours();
                let night = false;

                if(time < 6 || time > 18 ) {
                    night = true;
                }

                //clear nigh
                if(night){
                    weatherDesign = {
                        bgUrl : "https://d7bmbwiglir4w.cloudfront.net/sites/default/files/imagecache/inline/blog/BenCanales5_ImnahaNights.jpg",
                        icon : "starry"
                    };
                }
            }

            //clouds && atmosphere
            if((weatherId >= 801 && weatherId <900) || (weatherId >= 700 && weatherId <800)) {
                weatherDesign = {
                    bgUrl : "http://photovide.com/wp-content/uploads/2012/10/Cloudy-Weather-01.jpg",
                    icon : "cloudy"
                };
            }

            //update state
            this.setState({
                loading : false,
                locationName : response.name + " | " + response.sys.country,
                weather : {
                    main : response.main,
                    description : response.weather[0],
                    windSpeed : response.wind.speed,
                    clouds : response.clouds.all
                },
                weatherDesign : weatherDesign
            });
        });
    };

    componentDidMount(){
        this.getWeather();
        window.addEventListener('resize', (e) => {
            this.setState({
                resizeTrigger: !this.state.resizeTrigger,
            })
        });
    }

    render() {
        return (
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                height: 'auto',
                marginTop: 16
            }}>
                <div style={{
                    display: 'flex',
                    flexWrap: "wrap",
                    width : this.state.resizeTrigger ?
                        window.innerWidth > 800 ? '49%' : '100%' :
                        window.innerWidth > 800 ? '49%' : '100%',
                    height : 'auto',
                    minHeight: 600,
                    backgroundColor: '#27293d',
                    borderRadius: 8,
                    boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.3)',
                    position: 'relative',
                    marginBottom: 16,
                    marginLeft: window.innerWidth > 800 ? 16 : '1%'
                }}>
                    <div style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gridTemplateColumns: '50% 50%',
                        width: this.state.resizeTrigger ?
                            window.innerWidth > 800 ? '49%' : '100%' :
                            window.innerWidth > 800 ? '49%' : '100%',
                        height: 300,
                    }}>
                        <div style={{
                            width: '50%',
                            height: 250,
                            position: "relative"
                        }}>
                            <img style={{
                                        width: 100,
                                        height: 100,
                                        position: 'absolute',
                                        left: '50%',
                                        top: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        filter: 'drop-shadow(5px 5px 5px #222)',
                                    }} src={windyIcon} alt={'weather'}/>
                            <p style={{position: "absolute", left: '50%', top: '80%', transform: 'translate(-50%, -50%)'
                                        , extAlign: "right", color: '#00D6B4', fontSize: 18, lineHeight: 2, fontWeight: 'bold'
                                        , marginRight: -8}}>باد شدید</p>
                        </div>
                        <div style={{
                            width: '50%',
                            height: 175,
                            marginTop: 64
                        }}>
                            <div style={{display: 'flex', marginTop: 16}}>
                                <p style={{textAlign: "right", color: '#00D6B4', fontSize: 18, lineHeight: 2, fontWeight: 'bold', marginRight: -8}}>23</p>
                                <p style={{textAlign: "right", color: '#bbb', fontSize: 13, lineHeight: 2.5, marginRight: 8, marginLeft: 16, fontWeight: 'bold'}}>درجه ی سانتیگراد</p>
                            </div>
                            <div style={{display: 'flex'}}>
                                <p style={{textAlign: "right", color: '#00D6B4', fontSize: 18, lineHeight: 2, fontWeight: 'bold', marginRight: -8}}>12</p>
                                <p style={{textAlign: "right", color: '#bbb', fontSize: 13, lineHeight: 2.5, marginRight: 8, marginLeft: 16, fontWeight: 'bold'}}>درصد رطوبت</p>
                            </div>
                            <div style={{display: 'flex'}}>
                                <p style={{textAlign: "right", color: '#00D6B4', fontSize: 18, lineHeight: 2, fontWeight: 'bold', marginRight: -8}}>25</p>
                                <p style={{textAlign: "right", color: '#bbb', fontSize: 13, lineHeight: 2.5, marginRight: 8, marginLeft: 16, fontWeight: 'bold'}}>کیلومتر بر ساعت سرعت باد</p>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        width: this.state.resizeTrigger ?
                            window.innerWidth > 800 ? 1 : 'calc(100% - ' + (32 * devicePixelRatio) + 'px)' :
                            window.innerWidth > 800 ? 1 : 'calc(100% - ' + (32 * devicePixelRatio) + 'px)',
                        height: this.state.resizeTrigger ?
                            window.innerWidth > 800 ? 300 - 16 : 1 :
                            window.innerWidth > 800 ? 300 - 16 : 1,
                        marginTop: this.state.resizeTrigger ?
                            window.innerWidth > 800 ? 16 : 0 :
                            window.innerWidth > 800 ? 16 : 0,
                        marginLeft: this.state.resizeTrigger ?
                            window.innerWidth > 800 ? 0 : 16 :
                            window.innerWidth > 800 ? 0 : 16,
                        marginRight: this.state.resizeTrigger ?
                            window.innerWidth > 800 ? 0 : 16 :
                            window.innerWidth > 800 ? 0 : 16,
                        backgroundColor: '#00D6B4'
                    }}/>
                    <div style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gridTemplateColumns: '50% 50%',
                        width: this.state.resizeTrigger ?
                            window.innerWidth > 800 ? '49%' : '100%' :
                            window.innerWidth > 800 ? '49%' : '100%',
                        height: 300,
                    }}>
                        <div style={{
                            width: '50%',
                            height: 250,
                            position: "relative"
                        }}>
                            <img style={{
                                        width: 100,
                                        height: 100,
                                        position: 'absolute',
                                        left: '50%',
                                        top: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        filter: 'drop-shadow(5px 5px 5px #222)',
                                    }} src={rainIcon} alt={'weather'}/>
                            <p style={{position: "absolute", left: '50%', top: '80%', transform: 'translate(-50%, -50%)'
                                        , extAlign: "right", color: '#00D6B4', fontSize: 18, lineHeight: 2, fontWeight: 'bold'
                                        , marginRight: -8}}>باران</p>
                        </div>
                        <div style={{
                            width: '50%',
                            height: 175,
                            marginTop: 64
                        }}>
                            <div style={{display: 'flex', marginTop: 16}}>
                                <p style={{textAlign: "right", color: '#00D6B4', fontSize: 18, lineHeight: 2, fontWeight: 'bold', marginRight: -8}}>23</p>
                                <p style={{textAlign: "right", color: '#bbb', fontSize: 13, lineHeight: 2.5, marginRight: 8, marginLeft: 16, fontWeight: 'bold'}}>درجه ی سانتیگراد</p>
                            </div>
                            <div style={{display: 'flex'}}>
                                <p style={{textAlign: "right", color: '#00D6B4', fontSize: 18, lineHeight: 2, fontWeight: 'bold', marginRight: -8}}>12</p>
                                <p style={{textAlign: "right", color: '#bbb', fontSize: 13, lineHeight: 2.5, marginRight: 8, marginLeft: 16, fontWeight: 'bold'}}>درصد رطوبت</p>
                            </div>
                            <div style={{display: 'flex'}}>
                                <p style={{textAlign: "right", color: '#00D6B4', fontSize: 18, lineHeight: 2, fontWeight: 'bold', marginRight: -8}}>25</p>
                                <p style={{textAlign: "right", color: '#bbb', fontSize: 13, lineHeight: 2.5, marginRight: 8, marginLeft: 16, fontWeight: 'bold'}}>کیلومتر بر ساعت سرعت باد</p>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        width: 'calc(100% - ' + (16 * window.devicePixelRatio) + 'px)',
                        marginLeft: 16,
                        marginRight: 16,
                        height: 1,
                        backgroundColor: '#00D6B4'
                    }}/>
                    <div style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gridTemplateColumns: '50% 50%',
                        width: this.state.resizeTrigger ?
                            window.innerWidth > 800 ? '49%' : '100%' :
                            window.innerWidth > 800 ? '49%' : '100%',
                        height: 300,
                    }}>
                        <div style={{
                            width: '50%',
                            height: 250,
                            position: "relative"
                        }}>
                            <img style={{
                                        width: 100,
                                        height: 100,
                                        position: 'absolute',
                                        left: '50%',
                                        top: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        filter: 'drop-shadow(5px 5px 5px #222)',
                                    }} src={rainIcon} alt={'weather'}/>
                            <p style={{position: "absolute", left: '50%', top: '80%', transform: 'translate(-50%, -50%)'
                                        , extAlign: "right", color: '#00D6B4', fontSize: 18, lineHeight: 2, fontWeight: 'bold'
                                        , marginRight: -8}}>باران</p>
                        </div>
                        <div style={{
                            width: '50%',
                            height: 175,
                            marginTop: 64
                        }}>
                            <div style={{display: 'flex', marginTop: 16}}>
                                <p style={{textAlign: "right", color: '#00D6B4', fontSize: 18, lineHeight: 2, fontWeight: 'bold', marginRight: -8}}>23</p>
                                <p style={{textAlign: "right", color: '#bbb', fontSize: 13, lineHeight: 2.5, marginRight: 8, marginLeft: 16, fontWeight: 'bold'}}>درجه ی سانتیگراد</p>
                            </div>
                            <div style={{display: 'flex'}}>
                                <p style={{textAlign: "right", color: '#00D6B4', fontSize: 18, lineHeight: 2, fontWeight: 'bold', marginRight: -8}}>12</p>
                                <p style={{textAlign: "right", color: '#bbb', fontSize: 13, lineHeight: 2.5, marginRight: 8, marginLeft: 16, fontWeight: 'bold'}}>درصد رطوبت</p>
                            </div>
                            <div style={{display: 'flex'}}>
                                <p style={{textAlign: "right", color: '#00D6B4', fontSize: 18, lineHeight: 2, fontWeight: 'bold', marginRight: -8}}>25</p>
                                <p style={{textAlign: "right", color: '#bbb', fontSize: 13, lineHeight: 2.5, marginRight: 8, marginLeft: 16, fontWeight: 'bold'}}>کیلومتر بر ساعت سرعت باد</p>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        width: this.state.resizeTrigger ?
                            window.innerWidth > 800 ? 1 : 'calc(100% - ' + (32 * devicePixelRatio) + 'px)' :
                            window.innerWidth > 800 ? 1 : 'calc(100% - ' + (32 * devicePixelRatio) + 'px)',
                        height: this.state.resizeTrigger ?
                            window.innerWidth > 800 ? 300 - 16 : 1 :
                            window.innerWidth > 800 ? 300 - 16 : 1,
                        marginBottom: this.state.resizeTrigger ?
                            window.innerWidth > 800 ? 16 : 0 :
                            window.innerWidth > 800 ? 16 : 0,
                        marginLeft: this.state.resizeTrigger ?
                            window.innerWidth > 800 ? 0 : 16 :
                            window.innerWidth > 800 ? 0 : 16,
                        marginRight: this.state.resizeTrigger ?
                            window.innerWidth > 800 ? 0 : 16 :
                            window.innerWidth > 800 ? 0 : 16,
                        backgroundColor: '#00D6B4'
                    }}/>
                    <div style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gridTemplateColumns: '50% 50%',
                        width: this.state.resizeTrigger ?
                            window.innerWidth > 800 ? '49%' : '100%' :
                            window.innerWidth > 800 ? '49%' : '100%',
                        height: 300,
                    }}>
                        <div style={{
                            width: '50%',
                            height: 250,
                            position: "relative"
                        }}>
                            <img style={{
                                        width: 100,
                                        height: 100,
                                        position: 'absolute',
                                        left: '50%',
                                        top: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        filter: 'drop-shadow(5px 5px 5px #222)',
                                    }} src={stormIcon} alt={'weather'}/>
                            <p style={{position: "absolute", left: '50%', top: '80%', transform: 'translate(-50%, -50%)'
                                        , extAlign: "right", color: '#00D6B4', fontSize: 18, lineHeight: 2, fontWeight: 'bold'
                                        , marginRight: -8}}>طوفان</p>
                        </div>
                        <div style={{
                            width: '50%',
                            height: 175,
                            marginTop: 64
                        }}>
                            <div style={{display: 'flex', marginTop: 16}}>
                                <p style={{textAlign: "right", color: '#00D6B4', fontSize: 18, lineHeight: 2, fontWeight: 'bold', marginRight: -8}}>23</p>
                                <p style={{textAlign: "right", color: '#bbb', fontSize: 13, lineHeight: 2.5, marginRight: 8, marginLeft: 16, fontWeight: 'bold'}}>درجه ی سانتیگراد</p>
                            </div>
                            <div style={{display: 'flex'}}>
                                <p style={{textAlign: "right", color: '#00D6B4', fontSize: 18, lineHeight: 2, fontWeight: 'bold', marginRight: -8}}>12</p>
                                <p style={{textAlign: "right", color: '#bbb', fontSize: 13, lineHeight: 2.5, marginRight: 8, marginLeft: 16, fontWeight: 'bold'}}>درصد رطوبت</p>
                            </div>
                            <div style={{display: 'flex'}}>
                                <p style={{textAlign: "right", color: '#00D6B4', fontSize: 18, lineHeight: 2, fontWeight: 'bold', marginRight: -8}}>25</p>
                                <p style={{textAlign: "right", color: '#bbb', fontSize: 13, lineHeight: 2.5, marginRight: 8, marginLeft: 16, fontWeight: 'bold'}}>کیلومتر بر ساعت سرعت باد</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{
                    marginLeft: 16,
                    display: 'flex',
                    flexDirection: 'column',
                    width :  this.state.resizeTrigger ?
                        window.innerWidth > 800 ? '49%' : '100%' :
                        window.innerWidth > 800 ? '49%' : '100%',
                    height : 600,
                    backgroundColor: '#27293d',
                    borderRadius: 8,
                    boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.3)',
                    overflow: 'hidden',
                    position: 'relative',
                }}>
                    <div style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gridTemplateColumns: '50% 50%',
                        width: this.state.resizeTrigger ?
                            window.innerWidth > 800 ? '49%' : '100%' :
                            window.innerWidth > 800 ? '49%' : '100%',
                        height: 300,
                    }}>
                        <div style={{
                            width: '50%',
                            height: 250,
                            position: "relative"
                        }}>
                            <img style={{
                                        width: 100,
                                        height: 100,
                                        position: 'absolute',
                                        left: '50%',
                                        top: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        filter: 'drop-shadow(5px 5px 5px #222)',
                                    }} src={sunnyIcon} alt={'weather'}/>
                            <p style={{position: "absolute", left: '50%', top: '80%', transform: 'translate(-50%, -50%)'
                                        , extAlign: "right", color: '#00D6B4', fontSize: 18, lineHeight: 2, fontWeight: 'bold'
                                        , marginRight: -8}}>آفتابی</p>
                        </div>
                        <div style={{
                            width: '50%',
                            height: 175,
                            marginTop: 64
                        }}>
                            <div style={{display: 'flex', marginTop: 16}}>
                                <p style={{textAlign: "right", color: '#00D6B4', fontSize: 18, lineHeight: 2, fontWeight: 'bold', marginRight: -8}}>23</p>
                                <p style={{textAlign: "right", color: '#bbb', fontSize: 13, lineHeight: 2.5, marginRight: 8, marginLeft: 16, fontWeight: 'bold'}}>درجه ی سانتیگراد</p>
                            </div>
                            <div style={{display: 'flex'}}>
                                <p style={{textAlign: "right", color: '#00D6B4', fontSize: 18, lineHeight: 2, fontWeight: 'bold', marginRight: -8}}>12</p>
                                <p style={{textAlign: "right", color: '#bbb', fontSize: 13, lineHeight: 2.5, marginRight: 8, marginLeft: 16, fontWeight: 'bold'}}>درصد رطوبت</p>
                            </div>
                            <div style={{display: 'flex'}}>
                                <p style={{textAlign: "right", color: '#00D6B4', fontSize: 18, lineHeight: 2, fontWeight: 'bold', marginRight: -8}}>25</p>
                                <p style={{textAlign: "right", color: '#bbb', fontSize: 13, lineHeight: 2.5, marginRight: 8, marginLeft: 16, fontWeight: 'bold'}}>کیلومتر بر ساعت سرعت باد</p>
                            </div>
                        </div>
                    </div>
                    <Card className="card-chart">
                        <CardHeader>
                            <Row>
                                <Col className="text-left" sm="6">
                                    <h5 className="card-category" style={{marginLeft: -32, width: "100%", direction: "rtl", color: "#fff"}}>نمودار دمای امروز</h5>
                                    <CardTitle tag="h2" style={{marginLeft: -32, width: "100%", direction: "rtl", color: "#fff"}}>دمای امروز تا این ساعت</CardTitle>
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
                </div>
            </div>
        );
    }
}

export default Weather;