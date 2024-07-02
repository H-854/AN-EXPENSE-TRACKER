import { useEffect, useState } from "react";

export default function Transaction({ transaction, setTransaction }) {
  const [filtered, setFiltered] = useState(transaction);
  const [search, setSearch] = useState("");
  const [selected,setSelected] = useState("all")
  const [check,setChecked]=useState(false)
  useEffect(() => {
    setFiltered(transaction);
  }, [transaction]);

  useEffect(() => {
    setFiltered(transaction.filter((el) =>
      el.name.toLowerCase().includes(search.toLowerCase())
    ));
  }, [search, transaction]);

  // useEffect(()=>{
  //   console.log(selected);
  //   if(selected==="all"){
  //     setFiltered(transaction)
  //   }else if(selected==="income" || selected==="expense"){
  //     setFiltered(transaction.filter((el)=>
  //       el.transactionType.toLowerCase().includes(selected.toLowerCase())
  //     ))
  //   }
  // },[selected,transaction])

  function handleSearchEvent(event) {
    setSearch(event.target.value);
  }

  function handleClick(event){
    setSelected(event.target.value)
  }
  return (
    <div className="transactions my-5">
      <div className="search container-fluid">
        <input
          type="text"
          placeholder="Search By Name"
          className="form-control w-50"
          value={search}
          onChange={handleSearchEvent}
        />
      </div>
      <div>
        <div className="headerTransactions my-5 p-3 container-fluid">
          <h4 className="ms-5">My Transactions</h4>
          <button className="btn btn-outline-primary ms-auto mx-4 w-25">
            Export to CSV
          </button>
          <button className="btn btn-primary w-25">Import from CSV</button>
        </div>
        <div
          className="btn-group grp m-5"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            type="radio"
            className="btn-check w-25"
            name="btnradio"
            id="all"
            value="all"
            onClick={handleClick}
          />
          <label className="btn btn-outline-primary" htmlFor="all">
            All
          </label>

          <input
            type="radio"
            className="btn-check w-25"
            name="btnradio"
            id="income"
            value="income"
            onClick={handleClick}
          />
          <label className="btn btn-outline-primary" htmlFor="income">
            Income
          </label>

          <input
            type="radio"
            className="btn-check w-25"
            name="btnradio"
            id="expense"
            value="expense"
            onClick={handleClick}
          />
          <label className="btn btn-outline-primary" htmlFor="expense">
            Expense
          </label>
        </div>
        <div className="my-5 px-5 py-3 container-fluid w-100">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Type</th>
                <th scope="col">Date</th>
                <th scope="col">Amount</th>
                <th scope="col">Tag</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((ele) => (
                <tr key={ele._id}>
                  <th scope="row">{ele.name}</th>
                  <td>{ele.transactionType}</td>
                  <td>{ele.date.slice(0, 10)}</td>
                  <td>{ele.amount}</td>
                  <td>{ele.tag}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
