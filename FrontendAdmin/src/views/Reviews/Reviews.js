import React from "react";
import Axios from 'axios';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import {
    Form,
    // Card,
    // Container,
    // Row,
    // Col,
  } from 'react-bootstrap';


  class Reviews extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        products: [],
        inSearch: '',
        inDelivery: '',
        inV: '',
        redirectVar: false,
        search: false,
        resultTable: [],
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleChangeD = this.handleChangeD.bind(this);
      this.handleChangeV = this.handleChangeV.bind(this);
    }
  
    componentDidMount() {
      const restList = [{user:"Sushan", company: "Amazon", review:"Day1"}, {user:"Sushan", company: "Netflix", review:"Hectic"}, {user:"Sushan", company: "Snap", review:"Filter"}, {user:"Sushan", company: "Meta", review:"Ready"}];
      this.setState({products: restList});
    //   Axios.defaults.withCredentials = true;
    //   Axios.get('http://localhost:3001/allrest')
    //     .then((res) => {
    //       if (res) {
    //         console.log(res.data);
    //         if (res.data.length >= 0) {
    //           // eslint-disable-next-line no-plusplus
    //           for (let i = 0; i < res.data.length; i++) {
    //             restList.push(res.data[i]);
    //           }
    //         }
    //         this.setState({ products: restList });
    //         this.props.dispatch({
    //           type: 'USER_HOMEPAGE',
    //           payload: true,
    //         });
    //       }
    //     }).catch((err) => {
    //       throw err;
    //     });
    }
  
    finalSearch = (userData) => {
      console.log(userData);
      Axios.defaults.withCredentials = true;
      Axios.post('http://localhost:3001/searchItem', userData)
        .then((res) => {
          if (res.status === 200) {
            console.log(res.data);
            this.setState({ resultTable: res.data });
            this.setState({ search: true });
          } else {
            // this.setState({ search: false });
          }
        });
    }
  
    handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    }
  
    handleChangeD = (e) => {
      this.setState({ inDelivery: e.target.value });
      console.log(e.target.value);
    }
  
     handleChangeV = (e) => {
       this.setState({ inV: e.target.value });
       console.log(e.target.value);
     }
  
    handleSearch = (e) => {
      e.preventDefault();
      const userData = {
        inSearch: this.state.inSearch,
        inDelivery: this.state.inDelivery,
        inV: this.state.inV,
      };
      this.finalSearch(userData);
    }
  
    handleVisit = (event) => {
      event.preventDefault();
      const visitdata = {
        email: event.target.value,
      };
      console.log(visitdata);
      this.setState({
        remail: visitdata,
        redirectVar: true,
      });
      console.log(this.state.remail);
      console.log(this.state.redirectVar);
      Axios.defaults.withCredentials = true;
      Axios.post('http://localhost:3001/sr', visitdata)
        .then((res) => {
          console.log(res.status);
        });
    }
  
    handleFavourite = (event) => {
      event.preventDefault();
      const visitdata = {
        email: event.target.id,
      };
      console.log(visitdata);
      this.setState({
        remail: visitdata,
      });
      console.log(this.state.remail);
      Axios.defaults.withCredentials = true;
      Axios.defaults.headers.common['authorization'] = localStorage.getItem('token');
      Axios.post('http://localhost:3001/markfavourite', visitdata)
        .then((res) => {
          console.log(res.status);
        });
    }
  
    enterPressed = (event) => {
      const ser = { inSer: this.state.inSearch };
      console.log(ser);
      const code = event.keyCode || event.which;
      if (code === 13) {
        Axios.defaults.withCredentials = true;
        Axios.post('http://localhost:3001/searchOI', ser)
          .then((res) => {
            if (res.status === 200) {
              console.log(res.data);
              this.setState({ resultTable: res.data });
              this.setState({ search: true });
            } else {
              this.setState({ search: false });
            }
          });
      }
    }
  
    render() {
      console.log(this.state.products);
      console.log(this.state.resultTable);
      let redirectVar = null;
      if (this.state.redirectVar) {
        redirectVar = <Redirect to="/seerestaurant" />;
      }
      if (!this.state.search) {
        return (
        
        <div>
          {redirectVar}
          <div className="row">
              <Form inline>
                  <GridContainer>
                      <GridItem>
                          <label>
                          Type of Review: &nbsp;
                          <select onChange={this.handleChangeR}>
                            <option value="All">Select</option>
                            <option value="Pending">Pending</option>
                            <option value="Accepted">Accepted</option>
                            <option value="Rejected">Rejected</option>
                            </select>
                          </label>
                          &nbsp; &nbsp; &nbsp;
                         
                          &nbsp; &nbsp; &nbsp;
                          <Button color="primary" type="submit" onClick={this.handleSearch} round>Filter</Button>
                        
                      </GridItem>
                      </GridContainer>
                      </Form>
            <Form inline>
              <GridContainer>
                {this.state.products.map((item) => <GridItem xs={12} sm={12} md={4}>
                 <Card style={{ width: '20rem', margin: '2rem' }}>
                  <CardBody>
                    <CardHeader color="info">{item.company}</CardHeader>
                    <CardBody>
                      Applicant: {item.user}
                    </CardBody>
                    <CardBody>
                      Review: {item.review}
                    </CardBody>
                    <CardFooter>
                    <Button color="success" id={item.p_id} value={item.email} onClick={this.handleVisit}>Approve</Button>
                    <Button color="danger" id={item.email} value={item.email} onClick={this.handleFavourite}>Reject</Button>
                    </CardFooter>
                  </CardBody>
                </Card>
                </GridItem>)}
              </GridContainer>
            </Form>
          </div>
        </div>
        );
      } else {
        return (
        
            <div>
              {redirectVar}
              <div className="row">
                  <Form inline>
                      <GridContainer>
                          <GridItem>
                              <label>
                              Type of Review: &nbsp;
                              <select onChange={this.handleChangeR}>
                                <option value="All">Select</option>
                                <option value="Pending">Pending</option>
                                <option value="Accepted">Accepted</option>
                                <option value="Rejected">Rejected</option>
                                </select>
                              </label>
                              &nbsp; &nbsp; &nbsp;
                             
                              &nbsp; &nbsp; &nbsp;
                              <Button color="primary" type="submit" onClick={this.handleSearch} round>Filter</Button>
                            
                          </GridItem>
                          </GridContainer>
                          </Form>
                <Form inline>
                  <GridContainer>
                    {this.state.products.map((item) => <GridItem xs={12} sm={12} md={4}>
                     <Card style={{ width: '20rem', margin: '2rem' }}>
                      <CardBody>
                        <CardHeader color="info">{item.company}</CardHeader>
                        <CardBody>
                          Applicant: {item.user}
                        </CardBody>
                        <CardBody>
                          Review: {item.review}
                        </CardBody>
                        <CardFooter>
                        <Button color="success" id={item.p_id} value={item.email} onClick={this.handleVisit}>Approve</Button>
                        <Button color="danger" id={item.email} value={item.email} onClick={this.handleFavourite}>Reject</Button>
                        </CardFooter>
                      </CardBody>
                    </Card>
                    </GridItem>)}
                  </GridContainer>
                </Form>
              </div>
            </div>
            );
      }
      
    }
  }
  
  
export default Reviews;
  
//   export default function Reviews() {
//     const classes = useStyles();
//     return (
//       <div>
//         <GridContainer>
//           <GridItem xs={12} sm={12} md={8}>
//             <Card>
//               <CardHeader color="primary">
//                 <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
//                 <p className={classes.cardCategoryWhite}>Complete your profile</p>
//               </CardHeader>
//               <CardBody>
//                 <GridContainer>
//                   <GridItem xs={12} sm={12} md={5}>
//                     <CustomInput
//                       labelText="Company (disabled)"
//                       id="company-disabled"
//                       formControlProps={{
//                         fullWidth: true,
//                       }}
//                       inputProps={{
//                         disabled: true,
//                       }}
//                     />
//                   </GridItem>
//                   <GridItem xs={12} sm={12} md={3}>
//                     <CustomInput
//                       labelText="Username"
//                       id="username"
//                       formControlProps={{
//                         fullWidth: true,
//                       }}
//                     />
//                   </GridItem>
//                   <GridItem xs={12} sm={12} md={4}>
//                     <CustomInput
//                       labelText="Email address"
//                       id="email-address"
//                       formControlProps={{
//                         fullWidth: true,
//                       }}
//                     />
//                   </GridItem>
//                 </GridContainer>
//                 <GridContainer>
//                   <GridItem xs={12} sm={12} md={6}>
//                     <CustomInput
//                       labelText="First Name"
//                       id="first-name"
//                       formControlProps={{
//                         fullWidth: true,
//                       }}
//                     />
//                   </GridItem>
//                   <GridItem xs={12} sm={12} md={6}>
//                     <CustomInput
//                       labelText="Last Name"
//                       id="last-name"
//                       formControlProps={{
//                         fullWidth: true,
//                       }}
//                     />
//                   </GridItem>
//                 </GridContainer>
//                 <GridContainer>
//                   <GridItem xs={12} sm={12} md={4}>
//                     <CustomInput
//                       labelText="City"
//                       id="city"
//                       formControlProps={{
//                         fullWidth: true,
//                       }}
//                     />
//                   </GridItem>
//                   <GridItem xs={12} sm={12} md={4}>
//                     <CustomInput
//                       labelText="Country"
//                       id="country"
//                       formControlProps={{
//                         fullWidth: true,
//                       }}
//                     />
//                   </GridItem>
//                   <GridItem xs={12} sm={12} md={4}>
//                     <CustomInput
//                       labelText="Postal Code"
//                       id="postal-code"
//                       formControlProps={{
//                         fullWidth: true,
//                       }}
//                     />
//                   </GridItem>
//                 </GridContainer>
//                 <GridContainer>
//                   <GridItem xs={12} sm={12} md={12}>
//                     <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel>
//                     <CustomInput
//                       labelText="Lamborghini, Your chick she so thirsty, I'm in that two seat Lambo."
//                       id="about-me"
//                       formControlProps={{
//                         fullWidth: true,
//                       }}
//                       inputProps={{
//                         multiline: true,
//                         rows: 5,
//                       }}
//                     />
//                   </GridItem>
//                 </GridContainer>
//               </CardBody>
//               <CardFooter>
//                 <Button color="primary">Update Profile</Button>
//               </CardFooter>
//             </Card>
//           </GridItem>
//           <GridItem xs={12} sm={12} md={4}>
//             <Card profile>
//               <CardAvatar profile>
                
//               </CardAvatar>
//               <CardBody profile>
//                 <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
//                 <h4 className={classes.cardTitle}>Alec Thompson</h4>
//                 <p className={classes.description}>
//                   Don{"'"}t be scared of the truth because we need to restart the
//                   human foundation in truth And I love you like Kanye loves Kanye
//                   I love Rick Owens’ bed design but the back is...
//                 </p>
//                 <Button color="primary" round>
//                   Follow
//                 </Button>
//               </CardBody>
//             </Card>
//           </GridItem>
//         </GridContainer>
//       </div>
//     );
//   }
  