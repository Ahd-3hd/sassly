import Layout from "../../components/Layout";
import Button from "../../components/Buttons";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Paragraph,
} from "../../components/Typography";
import { NavLink } from "../../components/Links";
const Test = () => {
  return (
    <Layout>
      <div
        style={{
          margin: "1rem",
        }}
      >
        <Button />
        <Heading1>Heading1</Heading1>
        <Heading2>Heading2</Heading2>
        <Heading3>Heading3</Heading3>
        <Heading4>Heading4</Heading4>
        <Paragraph variant="pLarge">Paragraph</Paragraph>
        <Paragraph variant="pNormal">Paragraph</Paragraph>
        <Paragraph variant="pSmall">Paragraph</Paragraph>
        <NavLink href="#" text="Visit Page" />
      </div>
    </Layout>
  );
};

export default Test;
