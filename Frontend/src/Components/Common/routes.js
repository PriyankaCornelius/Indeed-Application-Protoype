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
import EmployersHeader from "../Employer/EmployersHeader";
import SignIn from "../JobSeeker/signIn";
import Register from "../JobSeeker/register";
import EmployersJobPost from "../Employer/employersJobPost";
import UploadResume from "../JobSeeker/uploadResume";
import Messaging from "../JobSeeker/messaging";
import JobSeekerProfile from "../JobSeeker/jobSeekerProfile";
import EmployerDashboard from "../Employer/employerDashboard";
import Messages from "../Employer/messages";
import Jobs from "../Employer/jobs";
import Analytics from "../Employer/analytics";
import Applicants from "../Employer/applicants";
import ApplyJob from "../JobSeeker/apply/applyJob";
import CompanyLandingPage from "../JobSeeker/companyPage/companyLandingPage";
import MyJobs from "../JobSeeker/myJobs";
import MyReviews from "../JobSeeker/myReviews";
import EmployerProfile from "../Employer/EmployerProfile";
import EmployerReviews from "../Employer/Reviews";
import EmployerLandingPage from "../Employer/EmployerLandingPage";

const Routes = () => {
  const history = useHistory();

  return (
    <Router history={history}>
      <Switch>
        {/* <Route exact path="/" component={FindJobsTwo} /> */}
        <Route path="/login" component={SignIn} />
        <Route path="/register" component={Register} />
        <Route path="/companyReviews" component={CompanyReviews} />
        <Route path="/myjobs" component={MyJobs} />
        <Route path="/company" component={CompanyLandingPage} />
        <Route path="/findSalaries" component={FindSalaries} />
        <Route path="/employersPostJobs" component={EmployersJobPost} />
        <Route path="/uploadResume" component={UploadResume} />
        <Route path="/messaging" component={Messaging} />
        <Route path="/jobSeekerProfile" component={JobSeekerProfile} />
        <Route path="/employerHeader" component={EmployersHeader} />
        <Route path="/employerDashboard" component={EmployerDashboard} />
        <Route path="/employerMessages" component={Messages} />
        <Route path="/employerJobs" component={Jobs} />
        <Route path="/employerApplicants" component={Applicants} />
        <Route path="/employerAnalytics" component={Analytics} />
        <Route path="/apply" component={ApplyJob} />
        <Route path="/myReviews" component={MyReviews} />
        <Route path="/employerProfile" component={EmployerProfile} />
        <Route path="/employerReviews" component={EmployerReviews} />
        <Route path="/employerLandingPage" component={EmployerLandingPage} />

        <Route path="/" component={FindJobs} />
      </Switch>
    </Router>
  );
};

export default Routes;
