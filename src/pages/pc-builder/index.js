import {Button, Divider } from "antd";
import Link from "next/link";
import React from "react";

const PcBuilderPage = () => {
  const items = [
    {
      title: "CPU/Processor",
      link: "/processor",
    },
    {
      title: "Motherboard",
      link: "/motherboard",
    },
    {
      title: "Processor",
      link: "/processor",
    },
    {
      title: "Motherboard",
      link: "/motherboard",
    },
    {
      title: "CPU/Processor",
      link: "/processor",
    },
    {
      title: "Motherboard",
      link: "/motherboard",
    },
    {
      title: "CPU/Processor",
      link: "/processor",
    },
    {
      title: "Motherboard",
      link: "/motherboard",
    },
  ];
  return (
    <div>
      <h1 className="text-center text-gray-300 bg-slate-500 text-2xl font-bold p-4">
        Build Your PC
      </h1>
      {items?.map((item, i) => (
        <div key={i}>
          <div className="flex justify-between p-4 items-center bg-slate-50 ">
            <div className="flex gap-8 items-center">
              {/* <div className="w-16 h-16">{item?.icon}</div> */}
              {/* <img src={item?.icon} alt="" className="h-16 w-16" /> */}
              <p className="font-medium text-xl">{item?.title}</p>
            </div>
            <div>
              <Link href={item?.link}>
                <Button>Select</Button>
              </Link>
            </div>
          </div>
          <Divider className="block" />
        </div>
      ))}
    </div>
  );
};

export default PcBuilderPage;
