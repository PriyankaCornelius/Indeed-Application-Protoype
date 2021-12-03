import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import CompanyReviews from "../JobSeeker/companyReviews";
import FindJobs from "../JobSeeker/findJobs";
import ProtectedRouter from "./protectedRouter";
import FindSalaries from "../JobSeeker/findSalaries";
import EmployersHeader from "../Employer/EmployersHeader";
import SignIn from "../JobSeeker/signIn";
import Register from "../JobSeeker/register";
import EmployersJobPost from "../Employer/employersJobPost";
import EmployerDashboard from "../Employer/employerDashboard";
import Analytics from "../Employer/analytics";
import CompanyLandingPage from "../JobSeeker/companyPage/companyLandingPage";
import PostReview from "../JobSeeker/PostReview";
import PostSalary from "../JobSeeker/PostSalary";

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
        <Route path="/employerHeader" component={EmployersHeader} />
        <Route path="/employerDashboard" component={EmployerDashboard} />
        <Route path="/employerAnalytics" component={Analytics} />
        <Route path="/postReview" component={PostReview} />
        <Route path="/postSalary" component={PostSalary} />
        <Route path="*" component={ProtectedRouter} />
      </Switch>
    </Router>
  );
};

export default Routes;
