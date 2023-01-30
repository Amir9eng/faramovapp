// @ts-check
import * as yup from "yup";
import { Amenities, Cities, PropertyCategories, PropertyConditions, PropertyNames, States } from "../data/options";

const propertyDetailsSchema = yup.object({
  propertyCategory: yup.string().oneOf(PropertyCategories).required("Property category is required"),
  propertyName: yup.string().oneOf(PropertyNames).required("Property name is required"),
  noOfBeds: yup.number().min(1).max(10).required("Number of beds is required"),
  isBluraFinance: yup.boolean().required("Blura finance is required"),
  propertyCondition: yup.string().oneOf(PropertyConditions).required("Property condition is required"),
  serviceCharge: yup.number(),
  description: yup.string().required("Description is required"),
});

const bluraFinanceSchema = yup.object({
  toBePaidAmount: yup.number().required("Amount to be paid is required"),
  spreadDuration: yup.number().min(1).max(12).required("Spread duration is required"),
  recurringAmount: yup.number().min(1).max(12).required("Recurring amount is required"),
  description: yup.string(),
});

const AmenitiesSchema = yup.array().oneOf([Amenities]).min(1).required();

const addressDetailsSchema = yup.object({
  searchAddress: yup.string().required("Search address is required"),
  city: yup.string().oneOf(Cities).required("City is required"),
  state: yup.string().oneOf(States).required("State is required"),
  apartmentNumber: yup.string(),
});

const photosSchema = yup.array().of(yup.mixed()).required("Photos are required");

export const FormSchema = yup.object({
  propertyDetails: propertyDetailsSchema.required(),
  bluraFinance: bluraFinanceSchema.when("propertyDetails", {
    is: (val) => val.isBluraFinance === true,
    then: (schema) => schema.required(),
  }),
  amenities: AmenitiesSchema.required(),
  addressDetails: addressDetailsSchema.required(),
  photos: photosSchema.required(),
});
