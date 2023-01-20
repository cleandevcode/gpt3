import {
  Input,
  Button,
  Select,
  FormItem,
  FormContainer,
  Upload,
  Avatar,
} from "components/ui";
import { Field, Form, Formik } from "formik";
import { countryList } from "constants/countries.constant";
import { components } from "react-select";
import * as Yup from "yup";
import { HiCheck, HiOutlineGlobeAlt, HiOutlineUser } from "react-icons/hi";

const { Control } = components;

const validationSchema = Yup.object().shape({
  avatar: Yup.string(),
  country: Yup.string().required("Please select your country"),
  timeZone: Yup.string().required("Please select your Time Zone"),
  industry: Yup.string().required("Please enter your industry"),
  language: Yup.string(),
});

const langOptions = [
  { value: "en", label: "English (US)", imgPath: "/img/countries/us.png" },
  { value: "ch", label: "Chinese", imgPath: "/img/countries/cn.png" },
  { value: "es", label: "Espanol", imgPath: "/img/countries/sp.png" },
  { value: "ar", label: "Arabic", imgPath: "/img/countries/ar.png" },
];

const createTimeZone = () => {
  const opt = [];
  for (let i = 12; i > -15; i--) {
    const operator = i > 0 ? "+" : "";
    opt.push({
      value: `GMT${operator}${i === 0 ? "" : i}`,
      label: `GMT${operator}${i === 0 ? "" : i}`,
    });
  }
  return opt;
};

const tzOptions = createTimeZone();

const Step2V2 = ({
  data = {
    avatar: "",
    country: "AF",
    timeZone: "GMT",
    industry: "Software",
    language: "en",
  },
  onNext,
}) => {
  const handleNext = (values) => {
    onNext?.(values);
  };

  const onSetFormFile = (form, field, file) => {
    form.setFieldValue(field.name, URL.createObjectURL(file[0]));
  };

  const CustomControl = ({ children, ...props }) => {
    const selected = props.getValue()[0];
    return (
      <Control {...props}>
        {selected && selected.imgPath ? (
          <Avatar
            className="ltr:ml-4 rtl:mr-4"
            shape="circle"
            size={18}
            src={selected.imgPath}
          />
        ) : (
          <HiOutlineGlobeAlt className="text-xl ml-3" />
        )}
        {children}
      </Control>
    );
  };

  const CustomSelectOption = ({ innerProps, label, data, isSelected }) => {
    return (
      <div
        className={`flex items-center justify-between p-2 ${
          isSelected
            ? "bg-gray-100 dark:bg-gray-500"
            : "hover:bg-gray-50 dark:hover:bg-gray-600"
        }`}
        {...innerProps}
      >
        <div className="flex items-center">
          {data.imgPath ? (
            <Avatar shape="circle" size={20} src={data.imgPath} />
          ) : (
            <HiOutlineGlobeAlt className="text-xl" />
          )}

          <span className="ml-2 rtl:mr-2">{label}</span>
        </div>
        {isSelected && <HiCheck className="text-emerald-500 text-xl" />}
      </div>
    );
  };

  return (
    <>
      <div className="mb-8 text-center">
        <h3 className="mb-2">Personal Information</h3>
        <p>Basic information for an account opening</p>
      </div>
      <div className="mt-8 max-w-[600px] lg:min-w-[600px] mx-auto">
        <Formik
          initialValues={data}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            setTimeout(() => {
              handleNext(values, setSubmitting);
            }, 1000);
          }}
        >
          {({ values, touched, errors, isSubmitting }) => {
            return (
              <Form>
                <FormContainer>
                  <FormItem name="avatar" label="Avatar">
                    <Field name="avatar">
                      {({ field, form }) => {
                        const avatarProps = field.value
                          ? { src: field.value }
                          : {};
                        return (
                          <Upload
                            className="cursor-pointer"
                            onChange={(files) =>
                              onSetFormFile(form, field, files)
                            }
                            onFileRemove={(files) =>
                              onSetFormFile(form, field, files)
                            }
                            showList={false}
                            uploadLimit={1}
                          >
                            <Avatar
                              className="border-2 border-white dark:border-gray-800 shadow-lg"
                              size={60}
                              shape="circle"
                              icon={<HiOutlineUser />}
                              {...avatarProps}
                            />
                          </Upload>
                        );
                      }}
                    </Field>
                  </FormItem>

                  <FormItem
                    label="Country"
                    invalid={errors.country && touched.country}
                    errorMessage={errors.country}
                  >
                    <Field name="country">
                      {({ field, form }) => (
                        <Select
                          placeholder="Country"
                          field={field}
                          form={form}
                          options={countryList}
                          value={countryList.filter(
                            (country) => country.value === values.country
                          )}
                          onChange={(country) =>
                            form.setFieldValue(field.name, country.value)
                          }
                        />
                      )}
                    </Field>
                  </FormItem>
                  <FormItem name="language" label="Language">
                    <Field name="language">
                      {({ field, form }) => (
                        <Select
                          field={field}
                          form={form}
                          options={langOptions}
                          components={{
                            Option: CustomSelectOption,
                            Control: CustomControl,
                          }}
                          value={langOptions.filter(
                            (option) => option.value === values?.language
                          )}
                          onChange={(option) =>
                            form.setFieldValue(field.name, option.value)
                          }
                        />
                      )}
                    </Field>
                  </FormItem>
                  <FormItem name="timeZone" label="Time Zone">
                    <Field name="timeZone">
                      {({ field, form }) => (
                        <Select
                          field={field}
                          form={form}
                          options={tzOptions}
                          components={{
                            Option: CustomSelectOption,
                            Control: CustomControl,
                          }}
                          value={tzOptions.filter(
                            (option) => option.value === values?.timeZone
                          )}
                          onChange={(option) =>
                            form.setFieldValue(field.name, option.value)
                          }
                        />
                      )}
                    </Field>
                  </FormItem>
                  <FormItem
                    label="Industry"
                    invalid={errors.industry && touched.industry}
                    errorMessage={errors.industry}
                  >
                    <Field
                      type="text"
                      autoComplete="off"
                      name="industry"
                      placeholder="Industry"
                      component={Input}
                    />
                  </FormItem>
                  <FormItem>
                    <Button
                      block
                      variant="solid"
                      type="submit"
                      disabled={isSubmitting}
                      loading={isSubmitting}
                      className="mt-4"
                    >
                      Continue
                    </Button>
                  </FormItem>
                </FormContainer>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default Step2V2;
