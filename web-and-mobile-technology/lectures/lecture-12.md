<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021537235622e6ad184bd2%2Fcrop_1_1776276957804.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=fL75yIASIxXfgu1tO1vfdgwhi3Q%3D&Expires=1776881757' alt='OCR图片'/></div>

## SE2020-Web Technologies and Mobile Lecture 12

## NoSQL and MongoDB

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021537235622e6ad184bd2%2Fcrop_2_1776276957894.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=9ZFz7mJX23%2BI0U6UyLX4t8j2aGY%3D&Expires=1776881757' alt='OCR图片'/></div>

## Agenda

Fundamental of NoSQL

CAP Theorem

Different types of NoSQL DB

Introduction to MongoDB

Integrate MongoDB with Express

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021537235622e6ad184bd2%2Fcrop_1_1776276957901.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=iunfm2bkWBlAp5qA13ixC8SoQ6M%3D&Expires=1776881757' alt='OCR图片'/></div>

## Fundamental of NoSQL

- NoSQL (Not Only SQL) is a modern database approach that differs from traditional relational database systems.

- It is designed to store, retrieve, and manage large volumes of unstructured, semi-structured, or rapidly changing data efficiently.

- Unlike relational databases that rely on fixed schemas and tables, NoSQL databases offer flexibility, scalability, and high performance for modern, data-intensive applications such as social networks, IoT systems, and real-time analytics.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021537235622e6ad184bd2%2Fcrop_1_1776276957923.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=EuQSRmnQ7eNSTF4Ly%2Fg1GgSqIWQ%3D&Expires=1776881757' alt='OCR图片'/></div>

## NoSQL vs Relational DB

<table border="1"><tr><td></td><td>Relational Databases</td><td>Non-Relational Databases</td></tr><tr><td>Structure</td><td>Structured, with defined relationships between tables</td><td>Flexible, allowing for dynamic and changing data structures</td></tr><tr><td>Query Language</td><td>Uses SQL for querying data</td><td>Uses various querying languages, including JSON and BSON</td></tr><tr><td>Data Consistency</td><td>Enforces strict data consistency rules</td><td>Often prioritizes availability and partition tolerance over consistency</td></tr><tr><td>Popularity</td><td>Widely used and has a long history in the tech industry</td><td>Gained popularity with the rise of big data and modern web applications</td></tr><tr><td>Transactions and Operations</td><td>Well-suited for complex transactions and operations</td><td>Often faster and more scalable than relational databases</td></tr><tr><td>Purpose</td><td>Best suited for structured data and complex queries</td><td>Best suited for unstructured data and high scalability</td></tr><tr><td>Scalability</td><td>Vertical scaling is more common, but limited</td><td>Horizontal scaling is more common, and highly scalable</td></tr><tr><td>Examples</td><td>MySQL, Oracle, Microsoft SQL Server</td><td>MongoDB, Cassandra, Couchbase</td></tr><tr><td>Data Volume</td><td>Good for small to medium data volumes</td><td>Good for large data volumes</td></tr><tr><td>Cost</td><td>Relatively expensive</td><td>Relatively cheap</td></tr><tr><td>Use Cases</td><td>Financial institutions, transactional systems, inventory management</td><td>Big data, IoT, content management, cloud computing</td></tr></table>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021537235622e6ad184bd2%2Fcrop_1_1776276957942.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=LaO%2B%2F8dZMwrS455god98scu%2F6Mw%3D&Expires=1776881757' alt='OCR图片'/></div>

## NoSQL vs Relational DB-Real world example

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021537235622e6ad184bd2%2Fcrop_1_1776276957949.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=qri25jg53oDg0xZkomv2pYza8FY%3D&Expires=1776881757' alt='OCR图片'/></div>

In a relational database, a book record is often dissembled (or "normalized") and stored in separate tables, and relationships are defined by primary and foreign key constraints. In this example, the Books table has columns for ISBN, Book Title, and Edition Number, the Authors table has columns for AuthorID and Author Name, and finally, the Author-ISBN table has columns for AuthorID and ISBN. The relational model is designed to enable the database to enforce referential integrity between tables in the database, normalized to reduce the redundancy, and generally optimized for storage.

In a NoSQL database, a book record is usually stored as a JSON document. For each book, the item, ISBN, Book Title, Edition Number, Author Name, and AuthorID are stored as attributes in a single document. In this model, data is optimized for intuitive development and horizontal scalability.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021537235622e6ad184bd2%2Fcrop_2_1776276957967.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=b1XjXeEFP%2F7J9%2B5tUfb185D2Yi0%3D&Expires=1776881757' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021537235622e6ad184bd2%2Fcrop_3_1776276957977.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=UCajZUupEW4HeFW4h6dWgmyKIb8%3D&Expires=1776881757' alt='OCR图片'/></div>

## NoSQL-Key Characteristics

- Schema-less Structure - Data can be stored without predefined tables or columns, allowing flexibility.

- Horizontal Scalability - Supports easy expansion by adding more servers instead of upgrading existing hardware.

- High Performance - Optimized for fast read/write operations and low latency.

- Flexible Data Models - Supports multiple data types such as document, key-value, column, and graph.

- Distributed and Fault-Tolerant - Built to operate efficiently across multiple nodes with automatic replication and recovery.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021537235622e6ad184bd2%2Fcrop_1_1776276957985.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=iVggQFpZ3UbLhouKEsVmjnMEliU%3D&Expires=1776881757' alt='OCR图片'/></div>

## Types of NoSQL

- Document Based Databases

- Key-value Stores

- Graph Databases

- Column Family Stores

- In-memory

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021537235622e6ad184bd2%2Fcrop_1_1776276957995.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=baqljJHJB6HkCFQAuExDfXLU2WA%3D&Expires=1776881758' alt='OCR图片'/></div>

## Document Based Databases

- Document databases store data in structured documents usually in JSON, BSON, or XML format, rather than rows and columns.

- Each document contains key-value pairs and can have a flexible structure, allowing different documents in the same collection to have different fields.

- Schema-less design — no need for a fixed table schema.

- Hierarchical data storage format supports nested structures.

- Easy mapping between application objects and database records.

- Example: MongoDB, CouchDB, Firebase FireStore

{

  "product_id": "P001",

  "name": "Wireless Mouse",

  "price": 1200,

  "features": ["Bluetooth", "Rechargeable", "Ergonomic"],

  "stock": 40

}

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021537235622e6ad184bd2%2Fcrop_1_1776276958002.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=WNY84GY3mKOooQNmK9v4a3HESdg%3D&Expires=1776881758' alt='OCR图片'/></div>

## Key Value Stores

- Key-Value databases are the simplest type of NoSQL databases.

- Data is stored as a collection of key-value pairs, where a unique key is used to retrieve a corresponding value.

- The value can be a string, JSON object, or binary data.

- Extremely fast read/write operations.

- Ideal for caching and session management.

- Highly scalable and distributed by design.

- Simple data model, making it easy to implement.

- Example: Redis, Amazon DynamoDB, Riak

<table border="1"><tr><td>Key</td><td>Value</td></tr><tr><td>user123</td><td>{"name":“Sanduni”，"email":“sanduni@gmail.com”}</td></tr><tr><td>session456</td><td>{"token":“abc123xyz”，"expires":“2025-10-29T10:00:00Z”}</td></tr></table>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021537235622e6ad184bd2%2Fcrop_1_1776276958154.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=dPV1rp7xrelfnWTf57EuLc%2B9Hnc%3D&Expires=1776881758' alt='OCR图片'/></div>

## Column Family Databases

- Column-family databases (also known as wide-column stores) organize data into columns and column families rather than rows and tables.

- Each column family contains rows identified by a key, but each row can have a different set of columns.

- This makes them efficient for analytical queries and handling large, sparse datasets.

- Optimized for high-performance read/write of large datasets.

- Example: Apache Cassandra, HBase, ScyllaDB

<table border="1"><tr><td></td><td colspan="5">company</td></tr><tr><td rowspan="5">1</td><td>name</td><td colspan="2">address</td><td colspan="2">website</td></tr><tr><td rowspan="4">DataX</td><td>city</td><td>San Francisco</td><td>protocol</td><td>https</td></tr><tr><td>state</td><td>California</td><td>domain</td><td>datax.com</td></tr><tr><td>street num</td><td>135</td><td>subdomain</td><td>www</td></tr><tr><td>street</td><td>Kearny St</td><td colspan="2"></td></tr><tr><td rowspan="4">2</td><td rowspan="4">Process-One</td><td>city</td><td>Arlington</td><td>protocol</td><td>https</td></tr><tr><td>state</td><td>Virginia</td><td>domain</td><td>process1.com</td></tr><tr><td>street num</td><td>3500</td><td>subdomain</td><td>www</td></tr><tr><td>street</td><td>Wilson St</td><td colspan="2"></td></tr></table>

row key

column family

super column family

column

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021537235622e6ad184bd2%2Fcrop_1_1776276958165.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=uKXATJwmycrvgbXx3AiFssWqYTw%3D&Expires=1776881758' alt='OCR图片'/></div>

## Graph Databases

- Graph databases store data in nodes (entities) and edges (relationships), making them ideal for representing highly connected data.

- Each node and edge can have attributes that describe entities and their relationships.

- Graph databases use query languages such as Cypher (Neo4j) or Gremlin to explore relationships efficiently.

- Designed for relationship-heavy data and intuitive visualization of data relationships.

- Example: Neo4j, Amazon Neptune, ArangoDB

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021537235622e6ad184bd2%2Fcrop_1_1776276958171.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=nolO6pCFFDimMptxXS1COvjMuos%3D&Expires=1776881758' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021537235622e6ad184bd2%2Fcrop_2_1776276958181.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=tHuZ%2BhJnkVHIkNwMcMDe9DBqjSc%3D&Expires=1776881758' alt='OCR图片'/></div>

## Exercise:

Discuss the advantages and limitations of NoSQL databases?

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021537235622e6ad184bd2%2Fcrop_1_1776276958215.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=4Z98BurTPeE15H%2FFE%2BU4aUclSNA%3D&Expires=1776881758' alt='OCR图片'/></div>

## CAP Theorem

It explains the trade-offs in distributed databases. It states that a distributed system can only guarantee two out of the three properties

- Consistency - Every read receives the most recent write (all nodes see the same data at the same time).

- Availability - Every request receives a response (even if some nodes are down).

- Partition Tolerance - The system continues to function even if communication between some nodes fails or is delayed (network partition).

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021537235622e6ad184bd2%2Fcrop_1_1776276958223.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=fekWEGkmXoLAYsdjbssCPHSemOk%3D&Expires=1776881758' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021537235622e6ad184bd2%2Fcrop_2_1776276958230.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=ewr8te3QIMIbPlrSwJ9%2F9HVnSg0%3D&Expires=1776881758' alt='OCR图片'/></div>

## MongoDB

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021537235622e6ad184bd2%2Fcrop_1_1776276958239.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=1rAYNN4Ny6v0a7LwepGg3t5848c%3D&Expires=1776881758' alt='OCR图片'/></div>

- MongoDB is a popular NoSQL, document-oriented database system designed to store and manage large volumes of data in a flexible, scalable, and high-performance manner.

- It uses JSON-like documents (BSON-Binary JSON) to store data, making it ideal for modern applications that handle unstructured or semi-structured information.

- MongoDB was developed by MongoDB Inc. and first released in 2009 and has become one of the most widely used NoSQL databases in the world.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021537235622e6ad184bd2%2Fcrop_2_1776276958248.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=D59tOJNdIykzMBjisljfWYvJRMs%3D&Expires=1776881758' alt='OCR图片'/></div>

## MongoDB-Key Characteristics

- Document-Oriented Storage. Data is stored in documents (similar to JSON objects) instead of rows and columns. Each document represents a record and contains key-value pairs.

- Schema-Less Design. Documents in the same collection can have different structures. Ideal for rapidly evolving applications.

- High Scalability. Supports horizontal scaling through sharding, distributing data across multiple servers.

- High Availability. Achieved through replication (Replica Sets) multiple copies of data ensure fault tolerance.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021537235622e6ad184bd2%2Fcrop_1_1776276958254.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=qbNQmbM0%2FdZi7JF7wRx46DxMgeI%3D&Expires=1776881758' alt='OCR图片'/></div>

## MongoDB-Data Structure

<table border="1"><tr><td>Level</td><td>Description</td><td>Example</td></tr><tr><td>Database</td><td>Highest level container for collections.</td><td>UniversityDB</td></tr><tr><td>Collection</td><td>Group of related documents(like a table in RDBMS)</td><td>Students</td></tr><tr><td>Document</td><td>Individual record stored in JSON/BSON format</td><td>{“name”:“Sanduni”,“age”:27}</td></tr><tr><td>Field</td><td>Key-value pair inside a document</td><td>“name”:“Sanduni”</td></tr></table>

## MongoDB-Common Operations

<table border="1"><tr><td>Operation</td><td>Description</td><td>Example (MQL)</td></tr><tr><td>Insert</td><td>Add a new document</td><td>db.students.insertOne({name:“Sanduni”，age:25})</td></tr><tr><td>Find</td><td>Retrieve documents</td><td>db.students.find({city:“Wattala”})</td></tr><tr><td>Update</td><td>Modify existing document</td><td>db.students.updateOne({name:“Sanduni”},{$set:{age:26})</td></tr><tr><td>Delete</td><td>Remove a document</td><td>db.students.deleteOne({name:“Sanduni”})</td></tr></table>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021537235622e6ad184bd2%2Fcrop_1_1776276958261.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=b0tdh%2FZQeg7FC5j%2Bw%2B88ByExmG4%3D&Expires=1776881758' alt='OCR图片'/></div>

## Tutorial- Connecting MongoDB with Backend Server

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021537235622e6ad184bd2%2Fcrop_1_1776276958266.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=qc1kbYOe8ppl6N2YicFawzuJxMw%3D&Expires=1776881758' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021537235622e6ad184bd2%2Fcrop_1_1776276958274.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=NnKddWQS3LywD8dd8Bpx0wX70r4%3D&Expires=1776881758' alt='OCR图片'/></div>

## Thank You

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021537235622e6ad184bd2%2Fcrop_2_1776276958280.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=qDqw9qZkzV6DxRiZqXit%2FkoOoQU%3D&Expires=1776881758' alt='OCR图片'/></div>