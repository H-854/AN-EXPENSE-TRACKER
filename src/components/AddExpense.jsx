import { useFormik } from 'formik';
import axios from 'axios';

export default function AddTransactionIncome({setTransaction}){

    const validate = values => {
        const errors = {};
        if (!values.name) {
          errors.name = 'Enter a valid name';
        }
      
        if (!values.amount) {
          errors.amount = 'Enter a valid amount';
        }
      
        if (!values.date) {
          errors.date = 'Enter a valid date';
        }
        
        if (!values.tag) {
            errors.tag = 'Enter a valid tag';
        }
        return errors;
      };
    const formik = useFormik({
        initialValues: {
            name: '',
            amount: '',
            date: '',
            tag: ""
        },
        validate,
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            // console.log(values)
            values.transactionType = "expense"
            axios.post("http://localhost:3000/transactions",values).then((response)=>{
                console.log(response.data);
                setTransaction((prevArr)=>{
                    return [...prevArr,response.data]
                })
            })
        },
      });
    return <div>
                <div className="modal fade" id="exampleModal2" aria-labelledby="exampleModalLabel" aria-hidden="true" tabIndex={"-1"}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Add Expense</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={formik.handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name: </label>
                                        <input type="text" className="form-control" id="name" name="name" onChange={formik.handleChange} value={formik.values.name}/>
                                        {formik.errors.name ? <div>{formik.errors.name}</div> : null}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="amount" className="form-label">Amount: </label>
                                        <input type="number" className="form-control" id="amount" name="amount" onChange={formik.handleChange} value={formik.values.amount}/>
                                        {formik.errors.amount ? <div>{formik.errors.amount}</div> : null}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="date" className="form-label">Date: </label>
                                        <input type="date" className="form-control" id="date" name="date" onChange={formik.handleChange} value={formik.values.date}/>
                                        {formik.errors.date ? <div>{formik.errors.date}</div> : null}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="tag" className="form-label">Tag: </label>
                                        <input type="text" className="form-control" id="tag" name="tag" onChange={formik.handleChange} value={formik.values.tag}/>
                                        {formik.errors.tag ? <div>{formik.errors.tag}</div> : null}
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="submit" className="btn btn-primary">Add Expense</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
}