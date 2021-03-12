import Header from '../components/Header'
import {connect} from 'react-redux'

const mapStateToProps=(state)=>({
    cakes:state.cakes
})
const mapDispatchToProps=(dispatch)=>({
    
})
export default connect(mapStateToProps,mapDispatchToProps)(Header)