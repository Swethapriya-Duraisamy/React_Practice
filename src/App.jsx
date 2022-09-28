const Issuefilter = () => { 
    return <h1>Issue Filter component</h1>;
}

const Issuelist = () => {

    return <h1>Issue Table</h1>
}

const IssueRow = (props) => {
    return(
        <tr>
            <td>{props.Id}</td>
            <td>{props.Titleeeee}</td>
            <td>{props.Owner}</td>
            <td>{props.Created}</td>
            <td>{props.Due}</td>
            <td>{props.Status}</td>
        </tr>
    )
}

const Issuetable = () =>{
    const rowStyle = {border: "1px solid"} ;
    const tempIssues = [
        {Id: '1',
        Title: 'Test React App',
        Owner: 'Swetha',
        Created: new Date("2022-09-27"),
        Due: new Date("2022-09-30"),
        Status: "Assigned"
    },
    {Id: '2',
        Title: 'Test React App Again',
        Owner: 'Swetha is Beautiful',
        Created: new Date("2022-09-28"),
        Due: new Date("2022-09-31"),
        Status: "Completed"
    }
    ]

    const issuerows = tempIssues.map(issue => (
        <IssueRow Id={issue.Id} key={issue.Id} rowStyle={rowStyle} Titleeeee={issue.Title} Owner={issue.Owner} Created={issue.Created.toDateString()} Due={issue.Due.toDateString()} Status={issue.Status} />
    ))


    return (
    <div>
    <h2>This is placeholder for IssueTable</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>OWNER</th>
            <th>CREATED</th>
            <th>DUE</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>{issuerows}</tbody>
      </table>
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Issuetable />
    </React.StrictMode>
    
);

