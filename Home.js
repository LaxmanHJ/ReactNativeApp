import React from 'react';
import { StyleSheet,
  Text,
   View,
    TextInput, 
    TouchableOpacity,
    Keyboard ,
    AsyncStorage,
} from 'react-native';
import { Pedometer } from 'expo-sensors';
import Icon from 'react-native-vector-icons/Ionicons';  

export default class HomeScreen extends React.Component {  
  state = {
    isPedometerAvailable: 'checking',
    pastStepCount: 0,
    currentStepCount:4000,
    milescovered:0,
    activity:0,
    time: '',
    dateformat:'',
    phone:'',

  };

  
  componentDidMount() {
    this._subscribe();
    this._loadInitialState().done();
    this.Clock = setInterval( () => this.GetTime(), 1000 );

  }

  componentWillUnmount() {
    this._unsubscribe();
    clearInterval(this.Clock);

  }
  _loadInitialState=async()=>{
    var phone = await AsyncStorage.getItem('phone');
    this.setState({phone:phone})

  }

  GetTime() {

    // Creating variables to hold time.
    var date, hour,sec,min, fullTime;

    // Creating Date() function object.
    date = new Date();

    // Getting current hour from Date object.
    hour = date.getHours(); 
    sec = date.getSeconds();
    min = date.getMinutes();


    curdate = date.getDate() + "/"+ parseInt(date.getMonth()+1) +"/"+date.getFullYear();
    curdate = curdate.toString();
    // Adding all the variables in fullTime variable.
    fullTime = hour.toString()+min.toString()  + sec.toString();

    // Setting up fullTime variable in State.
    this.setState({

      time: fullTime,
      dateformat:curdate

    });

    if(fullTime == "04550")
    {

      const {activity} = this.state
      const {currentStepCount} = this.state
      const {phone}  = this.state
      const {dateformat} = this.state

      console.log("date is here",dateformat,activity,currentStepCount,phone)

      fetch('http://localhost:8080/piedpiper/insertTracks.php', {
                method: 'POST',
                headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',

                          },


                body: JSON.stringify({
                progress:activity,
                steps:currentStepCount,
                trackdate: dateformat,
                phone:phone,
               
              })
            })
          .then((response) => response.json())
            .then((responseData) => {
                                    console.log("inside responsejson"+responseData);
                                    console.log('response object:'+JSON.stringify(responseData))
                                    if (responseData.msg=="insertion_tracks_ok"){
                                      alert(" Inserting to tracks is success")
                                    }
                                    else if(responseData=="insertion_tracks_failed"){
                                      alert("Inserting to tracks is failed")

                                    }
                                    else {
                                    alert("Idk What happend")
                                    }

            }).catch((error)=> {
              console.error("Error Message 1"+error)
            });
      }
    }
  
  
  _subscribe = () => {
    this._subscription = Pedometer.watchStepCount(result => {
      this.setState({
        currentStepCount: result.steps,
      });
    });

    Pedometer.isAvailableAsync().then(
      result => {
        this.setState({
          isPedometerAvailable: String(result),
        });
      },
      error => {
        this.setState({
          isPedometerAvailable: 'Could not get isPedometerAvailable: ' + error,
        });
      }
    );

    const end = new Date();
    const start = new Date();
    let miles  = this.state.currentStepCount / 2000;
    this.setState({milescovered:miles})

    let progress = this.state.currentStepCount/12000*100 ;
    progress = progress.toFixed(2);
    this.setState({activity:progress})

    start.setDate(end.getDate() - 1);
    Pedometer.getStepCountAsync(start, end).then(
      result => {
        this.setState({ pastStepCount: result.steps });
      },
      error => {
        this.setState({
          pastStepCount: 'Could not get stepCount: ' + error,
        });
      }
    );
  };

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.logo}>Summary</Text>
        <View style={styles.stepscontainer}> 
            <View style={styles.flexcontainer}>
              <Icon style={[{color: 'tomato'},{margin:5}]} size={25} name={'ios-paw'}/> 
              <Text style={styles.showtext}>Steps</Text>
            </View>
              <Text style={{fontSize:30}}> {this.state.currentStepCount} S</Text>

        </View>
        <View style={{padding:10}}></View>
        <View style={styles.stepscontainer}> 
            <View style={styles.flexcontainer}>
              <Icon style={[{color: 'tomato'},{margin:5}]} size={25} name={'ios-walk'}/> 
              <Text style={styles.showtext}>Miles covered</Text>
            </View>
              <Text style={{fontSize:30}}> {this.state.milescovered} </Text>

        </View>
        <View style={{padding:10}}></View>
        <View style={styles.stepscontainer}> 
            <View style={styles.flexcontainer}>
              <Icon style={[{color: 'tomato'},{margin:5}]} size={25} name={'ios-fitness'}/> 
              <Text style={styles.showtext}>Activity</Text>
            </View>
              <Text style={{fontSize:30}}> {this.state.activity}% </Text>

        </View>
        <Text>Pedometer.isAvailableAsync(): {this.state.isPedometerAvailable}</Text>
        <Text>Steps taken in the last 24 hours: {this.state.pastStepCount}</Text>
        <Text style={styles.TextStyle}> {this.state.time} </Text>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    padding:5
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"coral",
    marginBottom:20
  },
  stepscontainer:{
    borderRadius:10,
    paddingLeft:10,
    backgroundColor:"moccasin",
    width:"90%",
    paddingTop:2

  },
  showtext:{
    fontSize:30,
    color:"tomato",
    fontWeight:'500',
    paddingBottom:10
  },
  flexcontainer:{
    // width: '40%',
    justifyContent: 'flex-start',
    flexDirection:'row',
    // flexWrap:'wrap',
    // alignSelf:'center'
    justifyContent:'flex-start'
  }
});
