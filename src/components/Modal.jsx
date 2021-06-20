import React from "react";
import { Button, Image, Modal } from "semantic-ui-react";
import Card from "./card";

function ModalRobot(props) {
  const [open, setOpen] = React.useState(false);
  const linkImg = "https://robohash.org/";

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Card
          id={props.id}
          avatar={linkImg + props.id}
          key={props.id}
          nom={props.name}
          mail={props.email}
        />
      }
    >
      <Modal.Content className="container--modal" image>
        <Image size="medium" src={linkImg + props.id} wrapped />
        <Modal.Description>
          <h2 className="h2--robot"> Nom : {props.name}</h2>
          <p className="para"> Surnom : {props.username}</p>
          <p className="para"> Adress mail : {props.email} </p>
          <p className="para"> Téléphone : {props.phone} </p>
          <p className="para"> Portfolio : {props.website} </p>
          <p className="para"> Adresse : {props.address.street} {props.address.suite}</p>
          <p className="para"> Compagnie : {props.company.name} </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Fermer
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalRobot;
