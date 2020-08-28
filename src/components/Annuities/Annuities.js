import React, { Fragment } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Annuities = () => {
  return (
    <Fragment>
      <h2>Present Value Calculator</h2>
      <Form>
        <Form.Group controlId="amount">
          <Form.Label>Amount per Payment</Form.Label>
          <Form.Control 
            required
            type="number"
            name="amount"
          />
        </Form.Group>
        <Form.Group controlId="duration">
          <Form.Label>Number of Payments</Form.Label>
          <Form.Control 
            required
            type="number"
            name="duration"
          />
        </Form.Group>
        <Form.Group controlId="rate">
          <Form.Label>Interest Rate</Form.Label>
          <Form.Control 
            required
            type="number"
            name="rate"
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </Fragment>
  )
}

export default Annuities
