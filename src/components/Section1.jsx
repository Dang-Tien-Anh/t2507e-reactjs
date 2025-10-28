import { useState } from "react";

function Section1(props) {
    const msg = props.message; // dinh nghia cach nhan du lieu
    const stars = props.sts;
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrease() {
        setCount(count - 1);
        if (count == 0) {
            setCount(count);
        }
    }
    return (
        <div className="container">
            <h2>{msg}</h2>
            <p>Star: {stars}</p>
            <h3>Number: {count}</h3>
            <button onClick={increment} className="btn btn-primary" type="button">Upvote</button>
            <button onClick={decrease} className="btn btn-primary" type="button">Downvote</button>
        </div>
    )
}

export default Section1;