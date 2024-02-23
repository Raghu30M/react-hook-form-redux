import "./formDetails.css";
import { useSelector } from "react-redux";
const FormDetails = () => {
    let sNo = 0;

    // USESELECTOR-HOOK
    const formData = useSelector((state) => state.form);
    return (
        <section className="form-details-section my-5">
            <div className="container">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>S.NO</th>
                                <th>USER NAME</th>
                                <th>USER MAIL-ID</th>
                                <th>GENDER</th>
                                <th>HOBBIES</th>
                                <th>QUALIFICATION</th>
                                <th>COMMENTS</th>
                                <th>SUBMITTED DATE-TIME</th>
                            </tr>
                        </thead>
                        <tbody>
                            {formData.map((data) => (
                                <tr key={data.id}>
                                    <td>{++sNo}</td>
                                    <td>{data.username}</td>
                                    <td>{data.usermail}</td>
                                    <td>{data.gender}</td>
                                    <td>{data.hobby.join(", ")}</td>
                                    <td>{data.qualification}</td>
                                    <td>{data.usercomment}</td>
                                    <td>{data.createdAt}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default FormDetails;
