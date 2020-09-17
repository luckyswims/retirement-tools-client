import React, { Fragment, useState } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { pv } from '../../api/annuities'

const Annuities = () => {
  const [amount, setAmount] = useState()
  const [duration, setDuration] = useState()
  const [rateType, setRateType] = useState()
  const [rate, setRate] = useState()
  const [rate2, setRate2] = useState()
  const [rate3, setRate3] = useState()
  const [result, setResult] = useState()
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
      case "rate2":
        setRate2(Number(event.target.value))
        break
      case "rate3":
        setRate3(Number(event.target.value))
        break
    }
  }
  const onClick = event => {
    setRateType(event.target.value)
  }
  const onSubmit = event => {
    event.preventDefault()
    let rates
    if (rateType === 'single') {
      rates = rate
    } else if (rateType === 'PPA') {
      rates = [rate, rate2, rate3]
    }
    const data = {
      annuities: [{
        amount,
        duration,
        rates: rate
      }]
    }
    pv(data)
      .then(res => setResult(res.data))
  }
  let ratesForm
  if (rateType === 'single') {
    ratesForm = (
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
    )
  } else if (rateType === 'PPA') {
    ratesForm = (
      <Fragment>
        <Form.Group controlId="rate">
          <Form.Label>First Rate</Form.Label>
          <Form.Control 
            required
            type="number"
            step="0.01"
            name="rate"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="rate2">
          <Form.Label>Second Rate</Form.Label>
          <Form.Control 
            required
            type="number"
            step="0.01"
            name="rate2"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="rate3">
          <Form.Label>Third Rate</Form.Label>
          <Form.Control 
            required
            type="number"
            step="0.01"
            name="rate3"
            onChange={handleChange}
          />
        </Form.Group>
      </Fragment>
    )
  }
  let resultMessage
  if (result !== undefined) {
    const { amount, duration, rates } = result.annuities[0]
    resultMessage = <p>The present value of an annuity of {amount} per payment for {duration} payments, assuming {rates * 100}% interest, is {result.value}.</p>
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
        <Form.Group controlId="single">
          <Form.Label>Single Rate</Form.Label>
          <Form.Control
            type="radio"
            name="rateType"
            value="single"
            onClick={onClick}
          />
        </Form.Group>
        <Form.Group controlId="PPA">
          <Form.Label>PPA Rates</Form.Label>
          <Form.Control
            type="radio"
            name="rateType"
            value="PPA"
            onClick={onClick}
          />
        </Form.Group>
        {ratesForm}
        <Button
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
      {resultMessage}
    </Fragment>
  )
}

export default Annuities
