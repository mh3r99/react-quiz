import { Component } from "react";
import { connect } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Logout from "./components/Logout/Logout";
import Auth from "./containers/Auth/Auth";
import Quiz from "./containers/Quiz/Quiz";
import QuizCreator from "./containers/QuizCreator/QuizCreator";
import QuizList from "./containers/QuizList/QuizList";
import Layout from "./hoc/Layout/Layout";
import { autoLogin } from "./store/actions/auth";
import withRouter from "./withRouter/withRouter";

class App extends Component {
  componentDidMount() {
    this.props.authLogin();
  }

  render() {
    let routes = (
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/quiz/:id" element={<Quiz />} />
        <Route path="/*" element={<QuizList />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Routes>
          <Route path="/quiz-creator" element={<QuizCreator />} />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="/logout/*" element={<Logout />} />
          <Route path="/" element={<QuizList />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      );
    }

    return <Layout>{routes}</Layout>;
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authLogin: () => dispatch(autoLogin()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
