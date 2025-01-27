import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import { Helmet } from "react-helmet-async";

const Home = () => {
    const categories = useLoaderData();
    return (
        <div>
        <Helmet>
        <title>SKB Gadget</title>
      </Helmet> 
            {/* Banner */}
            <Banner></Banner>
            {/* Categories Tab Section */}
            <section>
        <div className="mx-auto mb-24 w-11/12 max-w-screen-xl">
          <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">
            SKB Cutting-Edge Gadgets
          </h2>
          <div className="flex flex-col gap-6 sm:flex-row">
            <div>
              <div className="rounded-xl bg-white p-4">
                <Categories categories={categories} />
              </div>
            </div>

            <div className="flex-1">
                {/* Dynamic Nexted Component */}
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};

export default Home;