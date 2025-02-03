import { Form } from "semantic-ui-react";

export function AddressForm(props) {
  const { onClose } = props;
  return (
    <Form >
      <Form.Input name="title" placeholder="Titulo de la dirección" />
      
      <Form.Group widths="equal">
        <Form.Input name="name" placeholder="Nombre y apellidos" />
        <Form.Input name="address" placeholder="Dirección" />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input name="state" placeholder="Provincia" />
        <Form.Input name="city" placeholder="Ciudad" />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input name="postal_code" placeholder="Codigo postal" />
        <Form.Input name="phone" placeholder="Telefono" />
      </Form.Group>

      <Form.Button type="submit" fluid >
        Enviar
      </Form.Button>
    </Form>
  )
}
