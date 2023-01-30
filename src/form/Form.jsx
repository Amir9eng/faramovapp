// @ts-check
import { useFormik } from "formik";
import React, { useState } from "react";

import Photos from "./formSteps/Photos";
import Details from "./formSteps/Details";
import Property from "./formSteps/Property";
import { FormSchema } from "../schemas/schema";

const Form = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const form = useFormik({
    initialValues: {
      propertyDetails: {
        noOfBeds: 0,
        description: "",
        propertyName: "",
        serviceCharge: 0,
        propertyCategory: "",
        propertyCondition: "",
        isBluraFinance: false,
      },
      bluraFinance: {
        description: "",
        spreadDuration: 0,
        tobePaidAmount: 0,
        recurringAmount: 0,
      },
      amenities: [],
      addressDetails: {
        city: "",
        state: "",
        apartment: "",
        searchAddress: "",
      },
      photos: [],
    },
    validationSchema: FormSchema,
    onSubmit: (values) => console.log(JSON.stringify(values, null, 2)),
  });

  const steps = [
    <Property key="property" form={form} setCurrentStep={setCurrentStep} />,
    <Details key="property" form={form} setCurrentStep={setCurrentStep} />,
    <Photos key="property" form={form} setCurrentStep={setCurrentStep} />,
  ];

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      {steps[currentStep]}
    </form>
  );
};

export default Form;
