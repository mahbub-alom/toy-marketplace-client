/* eslint-disable no-unused-vars */
import React from "react";
import useTitle from "../../../hooks/useTitle";

const Blog = () => {
    useTitle('Blog')
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 m-3">
        <div className="border rounded-md p-4 m-4">
          <h2 className="text-blue-300 text-2xl">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h2>
          <p>
            <span className="text-orange-400">Access Token:</span> An access
            token is a credential that is used to access protected resources on
            a server. It is typically issued by an authentication server (e.g.,
            through OAuth 2.0) after a user successfully authenticates and
            authorizes an application to access their data. <br />{" "}
            <span className="text-orange-400">Refresh Token:</span> A refresh
            token is also issued during the authentication process and is used
            to obtain a new access token when the current access token expires.
            Access tokens usually have a limited lifespan for security reasons
          </p>
          <p>
            {" "}
            <span className="text-orange-400">works:</span>
            The client application authenticates the user and receives an access
            token and a refresh token. The client includes the access token in
            the request headers when making API calls to the server to access
            protected resources. If the access token expires, the client can
            send the refresh token to the server. The server verifies the
            refresh token and, if valid, issues a new access token. The client
            can now use the new access token to continue accessing protected
            resources.
          </p>
          <p>
            <span className="text-orange-300">Protect:</span> Should be stored
            in a secure storage mechanism, such as an HTTP-only secure cookie or
            a secure storage solution provided by the operating system or the
            development framework
          </p>
        </div>
        <div className="border rounded-md p-4 m-4">
          <h2 className="text-blue-300 text-2xl">
            Compare SQL and NoSQL databases?
          </h2>
          <p>
            <span className="text-orange-400">SQL:</span> SQL is still widely
            used for querying relational databases, where data is stored in rows
            and tables that are linked in various ways. One table record may
            link to one other or to many others, or many table records may be
            related to many records in another table. These relational
            databases, which offer fast data storage and recovery, can handle
            great amounts of data and complex SQL queries.
          </p>
          <p>
            <span className="text-orange-400">NoSQL:</span> NoSQL is a
            non-relational database, meaning it allows different structures than
            a SQL database and more flexibility to use a format that best fits
            the data. The term “NoSQL” was not coined until the early 2000s. It
            doesn&apos;t mean the systems don&apos;t use SQL, as NoSQL databases
            do sometimes support some SQL commands.
          </p>
        </div>
        <div className="border rounded-md p-4 m-4">
          <h2 className="text-blue-300 text-2xl">
            What is express js? What is Next JS?
          </h2>
          <p>
            <span className="text-orange-400">Express js:</span> Express.js is a
            minimalist web application framework for Node.js. It provides a
            simple, unopinionated, and flexible set of features for building web
            applications and APIs. Express.js allows developers to handle HTTP
            requests, define routes, manage middleware, and interact with
            databases. It provides a lightweight and flexible foundation,
            enabling developers to build applications with their preferred tools
            and libraries. Express.js is known for its simplicity, speed, and
            extensive ecosystem of middleware and plugins.
          </p>
          <p>
            <span className="text-orange-400">Next js:</span> Nest.js is a
            progressive, opinionated, and full-featured web framework for
            building scalable and maintainable server-side applications. It is
            built on top of Express.js and enhances it with additional features
            inspired by Angular, a popular JavaScript framework for building
            client-side applications. Nest.js adopts the concept of modules,
            dependency injection, decorators, and TypeScript to provide a
            structured and organized development experience. It promotes the use
            of architectural patterns like MVC (Model-View-Controller) or, more
            specifically, the layered architecture.
          </p>
        </div>
        <div className="border rounded-md p-4 m-4">
          <h2 className="text-blue-300 text-2xl">
            What is MongoDB aggregate and how does it work ?
          </h2>
          <p>
            MongoDB Aggregate is used to process the data or records and return
            the combined output as a result. Aggregate operation in MongoDB will
            be used to group the values from the multiple documents with each
            other. After the grouping of values, it will perform various
            operations on grouped data and then return the combined single
            result as output. MongoDB aggregate is significant and useful in
            MongoDB to return a single result of data from multiple documents.
            MongoDB aggregate is similar to the count (*) with the group by
            function in SQL language it will continue similar work in MongoDB.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
