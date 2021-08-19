## redux基本使用
```
1.src下创建:
  -redux
    +store.js
    +count_reducer.js
2.store.js
  a.引入redux中的createStore函数,创建一个store
  b.调用createStore函数,传入reducer
  c.暴露返回的store
3.count_reducer.js
  a.reducer本质是一个函数,接收preState,action,返回加工后的状态
  b.reducer有两个作用,初始化状态,加工状态
  c.reducer被第一次调用时,是store自动触发的,传递的preState是undefined
4.index.js中检测store中的状态改变,一旦发生改变,重新渲染<App/>.
备注:redux只负责管理状态,状态驱动页面,需要 靠react
5.count.js
  专门创建action对象
6.constant.js
  创建type常量
7.异步acton
  redux-thunk
  函数action
```

## react-redux基本使用
```
UI组件和容器组件关联
容器组件通过props传递store
UI组件容器组件关联
容器组件传递props到ui组件(mapStateToProps, mapDispatchToProps)
```


```js
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
```