import React from 'react';
import SingleCard from './SingleCard';

const Table = () => {
    return (
        <section className="list_document_resource_main">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="list_document_items_area">
                            <SingleCard />
                            <SingleCard />
                            <SingleCard />
                            <SingleCard />
                            <SingleCard />
                            <SingleCard />
                            <SingleCard />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Table;