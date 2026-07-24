import React from "react";
import { Form, Row, Col, Card } from "react-bootstrap";
import { useFormContext } from "react-hook-form";

export const ContactDataForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Header className="bg-info text-white">
        <h5 className="mb-0">Contact Info</h5>
      </Card.Header>
      <Card.Body>
        <Row className="g-3">
          <Form.Group as={Col} md={6}>
            <Form.Label>Contact Name</Form.Label>
            <Form.Control
              type="text"
              isInvalid={!!errors.contactName}
              {...register("contactName", {
                required: "Contact name is required",
              })}
            />
            <Form.Control.Feedback type="invalid">
              {errors.contactName?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md={6}>
            <Form.Label>Contact Surname</Form.Label>
            <Form.Control
              type="text"
              isInvalid={!!errors.contactSurname}
              {...register("contactSurname", {
                required: "Contact Surname is required",
              })}
            />
            <Form.Control.Feedback type="invalid">
              {errors.contactSurname?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md={6}>
            <Form.Label>Contact Email</Form.Label>
            <Form.Control
              type="email"
              isInvalid={!!errors.contactEmail}
              {...register("contactEmail", {
                required: "Contact Email is required",
              })}
            />
            <Form.Control.Feedback type="invalid">
              {errors.contactEmail?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md={6}>
            <Form.Label>Contact Phone Number</Form.Label>
            <Form.Control
              type="text"
              isInvalid={!!errors.contactPhoneNumber}
              {...register("contactPhoneNumber", {
                required: "Contact phone number is required",
              })}
            />
            <Form.Control.Feedback type="invalid">
              {errors.contactPhoneNumber?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
      </Card.Body>
    </Card>
  );
};
