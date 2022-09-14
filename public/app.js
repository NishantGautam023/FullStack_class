class Hello extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("h2", null, "Hello i am class component ");
  }

}

const Employee = props => {
  return /*#__PURE__*/React.createElement("h2", null, "Hello; ", props.firstName, " ", props.lastName);
};

const firstName = 'James';
const lastName = 'Bond';

const App = () => {
  return /*#__PURE__*/React.createElement("div", {
    id: "child"
  }, /*#__PURE__*/React.createElement("h2", null, "Welcome to Adv Full-Stack Programming"), /*#__PURE__*/React.createElement(Employee, {
    firstName: firstName,
    lastName: lastName
  }), /*#__PURE__*/React.createElement(Hello, null));
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/React.createElement(App, null));