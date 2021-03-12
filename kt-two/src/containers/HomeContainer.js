import Home from '../components/Home'
import {connect} from 'react-redux'
import { addCakeToCartActionCreator } from '../redux/actions'
const mapStateToProps=(state)=>({
    
})
const mapDispatchToProps=(dispatch)=>({
    addCakeToCartActionDispatcher : flavour=> {
        return dispatch(addCakeToCartActionCreator(flavour))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)