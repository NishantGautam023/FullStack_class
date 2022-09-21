const IssueTable = () => {
  const rowStyle = {
    border: '1px solid black'
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "IssueTable"), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: rowStyle
  }, "ID"), /*#__PURE__*/React.createElement("th", {
    style: rowStyle
  }, "Title"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: rowStyle
  }, "1"), /*#__PURE__*/React.createElement("td", {
    style: rowStyle
  }, "This is First Issue")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: rowStyle
  }, "2"), /*#__PURE__*/React.createElement("td", {
    style: rowStyle
  }, "This is Second Issue")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: rowStyle
  }, "3"), /*#__PURE__*/React.createElement("td", {
    style: rowStyle
  }, "This is Third Issue")))));
};

const IssueFilter = () => {
  return /*#__PURE__*/React.createElement("h2", null, "IssueFilter");
};

const AddIssue = () => {
  return /*#__PURE__*/React.createElement("h2", null, "AddIssue");
};

const IssueList = () => {
  return /*#__PURE__*/React.createElement("div", {
    id: "child"
  }, /*#__PURE__*/React.createElement(IssueTable, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(AddIssue, null));
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/React.createElement(IssueList, null));