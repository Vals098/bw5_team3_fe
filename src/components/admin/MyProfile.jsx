import React, { useState, useEffect } from "react"
import {
  Card,
  Form,
  Button,
  Spinner,
  Alert,
  Row,
  Col,
  Modal,
} from "react-bootstrap"

const MyProfile = () => {
  const [profile, setProfile] = useState({
    avatar: "",
    name: "",
    surname: "",
    email: "",
    username: "",
    roles: [],
  })

  const [loading, setLoading] = useState(true)
  const [status, setStatus] = useState(null)

  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [passwordStatus, setPasswordStatus] = useState(null)

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
  })

  const token = localStorage.getItem("token")
  const API_URL = "http://localhost:8080/employees/me"

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setProfile(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(API_URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: profile.name,
          surname: profile.surname,
          username: profile.username,
          email: profile.email,
        }),
      })

      if (!response.ok) {
        const error = await response.json()

        throw {
          message: error.message,
          errors: error.errors,
        }
      }

      const updatedProfile = await response.json()
      setProfile(updatedProfile)

      setStatus({
        type: "success",
        msg: "Profile updated successfully.",
      })
    } catch (error) {
      setStatus({
        type: "danger",
        msg: error.errors ?? [error.message],
      })
    }
  }

  const handlePasswordChange = async () => {
    try {
      const response = await fetch(`${API_URL}/password`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(passwordData),
      })

      if (!response.ok) {
        const error = await response.json()

        throw {
          message: error.message,
          errors: error.errors,
        }
      }

      const result = await response.json()

      setPasswordStatus({
        type: "success",
        msg: result.message,
      })

      setPasswordData({
        currentPassword: "",
        newPassword: "",
      })

      setShowPasswordModal(false)
    } catch (error) {
      setPasswordStatus({
        type: "danger",
        msg: error.errors ?? [error.message],
      })
    }
  }

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    )
  }

  return (
    <>
      <Card className="shadow-sm">
        <Card.Header as="h5" className="bg-primary text-white">
          MY PROFILE
        </Card.Header>

        <Card.Body>
          {status && (
            <Alert variant={status.type}>
              {Array.isArray(status.msg)
                ? status.msg.map((err, index) => <div key={index}>• {err}</div>)
                : status.msg}
            </Alert>
          )}

          <div className="text-center mb-4">
            <img
              src={profile.avatar || "https://via.placeholder.com/150"}
              alt="Avatar"
              className="rounded-circle border"
              width={150}
              height={150}
            />

            <div className="mt-3">
              <Button variant="outline-primary">Change Avatar</Button>
            </div>
          </div>

          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={profile.name}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        name: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Surname</Form.Label>
                  <Form.Control
                    type="text"
                    value={profile.surname}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        surname: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={profile.username}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    username: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={profile.email}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    email: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                value={profile.roles?.map((role) => role.role).join(", ")}
                disabled
              />
            </Form.Group>

            <div className="d-flex justify-content-between">
              <Button
                type="button"
                variant="outline-secondary"
                onClick={() => setShowPasswordModal(true)}
              >
                Change Password
              </Button>

              <Button type="submit" variant="primary">
                Save Changes
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>

      <Modal
        show={showPasswordModal}
        onHide={() => setShowPasswordModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>

        <Modal.Body>
           {passwordStatus && (
            <Alert variant={passwordStatus.type}>
              {Array.isArray(passwordStatus.msg)
                ? passwordStatus.msg.map((err, index) => <div key={index}>• {err}</div>)
                : passwordStatus.msg}
            </Alert>
          )}

          <Form.Group className="mb-3">
            <Form.Label>Current Password</Form.Label>
            <Form.Control
              type="password"
              value={passwordData.currentPassword}
              onChange={(e) =>
                setPasswordData({
                  ...passwordData,
                  currentPassword: e.target.value,
                })
              }
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="password"
              value={passwordData.newPassword}
              onChange={(e) =>
                setPasswordData({
                  ...passwordData,
                  newPassword: e.target.value,
                })
              }
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowPasswordModal(false)}
          >
            Cancel
          </Button>

          <Button variant="primary" onClick={handlePasswordChange}>
            Save Password
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default MyProfile
