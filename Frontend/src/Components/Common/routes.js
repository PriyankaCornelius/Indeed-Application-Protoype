import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import CompanyReviews from "../JobSeeker/companyReviews";
import FindJobs from "../JobSeeker/findJobs";
import FindSalaries from "../JobSeeker/findSalaries";
import MainHeader from "../JobSeeker/mainHeader";
import SignIn from "../JobSeeker/signIn";
import Register from "../JobSeeker/register";
import EmployersJobPost from "../Employer/employersJobPost";
import UploadResume from "../JobSeeker/uploadResume";
import Messaging from "../JobSeeker/messaging";
import JobSeekerProfile from "../JobSeeker/jobSeekerProfile";
import ApplyJob from "../JobSeeker/apply/applyJob";
import CompanyLandingPage from "../JobSeeker/companyPage/companyLandingPage";
import MyReviews from "../JobSeeker/myReviews";

const Routes = () => {
  const history = useHistory();

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={FindJobs} />
        <Route path="/login" component={SignIn} />
        <Route path="/register" component={Register} />
        <Route path="/companyReviews" component={CompanyReviews} />
        <Route path="/company" component={CompanyLandingPage} />
        <Route path="/findSalaries" component={FindSalaries} />
        <Route path="/employersPostJobs" component={EmployersJobPost} />
        <Route path="/uploadResume" component={UploadResume} />
        <Route path="/messaging" component={Messaging} />
        <Route path="/jobSeekerProfile" component={JobSeekerProfile} />
        <Route path="/apply" component={ApplyJob} />
        <Route path="/myReviews" component={MyReviews} />
      </Switch>
    </Router>
  );
};

export default Routes;
