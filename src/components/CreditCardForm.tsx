import { Formik, Form, Field } from "formik";
import { Select, TextField } from "formik-mui";
import MenuItem from "@mui/material/MenuItem";
import { DatePicker } from "formik-mui-x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import * as Yup from "yup";
import Button from "@mui/material/Button";

interface Values {
  cardType: string;
  nameOnCard: string;
  cardNumber: string;
  expirationDate: Date | null;
}

const validationSchema = Yup.object({
  cardType: Yup.string().required("Card type is required"),
  nameOnCard: Yup.string().min(5).required("Name is required"),
  cardNumber: Yup.string()
    .matches(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/, "Invalid card number")
    .required("Card number is required"),
  expirationDate: Yup.date().required("Expiration date is required"),
});

export default function CreditCardForm() {
  return (
    <div className="flex flex-col bg-white rounded-[25px] px-[20px] pb-[20px] pt-[19px] md:px-[20px] md:pb-[25px] md:pt-[19px] xl:px-[30px] xl:pb-[38px] xl:pt-[27px] space-y-4">
      <p className="text-[#718EBF] text-[12px] xl:text-[16px]">
        Credit Card generally means a plastic card issued by Scheduled
        Commercial Banks assigned to a Cardholder, with a credit limit, that can
        be used to purchase goods and services on credit or obtain cash
        advances.
      </p>

      <Formik
        initialValues={{
          cardType: "classic",
          nameOnCard: "",
          cardNumber: "",
          expirationDate: null,
        }}
        validationSchema={validationSchema}
        onSubmit={(values: Values, { setSubmitting }) => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
        }}
        validateOnChange={false}
        validateOnBlur={true} // start validation when leaving the input
      >
        {({ setFieldValue, submitForm, isSubmitting }) => (
          <Form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-[9px] md:gap-[7px] xl:gap-[11px]">
                <label htmlFor="cardType">Card Type</label>
                <Field
                  component={Select}
                  name="cardType"
                  id="cardType"
                  sx={{
                    borderRadius: "15px",
                  }}
                >
                  <MenuItem value="classic">Classic</MenuItem>
                  <MenuItem value="gold">Gold</MenuItem>
                  <MenuItem value="platinum">Platinum</MenuItem>
                  <MenuItem value="premium">Premium</MenuItem>
                </Field>
              </div>
              <div className="flex flex-col gap-[9px] md:gap-[7px] xl:gap-[11px]">
                <label htmlFor="nameOnCard">Name On Card</label>
                <Field
                  component={TextField}
                  name="nameOnCard"
                  id="nameOnCard"
                  placeholder="Enter cardholder name"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "15px",
                    },
                  }}
                />
              </div>
              <div className="flex flex-col gap-[9px] md:gap-[7px] xl:gap-[11px]">
                <label htmlFor="cardNumber">Card Number</label>
                <Field
                  component={TextField}
                  name="cardNumber"
                  id="cardNumber"
                  placeholder="**** **** **** ****"
                  inputProps={{
                    maxLength: 19,
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "15px",
                    },
                  }}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const value = e.target.value.replace(/\s/g, "");
                    const numbers = value.replace(/\D/g, "");
                    const formatted = numbers.match(/.{1,4}/g)?.join(" ") || "";

                    setFieldValue("cardNumber", formatted);
                  }}
                />
              </div>

              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <div className="flex flex-col gap-[9px] md:gap-[7px] xl:gap-[11px]">
                  <label htmlFor="cardType">Expiration Date</label>
                  <Field
                    component={DatePicker}
                    name="expirationDate"
                    id="expirationDate"
                    views={["year", "month"]}
                    minDate={new Date()}
                    onChange={(date: Date | null) =>
                      setFieldValue("expirationDate", date)
                    }
                    sx={{
                      ".MuiPickersInputBase-root": {
                        borderRadius: "12px",
                      },
                    }}
                  />
                </div>
              </LocalizationProvider>
            </div>

            <Button
              type="submit"
              className="!bg-[#1814F3] !text-white xl:!text-[18px] !px-[39px] !py-[14px] !rounded-[9px] !normal-case"
              disabled={isSubmitting}
              onClick={submitForm}
            >
              Add Card
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
