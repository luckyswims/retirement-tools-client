import React, { Fragment, useState } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { pv } from '../../api/annuities'

const Annuities = () => {
  const [amount, setAmount] = useState()
  const [duration, setDuration] = useState()
  const [rate, setRate] = useState()
  const handleChange = event => {
    switch (event.target.name) {
      case "amount":
        setAmount(Number(event.target.value))
        break
      case "duration":
        setDuration(Number(event.target.value))
        break
      case "rate":
        setRate(Number(event.target.value))
        break
    }
  }
  const onSubmit = event => {
    event.preventDefault()
    const data = {
      annuity: {
        amount,
        duration,
        rates: rate
      }
    }
    console.log(data)
    pv(data)
  }
  return (
    <Fragment>
      <h2>Present Value Calculator</h2>
      <Form onSubmit={onSubmit}>
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
            step="0.01"
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
