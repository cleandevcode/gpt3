import React from "react";
import { Button, FormItem, FormContainer, Select, Input } from "components/ui";
import { Field, Form, Formik } from "formik";
import { HiArrowSmLeft } from "react-icons/hi";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  organizationName: Yup.string().required("Organization name is required"),
  organizationSize: Yup.string().required(
    "Please select your organization size"
  ),
});

const sizes = [
  { label: "Solo", value: "solo" },
  { label: "1 ~ 2 members", value: "1~2" },
  { label: "2 ~ 5 members", value: "2~5" },
  { label: "5 ~ 10 members", value: "5~10" },
  { label: "10+ members", value: "10+" },
];

const Step2 = ({ onNext, onBack }) => {
  return (
    <div className="text-center">
      <h3 className="mb-2">Tell us about yourself</h3>
      <div className="mt-8 max-w-[600px] lg:min-w-[600px] mx-auto">
        <Formik
          initialValues={{
            organizationName: "",
            organizationSize: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            onNext?.({
              key: "organization",
              value: values.organizationName,
            });
          }}
        >
          {({ values, touched, errors }) => {
            return (
              <Form>
                <FormContainer>
                  <FormItem
                    label="Is this for personal use or business use?"
                    invalid={
                      errors.organizationName && touched.organizationName
                    }
                    errorMessage={errors.organizationName}
                  >
                    <Field
                      type="text"
                      autoComplete="off"
                      name="organizationName"
                      placeholder="Is this for personal use or business use"
                      component={Input}
                    />
                  </FormItem>
                  <FormItem
                    label="Size of your team"
                    invalid={
                      errors.organizationSize && touched.organizationSize
                    }
                    errorMessage={errors.organizationSize}
                  >
                    <Field name="organizationSize">
                      {({ field, form }) => (
                        <Select
                          placeholder="Size of your team"
                          field={field}
                          form={form}
                          options={sizes}
                          value={sizes.filter(
                            (size) => size.value === values.organizationSize
                          )}
                          onChange={(size) =>
                            form.setFieldValue(field.name, size.value)
                          }
                        />
                      )}
                    </Field>
                  </FormItem>
                  <FormItem>
                    <Button block variant="solid" type="submit">
                      Continue
                    </Button>
                    <Button
                      className="mt-4"
                      variant="plain"
                      onClick={onBack}
                      type="button"
                      icon={<HiArrowSmLeft />}
                      block
                    >
                      Back
                    </Button>
                  </FormItem>
                </FormContainer>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Step2;
