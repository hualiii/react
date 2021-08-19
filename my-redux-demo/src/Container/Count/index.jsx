import CountUI from "../../Components/Count";
import {connect} from "react-redux";
import {createAdd, createSub, createAsyncAdd} from "../../Redux/actions/count"

function mapStateToProps(state) {
    return {
        count: state.count
    }
}


const countContainer = connect(mapStateToProps, {
    add:createAdd,
    sub:createSub,
    addAsync:createAsyncAdd
})(CountUI);

export default countContainer;