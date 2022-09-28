const Issuefilter = () => {
  return /*#__PURE__*/React.createElement("h1", null, "Issue Filter component");
};

const Issuelist = () => {
  return /*#__PURE__*/React.createElement("h1", null, "Issue Table");
};

const IssueRow = props => {
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, props.Id), /*#__PURE__*/React.createElement("td", null, props.Titleeeee), /*#__PURE__*/React.createElement("td", null, props.Owner), /*#__PURE__*/React.createElement("td", null, props.Created), /*#__PURE__*/React.createElement("td", null, props.Due), /*#__PURE__*/React.createElement("td", null, props.Status));
};

const Issuetable = () => {
  const rowStyle = {
    border: "1px solid"
  };
  const tempIssues = [{
    Id: '1',
    Title: 'Test React App',
    Owner: 'Swetha',
    Created: new Date("2022-09-27"),
    Due: new Date("2022-09-30"),
    Status: "Assigned"
  }, {
    Id: '2',
    Title: 'Test React App Again',
    Owner: 'Swetha is Beautiful',
    Created: new Date("2022-09-28"),
    Due: new Date("2022-09-31"),
    Status: "Completed"
  }];
  const issuerows = tempIssues.map(issue => /*#__PURE__*/React.createElement(IssueRow, {
    Id: issue.Id,
    key: issue.Id,
    rowStyle: rowStyle,
    Titleeeee: issue.Title,
    Owner: issue.Owner,
    Created: issue.Created.toDateString(),
    Due: issue.Due.toDateString(),
    Status: issue.Status
  }));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "This is placeholder for IssueTable"), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "TITLE"), /*#__PURE__*/React.createElement("th", null, "OWNER"), /*#__PURE__*/React.createElement("th", null, "CREATED"), /*#__PURE__*/React.createElement("th", null, "DUE"), /*#__PURE__*/React.createElement("th", null, "STATUS"))), /*#__PURE__*/React.createElement("tbody", null, issuerows)));
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(Issuetable, null)));