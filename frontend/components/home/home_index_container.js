import { connect } from "react-redux";
import { login, signin } from "../../actions/session_actions";
import HomeIndex from './home_index.jsx';

const mapDispatchToState = dispatch => ({
  login: user => dispatch(login(user)),
  signin: user => dispatch(signin(user))
});

export default connect(null,mapDispatchToState)(HomeIndex);
