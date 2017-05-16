import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import HomeNav from './home_nav.jsx';

const mapDispatchToState = dispatch => ({
  login: user => dispatch(login(user)),
});

export default connect(null,mapDispatchToState)(HomeNav);
