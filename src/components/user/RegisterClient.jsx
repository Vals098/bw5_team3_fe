import { useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { useForm, FormProvider } from "react-hook-form";

import { CompanyDataForm } from "../mini-components/CompanyDataForm";
import { ContactDataForm } from "../mini-components/ContactDataForm";
import { AddressForm } from "../mini-components/AddressForm";

const RegisterClient = () => {
  const [alert, setAlert] = useState(null);
  const token = localStorage.getItem("token");

  const methods = useForm({
    defaultValues: {
      legalName: "",
      clientType: "PA",
      iva: "",
      email: "",
      pec: "",
      phoneNumber: "",
      yearlyIncome: "",

      contactName: "",
      contactSurname: "",
      contactEmail: "",
      contactPhoneNumber: "",

      sameAddress: false,

      legalAddress: {
        street: "",
        houseNumber: "",
        municipalityName: "",
        locality: "",
        cap: "",
      },

      operationalAddress: {
        street: "",
        houseNumber: "",
        municipalityName: "",
        locality: "",
        cap: "",
      },
    },
  });

  const { register, getValues, setValue, handleSubmit, reset } = methods;

  const handleSave = async (data) => {
    setAlert(null);

    const payload = { ...data };
    delete payload.sameAddress;

    try {
      const response = await fetch("http://localhost:8080/clients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw responseData;
      }

      setAlert({
        type: "success",
        msg: "Client registered successfully!",
      });

      reset();
    } catch (error) {
      if (error && (error.errorsList || error.message)) {
        setAlert({
          type: "danger",
          title: "Server Validation Error:",
          errorsList: error.errorsList || [error.message],
        });
      } else {
        setAlert({
          type: "danger",
          msg: "Unable to connect to the server. Please try again later.",
        });
      }
    }
  };

  return (
    <div className="container py-1">
      <Card>
        <Card.Header as="h4" className="bg-primary text-white py-2">
          REGISTER NEW CLIENT
        </Card.Header>
        <Card.Body className="p-3">
          {alert && (
            <Alert
              variant={alert.type}
              onClose={() => setAlert(null)}
              dismissible
            >
              {alert.title && <Alert.Heading>{alert.title}</Alert.Heading>}
              {alert.errorsList ? (
                <ul className="mb-0">
                  {alert.errorsList.map((err, index) => (
                    <li key={index}>{err}</li>
                  ))}
                </ul>
              ) : (
                alert.msg
              )}
            </Alert>
          )}

          <FormProvider {...methods}>
            <Form onSubmit={handleSubmit(handleSave)}>
              <CompanyDataForm />
              <ContactDataForm />
              <AddressForm title="Legal Address" prefix="legalAddress" />

              <Form.Check
                type="checkbox"
                id="sameAddress"
                className="my-3"
                label="Operational address is the same as legal address"
                {...register("sameAddress", {
                  onChange: (e) => {
                    if (e.target.checked) {
                      const currentLegal = getValues("legalAddress");
                      setValue("operationalAddress", currentLegal, {
                        shouldValidate: true,
                        shouldDirty: true,
                      });
                    }
                  },
                })}
              />

              <AddressForm
                title="Operational Address"
                prefix="operationalAddress"
              />

              <div className="d-flex justify-content-end mt-4">
                <Button
                  type="submit"
                  variant="success"
                  size="lg"
                  className="px-5"
                >
                  Save Client
                </Button>
              </div>
            </Form>
          </FormProvider>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RegisterClient;
