class Hello extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("h2", null, "Hello I am class component");
  }

}

const Greet = () => {
  return /*#__PURE__*/React.createElement("div", {
    id: "child"
  }, /*#__PURE__*/React.createElement("h2", null, "Welcome to Adv Full-Stack Programming"), /*#__PURE__*/React.createElement(Hello, null));
}; // first method


const Employee = ({
  firstName,
  lastName
}) => {
  return /*#__PURE__*/React.createElement("h2", null, "Hello: ", firstName, " ", lastName);
}; // second method

/* const Employee = (props) =>{
    return(
    <h2>Hello: {props.firstName} {props.lastName}</h2>
    )
} */

/*
Third method
const Employee = ({firstName,lastName}) =>{
    const {firstName,lastName}=props;
    return(
    <h2>Hello: {firstName} {lastName}</h2>
    )

*/


const firstName = "James";
const lastName = "Bond";

const App = () => {
  return /*#__PURE__*/React.createElement(Employee, {
    firstName: firstName,
    lastName: lastName
  });
};

const IssueFilter = () => {
  return /*#__PURE__*/React.createElement("h2", null, "This is placeholder for IssueFilter");
};

const IssueRow = props => {
  //const rowStyle = { border: "2px solid black" };
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, props.Id), /*#__PURE__*/React.createElement("td", null, props.Status), /*#__PURE__*/React.createElement("td", null, props.Owner), /*#__PURE__*/React.createElement("td", null, props.Effort), /*#__PURE__*/React.createElement("td", null, props.Create.toDateString()), /*#__PURE__*/React.createElement("td", null, props.Due.toDateString()), /*#__PURE__*/React.createElement("td", null, props.Title));
};

const IssueTable = () => {
  //Assume you are fetching data from API
  const tempIssues = [{
    Id: 1,
    Status: "Assigned",
    Owner: "Person-A",
    Effort: 14,
    Create: new Date("2022-09-23"),
    Due: new Date("2022-09-20"),
    Title: "This is first isuue"
  }, {
    Id: 2,
    Status: "Resolved",
    Owner: "Person-A",
    Effort: 10,
    Create: new Date("2022-09-24"),
    Due: new Date("2022-09-20"),
    Title: "This is second isuue"
  }];
  const newIssue = {
    Status: "Assigned",
    Owner: "Person-C",
    Effort: 24,
    Create: new Date("2022-09-12"),
    Due: new Date("2022-09-19"),
    Title: "This is third isuue"
  };
  const [allIssues, setAllIssues] = React.useState(tempIssues);
  let counter = 0;
  React.useEffect(() => {
    console.log(counter);
    setTimeout(() => {
      console.log(counter);
      counter++;
      AddSingleIssue(newIssue);
    }, 3000);
  }, [allIssues]);
  /* setTimeout(() => {
      setAllIssues(tempIssues)
  }, 2000)
  */

  const AddSingleIssue = newIssue => {
    console.log(allIssues);
    newIssue.Id = allIssues.length + 1;
    let issueList = allIssues.slice();
    issueList.push(newIssue);
    setAllIssues(issueList); //setAllIssues([...tempIssues,...newIssue])
  };

  const AllIssuesRow = allIssues.map(issue => /*#__PURE__*/React.createElement(IssueRow, {
    key: issue.Id,
    Id: issue.Id,
    Status: issue.Status,
    Owner: issue.Owner,
    Effort: issue.Effort,
    Create: issue.Create,
    Due: issue.Due,
    Title: issue.Title
  }));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "This is placeholder for IssueTable"), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Id"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", null, "Owner"), /*#__PURE__*/React.createElement("th", null, "Effort"), /*#__PURE__*/React.createElement("th", null, "Create"), /*#__PURE__*/React.createElement("th", null, "Due"), /*#__PURE__*/React.createElement("th", null, "Title"))), /*#__PURE__*/React.createElement("tbody", null, AllIssuesRow)));
};

const AddIssue = () => {
  return /*#__PURE__*/React.createElement("h2", null, "This is placeholder for IssueFilter");
};

const IssueList = () => {
  return /*#__PURE__*/React.createElement("div", {
    id: "issueList"
  }, /*#__PURE__*/React.createElement(IssueFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueTable, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(AddIssue, null));
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(IssueList, null));