import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="">

    <div className="relative z-10 py-6 space-y-16 lg:space-y-32 text-gray-900 flex flex-col items-center justify-center">
      <div className="text-center space-y-10">
        <h3 className="text-2xl uppercase tracking-wider font-semibold">
          Coming soon
        </h3>
        <h1 className="text-7xl lg:text-9xl font-extrabold text-gray-700">mlpal.ai</h1>
        <p className="text-xl lg:text-2xl tracking-wide mx-10 lg:max-w-xl lg:mx-auto">
          We`re under construction. Check back for an update soon.
        </p>
      </div>
      <a 
        href="mailto:notifications@mlpal.ai"
        className="px-4 w-48 h-10 lg:px-10 text-xl font-semibold bg-gray-700 text-white rounded-xl transition ease-in-out duration-500 hover:bg-green-500 flex items-center justify-center"
      >
        Contact Us
      </a>
    </div>
    <div className="absolute bottom-5">
      <p className="text-md text-gray-500 tracking-wide mx-10 lg:max-w-xl lg:mx-auto">
          mlpal.ai &copy; 2024 | All rights reserved.
        </p>
    </div>
  </Layout>
);

export default IndexPage;
