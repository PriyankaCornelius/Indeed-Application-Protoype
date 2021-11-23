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
import EmployersJobPost from "../Employer/employersJobPost";
import UploadResume from "../JobSeeker/uploadResume";

const Routes = () => {
  const history = useHistory();

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={FindJobs} />
        <Route path="/signIn" component={SignIn} />
        <Route path="/companyReviews" component={CompanyReviews} />
        <Route path="/findSalaries" component={FindSalaries} />
        <Route path="/employersPostJobs" component={EmployersJobPost} />
        <Route path="/uploadResume" component={UploadResume} />
      </Switch>
    </Router>
  );
};

export default Routes;
