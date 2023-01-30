// @ts-check

import React from "react";
import Button from "../../components/Button";

import { PropertyCategories, PropertyConditions, PropertyNames } from "../../data/options";
import Select from "../../components/Select";
import { gridStyles } from "./gridStyles";
import { useState } from "react";

const amenities = [
  { id: 1, name: "Swimming pool", image: "./src/assets/swimmer.png" },
  { id: 2, name: "Television Set", image: "./src/assets/tv.svg" },
  { id: 3, name: "Security", image: "./src/assets/security.svg" },
  { id: 4, name: "Garden", image: "./src/assets/bar.svg" },
  { id: 5, name: "Air Conditioner", image: "./src/assets/air.svg" },
  { id: 6, name: "Wifi", image: "./src/assets/wifi.svg" },
  { id: 7, name: "Exercise Tools", image: "./src/assets/exercise.svg" },
];

const Property = ({ form, setCurrentStep }) => {
  const [active, setActive] = useState(0);
  return (
    <div className="px-4 md:px-16">
      <div className="flex items-center justify-between py-10 w-[60%]">
        <div className="flex justify-center items-center space-x-2">
          <div className="h-[32px] w-[32px] rounded-full bg-[#FF385C] flex justify-center items-center">
            <h1 className="text-white">1</h1>
          </div>
          <div className="text-sm flex flex-col">
            <p>PROPERTY</p>
            <p>DETAILS</p>
          </div>
        </div>
        <div className="w-[103px] bg-[#D3D3D3] h-[1px]"></div>

        <div className="flex justify-center items-center space-x-2">
          <div className="h-[32px] w-[32px] rounded-full border-gray-300 border-solid border-[1px] flex justify-center items-center">
            <h1 className="text-gray-400">2</h1>
          </div>
          <div className="text-sm text-gray-400">
            <p>ADDRESS</p>
            <p>DETAILS</p>
          </div>
        </div>
        <div className="w-[103px] bg-[#D3D3D3] h-[1px] ml-12"></div>
        <div className="flex justify-center items-center space-x-2">
          <div className="h-[32px] w-[32px] rounded-full border-gray-300 border-solid border-[1px] flex justify-center items-center">
            <h1 className="text-gray-400">3</h1>
          </div>
          <div className="text-sm text-gray-400">
            <p>PHOTOS</p>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-semibold">Property Details</h2>
      <div className="flex flex-col md:flex-row  justify-between w-[full] md:w-[90%]">
        <div className="space-y-4">
          <Select
            name="propertyCategory"
            label="Property Category"
            onChange={form.handleChange}
            value={form.values.propertyCategory}
            placeholder="Property Category"
            options={PropertyCategories.map((category) => ({
              name: category,
              value: category.toLowerCase(),
            }))}
          />
          <Select
            name="propertyName"
            label="Property Name"
            placeholder="Property Name"
            onChange={form.handleChange}
            value={form.values.propertyName}
            options={PropertyNames.map((name) => ({
              name,
              value: name.toLowerCase(),
            }))}
          />
          <Select
            name="noOfBeds"
            placeholder="0"
            label="Number of Beds"
            onChange={form.handleChange}
            value={form.values.noOfBeds}
            options={Array.from({ length: 10 }).map((_, index) => ({
              name: index + 1,
              value: index + 1,
            }))}
          />
          <Select
            name="isBluraFinance"
            onChange={form.handleChange}
            value={form.values.isBluraFinance}
            label="Is this a Blura finance property (Yes/No)"
            placeholder={"Yes"}
            options={["Yes", "No"].map((option) => ({
              name: option,
              value: option === "Yes" ? true : false,
            }))}
          />
        </div>
        <div className="space-y-8">
          <Select
            name="propertyCondition"
            onChange={form.handleChange}
            label="Property Condition"
            value={form.values.propertyCondition}
            options={PropertyConditions.map((condition) => ({
              name: condition,
              value: condition.toLowerCase(),
            }))}
            placeholder={"Property Type"}
          />
          <div className="space-y-6">
            <div>
              <label htmlFor="service" className="py-2">
                Service Charge(₦)
              </label>
              <input
                type="number"
                name="serviceCharge"
                className="w-[33rem] h-[3rem] outline-none border-gray-400 border-[1px] rounded-lg block px-3"
                placeholder="₦ 0"
              />
            </div>
            <div>
              {/* <label placeholder="Description (About Property)*">Description (About Property)*</label> */}
              <p>Description (About Property)*</p>
              <textarea
                name="description"
                id=""
                className="w-[33rem] h-[140px] outline-none border-gray-400 border-[1px] rounded-lg appearance-none"
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <h2 className="text-3xl font-semibold my-6">Blura Finance</h2>
        <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-[90%]">
          <aside>
            <div>
              <label htmlFor="service" className="py-2">
                Amount to be Paid(Part Payment)
              </label>
              <input
                type="number"
                className="w-[33rem] h-[3rem] outline-none border-gray-400 border-[1px] rounded-lg block px-3"
                placeholder="₦ 0"
              />
            </div>
            <Select
              placeholder="0"
              onChange={form.handleChange}
              name="spreadDuration"
              label="Spread Duration"
              value={form.values.spreadDuration}
              options={Array.from({ length: 12 }).map((_, index) => ({
                name: index,
                value: index,
              }))}
            />
            <div>
              <label htmlFor="service" className="py-2">
                Recurring Amount (monthly)
              </label>
              <input
                type="number"
                className="w-[33rem] h-[3rem] outline-none border-gray-400 border-[1px] rounded-lg block px-3"
                placeholder="₦ 0"
              />
            </div>
          </aside>
          <aside>
            <textarea
              name=""
              id=""
              className="w-[33rem] h-[140px] outline-none border-gray-400 border-[1px] rounded-lg appearance-none"
            ></textarea>
          </aside>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex my-3">
          <h2 className="text-3xl font-semibold">Amenities</h2>
          <span className="text-sm items-end flex">(0/7)</span>
        </div>
        <p className="text-gray-300">
          Pick at least one house amenity (what the house has to offer)
          <span className="text-red-500">*</span>
        </p>
        <div className={gridStyles}>
          {amenities.map(({ id, image, name }, index) => (
            <div
              onClick={() => active !== index && setActive(index)}
              key={id}
              className={`flex flex-col  items-center w-[8.3125rem] h-[5.125rem] space-y-2 border-2 rounded-xl border-gray-200 hover:cursor-pointer ${
                active === index ? "border-green-300" : "border-gray-200"
              }`}
            >
              <img src={image} className="w-[30px] h-[31px]" alt="" />
              <p>{name}</p>
            </div>
          ))}
        </div>
      </div>
      <Button name={"Next"} onClick={() => setCurrentStep((currentStep) => currentStep + 1)} />
    </div>
  );
};

export default Property;
