class Hello extends React.Component {
  render() {
    return <h2>Hello i am class component </h2>;
  }
}

const Employee = (props) => {
  return (
    <h2>
      Hello; {props.firstName} {props.lastName}
    </h2>
  );
};

const firstName = 'James';
const lastName = 'Bond';

const App = () => {
  return (
    <div id="child">
      <h2>Welcome to Adv Full-Stack Programming</h2>

      <Employee firstName={firstName} lastName={lastName} />
      <Hello />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
