import { Menu } from "antd";
import Link from "next/link";

const Navbar = () => {
  const items = [
    {
      label: <Link href="/">Home</Link>,
      key: "home",
    },
    {
      label: "Categories",
      key: "categories",
      children: [
        {
          label: <Link href="/processor">CPU / Processor</Link>,
          key: "cpu",
        },
        {
          label: <Link href="/motherboard">Motherboard</Link>,
          key: "motherboard",
        },
        {
          label:<Link href="/ram">RAM</Link>,
          key: "ram",
        },
        {
          label: <Link href="/power-supply">Power Supply Unit</Link>,
          key: "power supply",
        },
        {
          label: <Link href="/storage">Storage Device</Link>,
          key: "storage",
        },
        {
          label: <Link href="/monitor">Monitor</Link>,
          key: "monitor",
        },
        {
          label: <Link href="/mouse">Mouse</Link>,
          key: "mouse",
        },
        {
          label: <Link href="/keyboard">Keyboard</Link>,
          key: "keyboard",
        },
      ],
    },
    {
      label: <Link href="/pc-builder">PC Builder</Link>,
      key: "pc builder",
    },
  ];
  return (
    <Menu
      className="flex justify-center text-lg font-semibold text-gray-50"
      style={{ backgroundColor: "#7dbcea" }}
      //   onClick={onClick}
      //   selectedKeys={[current]}
      mode="horizontal"
      items={items}
      //   multiple={true}
    />
  );
};

export default Navbar;
