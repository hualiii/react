import CountUI from "../../Components/Count";
import {connect} from "react-redux";
import {createAdd, createSub, createAsyncAdd} from "../../Redux/actions/count"

function mapStateToProps(state) {
    return {
        count: state.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        add(data) {
            dispatch(createAdd(data));
        },
        sub(data) {
            dispatch(createSub(data));
        },
        addAsync(data) {
            dispatch(createAsyncAdd(data));
        }

    }
}

const countContainer = connect(mapStateToProps, mapDispatchToProps)(CountUI);

export default countContainer;