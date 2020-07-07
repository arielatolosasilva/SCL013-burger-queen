import React, { Component } from 'react';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle , CardLink} from 'reactstrap';


class CardsIncomingOrders extends Component {
	render() {
		return (
			<div>
        <h1>Chef</h1>
        <h2> Pedidos entrantes</h2>

    <Card style={{ width: '25rem' }}>
  <CardBody>
    <CardTitle>Card Title</CardTitle>
    <CardSubtitle className="mb-2 text-muted">Card Subtitle</CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </CardText>
    <CardLink href="#">Card Link</CardLink>
    <CardLink href="#">Another Link</CardLink>
  </CardBody>
</Card>
    </div>
		)
	}
}

export default CardsIncomingOrders
