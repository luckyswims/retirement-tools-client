import React, { Fragment, useState } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Annuities = () => {
  const [amount, setAmount] = useState()
  const [duration, setDuration] = useState()
  const [rate, setRate] = useState()
  const handleChange = event => {
    switch (event.target.name) {
      case "amount":
        setAmount(event.target.value)
        break
      case "duration":
        setDuration(event.target.value)
        break
      case "rate":
        setRate(event.target.value)
        break
    }
  }
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
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="duration">
          <Form.Label>Number of Payments</Form.Label>
          <Form.Control 
            required
            type="number"
            name="duration"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="rate">
          <Form.Label>Interest Rate</Form.Label>
          <Form.Control 
            required
            type="number"
            name="rate"
            onChange={handleChange}
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
