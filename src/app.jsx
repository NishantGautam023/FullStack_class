class Hello extends React.Component {
    render() {
        return (
            <h2>Hello I am class component</h2>
        )
    }
}

const Greet = () => {
    return (
        <div id="child">
            <h2>Welcome to Adv Full-Stack Programming</h2>
            <Hello />
        </div>
    )
}
// first method
const Employee = ({ firstName, lastName }) => {
    return (
        <h2>Hello: {firstName} {lastName}</h2>
    )
}
// second method
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
    return (
        <Employee firstName={firstName} lastName={lastName} />
    )
}


const IssueFilter = () => {
    return (
        <h2>This is placeholder for IssueFilter</h2>
    )
}

const IssueRow = (props) => {
    //const rowStyle = { border: "2px solid black" };
    return (
        <tr>
            <td>{props.Id}</td>
            <td>{props.Status}</td>
            <td>{props.Owner}</td>
            <td>{props.Effort}</td>
            <td>{props.Create.toDateString()}</td>
            <td>{props.Due.toDateString()}</td>
            <td>{props.Title}</td>

        </tr>
    )
}

const IssueTable = () => {




    //Assume you are fetching data from API
    const tempIssues = [
        { Id: 1, Status: "Assigned", Owner: "Person-A", Effort: 14, Create: new Date("2022-09-23"), Due: new Date("2022-09-20"), Title: "This is first isuue" },
        { Id: 2, Status: "Resolved", Owner: "Person-A", Effort: 10, Create: new Date("2022-09-24"), Due: new Date("2022-09-20"), Title: "This is second isuue" }
    ];

    const newIssue = 
        {  Status: "Assigned", Owner: "Person-C", Effort: 24, Create: new Date("2022-09-12"), Due: new Date("2022-09-19"), Title: "This is third isuue" };

    const [allIssues, setAllIssues] = React.useState(tempIssues);

    let counter = 0;

    React.useEffect(() => {
        console.log(counter);
        setTimeout(()=>{
            console.log(counter);
            counter++;
            AddSingleIssue(newIssue);
        },3000)
    }, [allIssues]);

    /* setTimeout(() => {
        setAllIssues(tempIssues)
    }, 2000)
    */

    const AddSingleIssue = (newIssue) => {
        console.log(allIssues);
        newIssue.Id = allIssues.length+1;
        let issueList = allIssues.slice();
        
        issueList.push(newIssue);
        setAllIssues(issueList);
        //setAllIssues([...tempIssues,...newIssue])
    }

    const AllIssuesRow = allIssues.map(issue => (
        <IssueRow key={issue.Id} Id={issue.Id} Status={issue.Status} Owner={issue.Owner} Effort={issue.Effort} Create={issue.Create} Due={issue.Due} Title={issue.Title}></IssueRow>
    ))

    return (
        <div>
            <h2>This is placeholder for IssueTable</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Status</th>
                        <th>Owner</th>
                        <th>Effort</th>
                        <th>Create</th>
                        <th>Due</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {AllIssuesRow}
                </tbody>
            </table>
        </div>
    )
}

const AddIssue = () => {
    return (
        <h2>This is placeholder for IssueFilter</h2>
    )
}

const IssueList = () => {
    return (
        <div id="issueList">
            <IssueFilter />
            <hr />
            <IssueTable />
            <hr />
            <AddIssue />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
        <IssueList />
)