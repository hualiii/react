## JSX

```
 jsx 语法规则:
      1.定义虚拟DOM()
      2.标签插入js表达式使用{}
      3.样式的类名class----> className
      4.内联样式{{}} 小驼峰式命名
      5.虚拟DOM只要一个根标签
      6.标签必须闭合
      7.标签首字母
        a.小写字母,转为html同名标签
        b.大写字母.转为react组件标签
```

## 元素渲染

```js
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

## 组件

### 函数式组件

```js
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
```

函数式组件props 通过参数传递

### 类式组件

```js
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}
```

## state

```js
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
```

## 事件处理

```js
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // 为了在回调中使用 `this`，这个绑定是必不可少的
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

ReactDOM.render(
    <Toggle/>,
    document.getElementById('root')
);
```

注意绑定this 或者

```js
handleClick = () => {
    this.setState(state => ({
        isToggleOn: !state.isToggleOn
    }));
}
```

当事件需要传参时,可以使用柯里化函数

```js
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

## 条件渲染

### 元素变量

```js
class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick}/>;
        } else {
            button = <LoginButton onClick={this.handleLoginClick}/>;
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        );
    }
}

ReactDOM.render(
    <LoginControl/>,
    document.getElementById('root')
);
```

### 与运算符 &&

```js
function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 &&
            <h2>
                You have {unreadMessages.length} unread messages.
            </h2>
            }
        </div>
    );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
    <Mailbox unreadMessages={messages}/>,
    document.getElementById('root')
);
```

### 三目运算符

```js
class Box extends React.Component {
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        return (
            <div>
                {isLoggedIn
                    ? <LogoutButton onClick={this.handleLogoutClick}/>
                    : <LoginButton onClick={this.handleLoginClick}/>
                }
            </div>
        );
    }
}
```

### 阻止组件渲染

```js
function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            Warning!
        </div>
    );
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(state => ({
            showWarning: !state.showWarning
        }));
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning}/>
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    <Page/>,
    document.getElementById('root')
);

```

## 列表渲染

```js
function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>
            {number}
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
    <NumberList numbers={numbers}/>,
    document.getElementById('root')
);

```

## 表单

### 受控组件

```js
    class Login extends React.Component {
    state = {
        username: "",
        password: ""
    }
    showMessage = (event) => {
        event.preventDefault()
        const {username, password} = this.state
        alert(`username:${username},password:${password}`)
    }
    saveUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    savePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.showMessage}>
                    <input onChange={this.saveUsername} type="text" placeholder="username"/>
                    <input onChange={this.savePassword} type="password" placeholder="password"/>
                    <button>submit</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<Login/>, document.getElementById("app"))
```

### 非受控组件

```js
    class Login extends React.Component {
    showMessage = (event) => {
        event.preventDefault()
        const {username, password} = this
        alert(`username:${username.value},password:${password.value}`)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.showMessage}>
                    <input type="text" placeholder="username" ref={c => this.username = c}/>
                    <input type="password" placeholder="password" ref={c => this.password = c}/>
                    <button>submit</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<Login/>, document.getElementById("app"))
```

## 生命周期钩子函数旧

+ componentDidMount
+ componentWillUnmount
+ shouldComponentUpdate
+ componentWillUpdate
+ componentDidUpdate
+ componentWillUnmount

## 生命周期钩子函数新

+ componentDidMount
+ getSnapshotBeforeUpdate
+ componentDidUpdate