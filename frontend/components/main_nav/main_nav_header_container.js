import { connect } from 'react-redux';
import NavHeader from './nav_header';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});


export default connect(mapStateToProps,null)(NavHeader);
