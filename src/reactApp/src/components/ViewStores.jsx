import React from 'react';

function CardItem({ item }) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Item</h5>
                <p className="card-text">{item}</p>
            </div>
        </div>
    );
}

export function ViewStores({ items }) {
    return (
        <div className="container py-4">
            <h1 className="mb-4">Stores</h1>
            <div className="d-flex flex-column gap-3">
                {items.map((item, index) => (
                    <CardItem key={index} item={item} />
                ))}
            </div>
        </div>
    );
}