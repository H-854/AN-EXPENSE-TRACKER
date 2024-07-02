import AddTransactionIncome from "./AddTransactionForm";
export default function Expense({ total }) {
  return (
    <div className="expense container-fluid my-5">
      <div className="card expenseCard my-3 mx-3">
        <div className="card-body">
          <h5 className="card-title">Total Income</h5>
          <p className="card-text">0</p>
          <button
            type="button"
            className="btn btn-outline-primary w-100"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal1"
          >
            Add Income
          </button>
        </div>
      </div>
      <div className="card expenseCard my-3 mx-3">
        <div className="card-body p-3">
          <h5 className="card-title">Current Balance</h5>
          <p className="card-text mb-5">0</p>
        </div>
      </div>
      <div className="card expenseCard my-3 mx-3">
        <div className="card-body">
          <h5 className="card-title">Total Expenses</h5>
          <p className="card-text">0</p>
          <button
            type="button"
            className="btn btn-outline-primary w-100"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal2"
          >
            Add Expenses
          </button>
        </div>
      </div>
    </div>
  );
}
