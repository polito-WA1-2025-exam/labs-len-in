import React, { useState } from 'react';
import { Table, Button, Form, Container, Row, Col, Card } from 'react-bootstrap';
import { Pencil, Trash } from 'react-bootstrap-icons';
import { Bag } from '../../../backend/classes.js';

function BagComponent(props) {
    const item = props.listItem.length === 0 ? "no item" : props.listItem.map((item) => `${item.name}: ${item.quantity}`).join(', ');

    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.isSurprise ? "Yes" : "No"}</td>
            <td>{item}</td>
            <td>{props.price}</td>
            <td>{props.size}</td>
            <td>{props.storeId}</td>
            <td>{props.date}</td>
            <td>{props.status}</td>
            <td>
                <Button variant="warning" className="me-2" onClick={() => {
                    let bag = new Bag(props.id, props.isSurprise, props.listItem, props.price, props.size, props.storeId, props.date, props.status);
                    props.setEditBag(() => bag);
                    props.setMode(() => "edit");
                }}><Pencil /></Button>
                <Button variant="danger" onClick={() => props.delAnswer(props.id)}><Trash /></Button>
            </td>
        </tr>
    );
}

const fakeBags = [
    new Bag(1, true, [{ name: "apple", quantity: 10 }], 100, 'L', 1, "10-08-2024", "reserved"),
    new Bag(2, false, [{ name: "apple", quantity: 10 }], 10, 'S', 2, "11-08-2024", "available"),
    new Bag(3, true, [{ name: "apple", quantity: 10 }], 120, 'S', 3, "12-08-2024", "reserved"),
    new Bag(4, true, [{ name: "apple", quantity: 10 }], 17, 'M', 4, "30-08-2024", "available")
];

export function ViewBags() {
    const [bags, setBags] = useState(fakeBags);
    const [mode, setMode] = useState("view");
    const [editBag, setEditBag] = useState();

    function delAnswer(id) {
        setBags(oldBags => oldBags.filter(bag => bag.id !== id));
    }

    function submitBag(bag) {
        bag.id = bags.length + 1;
        setBags(oldBags => [...oldBags, bag]);
    }

    function updateBag(bag) {
        setBags(oldBags => oldBags.map(oldBag => oldBag.id === bag.id ? bag : oldBag));
    }

    return (
        <Container className="my-4">
            <h1 className="text-center mb-4"> Bags Dashboard</h1>
            {mode === "add" ? (
                <AddForm submitBag={submitBag} setMode={setMode} />
            ) : mode === "edit" ? (
                <EditBag bag={editBag} setMode={setMode} updateBag={updateBag} />
            ) : (
                <ListBags bags={bags} delAnswer={delAnswer} setMode={setMode} setEditBag={setEditBag} />
            )}
        </Container>
    );
}

function ListBags({ bags, delAnswer, setMode, setEditBag }) {
    return (
        <>
            <Table striped bordered hover responsive className="shadow-sm">
                <thead className="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Surprise</th>
                    <th>Items</th>
                    <th>Price</th>
                    <th>Size</th>
                    <th>Store ID</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {bags.map((bag, index) => (
                    <BagComponent key={index} {...bag} delAnswer={delAnswer} setMode={setMode} setEditBag={setEditBag} />
                ))}
                </tbody>
            </Table>
            <div className="d-flex justify-content-end mt-3">
                <Button variant="success" onClick={() => setMode("add")}>➕ Add Bag</Button>
            </div>
        </>
    );
}

function AddForm({ submitBag, setMode }) {
    const [isSurprise, setIsSurprise] = useState(false);
    const [items, setItems] = useState([]);
    const [price, setPrice] = useState(0);
    const [size, setSize] = useState("S");
    const [storeId, setStoreId] = useState(0);
    const [status, setStatus] = useState("available");

    return (
        <>
            <FormBag {...{ isSurprise, setIsSurprise, items, setItems, price, setPrice, size, setSize, status, setStatus, storeId, setStoreId }} />
            <div className="d-flex gap-2">
                <Button variant="primary" onClick={() => {
                    let bag = new Bag(0, isSurprise, items, price, size, storeId, new Date().toLocaleDateString(), status);
                    submitBag(bag);
                    setMode("view");
                }}>💾 Save</Button>
                <Button variant="danger" onClick={() => setMode("view")}>❌ Cancel</Button>
            </div>
        </>
    );
}

function EditBag({ bag, setMode, updateBag }) {
    const [isSurprise, setIsSurprise] = useState(bag.isSurprise);
    const [items, setItems] = useState(bag.listItem);
    const [price, setPrice] = useState(bag.price);
    const [size, setSize] = useState(bag.size);
    const [storeId, setStoreId] = useState(bag.storeId);
    const [status, setStatus] = useState(bag.status);

    return (
        <>
            <FormBag {...{ isSurprise, setIsSurprise, items, setItems, price, setPrice, size, setSize, status, setStatus, storeId, setStoreId }} />
            <div className="d-flex gap-2">
                <Button variant="primary" onClick={() => {
                    let updated = new Bag(bag.id, isSurprise, items, price, size, storeId, bag.date, status);
                    updateBag(updated);
                    setMode("view");
                }}>💾 Update</Button>
                <Button variant="danger" onClick={() => setMode("view")}>❌ Cancel</Button>
            </div>
        </>
    );
}

function FormBag({ isSurprise, setIsSurprise, items, setItems, price, setPrice, size, setSize, status, setStatus, storeId, setStoreId }) {
    return (
        <Card className="mb-4 shadow-sm">
            <Card.Body>
                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Check
                            type="checkbox"
                            label="🎁 Surprise Bag"
                            checked={isSurprise}
                            onChange={(e) => setIsSurprise(e.target.checked)}
                        />
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>📦 Store ID</Form.Label>
                            <Form.Control
                                type="number"
                                value={storeId}
                                onChange={(e) => setStoreId(Number(e.target.value))}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                {!isSurprise && (
                    <>
                        <Form.Label>🛒 Items</Form.Label>
                        {items.map((item, index) => (
                            <Row key={index} className="mb-2">
                                <Col>
                                    <Form.Control
                                        type="text"
                                        placeholder="Item name"
                                        value={item.name}
                                        onChange={(e) => {
                                            const updated = [...items];
                                            updated[index].name = e.target.value;
                                            setItems(updated);
                                        }}
                                    />
                                </Col>
                                <Col>
                                    <Form.Control
                                        type="number"
                                        placeholder="Qty"
                                        value={item.quantity}
                                        onChange={(e) => {
                                            const updated = [...items];
                                            updated[index].quantity = Number(e.target.value);
                                            setItems(updated);
                                        }}
                                    />
                                </Col>
                            </Row>
                        ))}
                        <Button
                            variant="outline-secondary"
                            onClick={() => setItems([...items, { name: "", quantity: 0 }])}
                        >➕ Add Item</Button>
                    </>
                )}

                <Row className="mt-3">
                    <Col md={4}>
                        <Form.Group>
                            <Form.Label>💶 Price</Form.Label>
                            <Form.Control
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(Number(e.target.value))}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Label>📏 Size</Form.Label><br />
                        {['S', 'M', 'L'].map((option) => (
                            <Form.Check
                                key={option}
                                inline
                                type="radio"
                                label={option}
                                name="size"
                                value={option}
                                checked={size === option}
                                onChange={(e) => setSize(e.target.value)}
                            />
                        ))}
                    </Col>
                    <Col md={4}>
                        <Form.Label>📝 Status</Form.Label><br />
                        {['available', 'reserved'].map((option) => (
                            <Form.Check
                                key={option}
                                inline
                                type="radio"
                                label={option}
                                name="status"
                                value={option}
                                checked={status === option}
                                onChange={(e) => setStatus(e.target.value)}
                            />
                        ))}
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}
