import React from 'react'
import { Modal, Button } from 'react-bootstrap'

function InventoryModel({ show, handleClose, data }) {
    console.log(data)
    if (data?.shopItems && data?.shopItems.length > 0)
        return (
            <Modal show={show} onHide={handleClose} size='xl' centered>
                <Modal.Header closeButton>
                    <Modal.Title>{data.shopName}'Inventory</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        data.shopItems.map((item, i) => (
                            <h4>{i + 1}.{item.itemName}</h4>
                        ))
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        )
}

export default InventoryModel
