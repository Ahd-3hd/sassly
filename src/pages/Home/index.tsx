import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Promotions from "../../components/Promotions";
import Features from "../../components/Features";
import Integrations from "../../components/Integrations";
import Audience from "../../components/Audience";
import Customers from "../../components/Customers";

const Home = () => {
  return (
    <Layout>
      <Header />
      <Promotions />
      <Features />
      <Integrations />
      <Audience />
      <Customers />
    </Layout>
  );
};

export default Home;
