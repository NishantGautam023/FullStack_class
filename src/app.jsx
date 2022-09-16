const IssueTable = () => {
  const rowStyle = { border: '1px solid black' };
  return (
    <div>
      <h2>IssueTable</h2>
      <table>
        <thead>
          <tr>
            <th style={rowStyle}>ID</th>
            <th style={rowStyle}>Title</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={rowStyle}>1</td>
            <td style={rowStyle}>This is First Issue</td>
          </tr>
          <tr>
            <td style={rowStyle}>2</td>
            <td style={rowStyle}>This is Second Issue</td>
          </tr>

          <tr>
            <td style={rowStyle}>3</td>
            <td style={rowStyle}>This is Third Issue</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const IssueFilter = () => {
  return <h2>IssueFilter</h2>;
};

const AddIssue = () => {
  return <h2>AddIssue</h2>;
};
const IssueList = () => {
  return (
    <div id="child">
      <IssueTable />
      <hr />
      <IssueFilter />
      <hr />
      <AddIssue />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<IssueList />);
