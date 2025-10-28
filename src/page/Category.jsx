import { useState } from "react";
import { data, Link, Router } from "react-router-dom";
import { useEffect } from "react";
function Category() {
    const [cateList, setCateList] = useState([]);
    const [productList, setProductList] = useState([]);
    const loadCateList = () => {
        const url = `https://dummyjson.com/product/categories`;

        fetch(url).then(js => js.json()).then((data) => {
            setCateList(data);
        })
    }

    const loadProductList = () => {
        const url = `https://dummyjson.com/product/category/beauty`;
        fetch(url).then(js => js.json()).then((data) => {
            setProductList(data.products);
        })
    }

    useEffect(() => {
        loadCateList();
        loadProductList();
    }, [])
    return (
        <main className="section main">
            <section className="section breadcrumb">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                </ul>
            </section>

            <section className="section categories">
                <div className="d-flex justify-content-start">
                    <div className="list">
                        <div className="list-left">
                            <div className="left-over">
                                <h4>Categories</h4>
                                <ul>
                                    {cateList.map((item) => {
                                        return <a key={item.slug} href="#"><li>{item.name}</li></a>;
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="section categories">
                <div className="d-flex justify-content-end">
                    <div className="list">
                        <div className="list-left">
                            <div className="left-under">
                                <div className="Featured">
                                    <h4>Featured products</h4>
                                </div>
                                <img src="images/Tea-02/Shop/list-under.png" />
                            </div>
                        </div>

                        <div className="list-right">
                            <div className="right-over">
                                <div className="over-01">
                                    <p>Showing 1–9 of 72 results</p>
                                </div>
                                <div className="over-03">
                                </div>
                                <div className="over-02">
                                    <select name="sort">
                                        <option value="sort">Default sorting</option>
                                        <option value="sort">Sort by popularity</option>
                                        <option value="sort">Sort by average rating </option>
                                        <option value="sort">Sort by latest</option>
                                        <option value="sort">Sort by price: low to high</option>
                                        <option value="sort">Sort by price: high to low</option>
                                    </select>
                                </div>
                            </div>

                            <div className="right-under">
                                {productList.map((item) => {
                                    return <div className="card">
                                        <img style={{ width: '100%' }} src={item.thumbnail} alt="" />
                                        <Link to={"/product"}><p>{item.title}</p></Link>
                                    </div>;
                                })}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
export default Category;