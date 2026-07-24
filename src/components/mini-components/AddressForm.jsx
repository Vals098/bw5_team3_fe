import React from "react";
import { Form, Row, Col, Card } from "react-bootstrap";
import { useFormContext } from "react-hook-form";

export const AddressForm = ({ title, prefix }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const fieldError = (fieldName) => errors[prefix]?.[fieldName];

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Header className="bg-info text-white">
        <h5 className="mb-0">{title}</h5>
      </Card.Header>
      <Card.Body>
        <Row className="g-3">
          <Form.Group as={Col} md={8}>
            <Form.Label>Street</Form.Label>
            <Form.Control
              type="text"
              isInvalid={!!fieldError("street")}
              {...register(`${prefix}.street`, {
                required: "Street is required",
              })}
            />
            <Form.Control.Feedback type="invalid">
              {fieldError("street")?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md={4}>
            <Form.Label>House Number</Form.Label>
            <Form.Control
              type="text"
              isInvalid={!!fieldError("houseNumber")}
              {...register(`${prefix}.houseNumber`, {
                required: "House number is required",
              })}
            />
            <Form.Control.Feedback type="invalid">
              {fieldError("houseNumber")?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md={5}>
            <Form.Label>Municipality Name</Form.Label>
            <Form.Control
              type="text"
              isInvalid={!!fieldError("municipalityName")}
              {...register(`${prefix}.municipalityName`, {
                required: "Municipality Name is required",
              })}
            />
            <Form.Control.Feedback type="invalid">
              {fieldError("municipalityName")?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md={4}>
            <Form.Label>Locality</Form.Label>
            <Form.Control
              type="text"
              isInvalid={!!fieldError("locality")}
              {...register(`${prefix}.locality`, {
                required: "Locality is required",
              })}
            />
            <Form.Control.Feedback type="invalid">
              {fieldError("locality")?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md={3}>
            <Form.Label>CAP</Form.Label>
            <Form.Control
              type="text"
              isInvalid={!!fieldError("cap")}
              {...register(`${prefix}.cap`, { required: "CAP is required" })}
            />
            <Form.Control.Feedback type="invalid">
              {fieldError("cap")?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
      </Card.Body>
    </Card>
  );
};
