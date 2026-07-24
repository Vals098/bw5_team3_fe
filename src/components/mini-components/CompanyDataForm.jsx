import { Form, Row, Col, Card } from "react-bootstrap";
import { useFormContext } from "react-hook-form";

export const CompanyDataForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Header className="bg-info text-white">
        <h5 className="mb-0">Company Data</h5>
      </Card.Header>
      <Card.Body>
        <Row className="g-3">
          <Form.Group as={Col} md={5}>
            <Form.Label>Legal Name*</Form.Label>
            <Form.Control
              type="text"
              isInvalid={!!errors.legalName}
              {...register("legalName", {
                required: "Legal name is required",
              })}
            />
            <Form.Control.Feedback type="invalid">
              {errors.legalName?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md={2}>
            <Form.Label>Client Type*</Form.Label>
            <Form.Select {...register("clientType")}>
              <option value="PA">PA</option>
              <option value="SAS">SAS</option>
              <option value="SPA">SPA</option>
              <option value="SRL">SRL</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} md={5}>
            <Form.Label>VAT</Form.Label>
            <Form.Control
              type="text"
              isInvalid={!!errors.iva}
              {...register("iva", {
                required: "VAT is required",
                pattern: {
                  value: /^\d{11}$/,
                  message: "VAT must contain 11 numbers",
                },
              })}
            />
            <Form.Control.Feedback type="invalid">
              {errors.iva?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md={6}>
            <Form.Label>Company Email</Form.Label>
            <Form.Control
              type="email"
              isInvalid={!!errors.email}
              {...register("email", {
                required: "Company email is required",
              })}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md={6}>
            <Form.Label>PEC</Form.Label>
            <Form.Control type="email" {...register("pec")} />
          </Form.Group>

          <Form.Group as={Col} md={6}>
            <Form.Label>Company number</Form.Label>
            <Form.Control
              type="text"
              isInvalid={!!errors.phoneNumber}
              {...register("phoneNumber", {
                required: "Company number is required",
              })}
            />
            <Form.Control.Feedback type="invalid">
              {errors.phoneNumber?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md={6}>
            <Form.Label>Yearly Income</Form.Label>
            <Form.Control
              type="number"
              step="0.01"
              isInvalid={!!errors.yearlyIncome}
              {...register("yearlyIncome", {
                required: "Yearly income is required",
                min: 0,
              })}
            />
            <Form.Control.Feedback type="invalid">
              {errors.yearlyIncome?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
      </Card.Body>
    </Card>
  );
};
