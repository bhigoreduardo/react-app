import "./GigsAdd.scss";

const GigsAdd = () => {
  return (
    <div className="add">
      <div className="container">
        <h1>Add New Gig</h1>
        <div className="sections">
          <div className="info">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="e.g. I will do something I'm really good at"
            />
            <label htmlFor="category">Category</label>
            <select name="category" id="category">
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
            <label htmlFor="cover">Cover Image</label>
            <input type="file" id="cover" />
            <label htmlFor="images">Upload Images</label>
            <input type="file" multiple id="images" />
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              placeholder="Brief descriptions to introduce your service to customers"
              cols="0"
              rows="16"
            ></textarea>
            <button>Create</button>
          </div>
          <div className="details">
            <label htmlFor="shortTitle">Service Title</label>
            <input
              type="text"
              id="shortTitle"
              placeholder="e.g. One-page web design"
            />
            <label htmlFor="shortDescription">Short Description</label>
            <textarea
              name="shortDescription"
              id="shortDescription"
              placeholder="Short description of your service"
              cols="30"
              rows="10"
            ></textarea>
            <label htmlFor="deliveryTime">Delivery Time (e.g. 3 days)</label>
            <input type="number" name="deliveryTime" id="deliveryTime" />
            <label htmlFor="revisionsNumber">Revision Number</label>
            <input type="number" name="revisionsNumber" id="revisionsNumber" />
            <label>Add Features</label>
            <input type="text" placeholder="e.g. page design" />
            <input type="text" placeholder="e.g. file uploading" />
            <input type="text" placeholder="e.g. setting up a domain" />
            <input type="text" placeholder="e.g. hosting" />
            <label htmlFor="price">Price</label>
            <input type="number" name="price" id="price" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GigsAdd;
