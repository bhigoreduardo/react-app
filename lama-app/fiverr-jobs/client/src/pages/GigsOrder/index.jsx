import { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../contexts/UserContext";
import "./GigsOrder.style.scss";
import { useQuery } from "@tanstack/react-query";
import api from "../../libs/api";

const GigsOrder = () => {
  const { currentUser } = useContext(UserContext);

  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () => api.get("/orders").then((res) => res.data),
  });

  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              {<th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>}
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Something went wrong</p>
            ) : !data?.length > 0 ? (
              <p>Not orders founded</p>
            ) : (
              data.map((item) => (
                <tr key={item._id}>
                  <td>
                    <Link to={`/gigs/${item.gigId}`}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="image"
                      />
                    </Link>
                  </td>
                  <td>{item.title}</td>
                  <td>
                    ${item.price?.toString().split(".")[0]}.
                    <sup>{item.price?.toString().split(".")[1] || "00"}</sup>
                  </td>
                  <td>{item.sellerName}</td>
                  <td>
                    <img
                      className="message"
                      src="./img/message.png"
                      alt="Message"
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GigsOrder;
