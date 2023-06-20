import { blogs } from "../utils/data";
import Breadcrumb from "../components/Breadcrumb";
import Container from "../components/Container";
import FilterCard from "../components/FilterCard";
import BlogCard from "../components/BlogCard";

const Blogs = () => {
  return (
    <>
      <Breadcrumb title="Blogs" />
      <Container className="py-5">
        <div className="row">
          <div className="col-3 d-sm-block d-none">
            <FilterCard />
          </div>

          <div className="col-sm-9 col-12 row">
            {blogs?.length > 0 &&
              blogs.map((item, i) => (
                <div key={i} className="col-md-6 col-12 mb-3">
                  <BlogCard {...item} />
                </div>
              ))
            }
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blogs;
