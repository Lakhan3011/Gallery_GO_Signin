import { Navbar, Button, Link, Text } from "@nextui-org/react";
import { Layout } from "./Layout.js";

import Image from "next/image";
import Logo from "../Components/GG_bg.png";

export default function Nav() {
  const collapseItems = ["Home"];

  return (
    <Layout>
      <Navbar isBordered variant="sticky">
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          {/* <AcmeLogo /> */}
          <Image src={Logo} width={100} />
          <Text b color="inherit" hideIn="xs" className="font-bold">
            GALLERYGO
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="secondary"
          hideIn="xs"
          variant="highlight-rounded"
        ></Navbar.Content>
        <Navbar.Content>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              SignUp
            </Button>
          </Navbar.Item>
        </Navbar.Content>

        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="secondary"
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
              }}
              isActive={index === 2}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </Layout>
  );
}
