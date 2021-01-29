[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<br />
<p align="center">
<h3 align="center">Expressive</h3>

<p align="center">
  Build structured backend apps with express.js without caring about asynchronous code execution and error management.
  <br />
  <br />
  <a href="https://github.com/corentind59/expressive/issues">Report Bug</a>
  ·
  <a href="https://github.com/corentind59/expressive/issues">Request Feature</a>
</p>

<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#basic-usage">Basic usage</a></li>
      </ul>
    </li>
    <li>
      <a href="#development">Development</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#build">Build</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

During development phase of a Node.js + Express project, I'm constantly questioning the file structure of
the project and links between different domains of the application. Also, I'm often in trouble
when it comes to split responsibilities across many files while trying to keep things simple
and stupid. Add to this asynchronous code handling and exception management, and you get the
portrait.

I needed a robust solution that meets all these requirements while hiding boilerplate code : 
**Expressive** was born.

Expressive is a tiny package, exposing an **Express middleware** and some **helper functions**
that ensure that :

- *Routers* and *controllers* are two well-defined components of the app, each one having
different responsibilities ;
- Asynchronous code handling is as simple as making your controller returning a `Promise` ;
- Error handling is enhanced with standard HTTP exception catching.

### Built With

* [Node.js](https://nodejs.org)
* [Yarn](https://yarnpkg.com)
* [TypeScript](https://www.typescriptlang.org)

## Getting Started

### Installation

Install the package by running :

```shell
npm install @corentind/expressive
```

or using Yarn :

````shell
yarn add @corentind/expressive
````

### Basic usage

The code snippet below shows a basic example of how to use expressive with express.

```javascript
import express from 'express';
import expressive, { handle, Ok, NotFound } from '@corentind/expressive'

// Here is your service layer
import { getById } from './service';

// Controller doesn't know about req or res objects.
async function getTodoById(id) {
    try {
        
        // Asynchronous handling made easy
        const todo = await getById(id);
        
        // Returns a JavaScript literal as a JSON object with 200 status code
        return new Ok(todo);
    } catch (e) {
        
        // Exception handling can be done exhaustively here.
        if (e.name === 'NotFoundError') {
            
            // Standard error format for simpler API contract
            throw new NotFound({
              code: 'todo-not-found',
              message: `Todo with ID ${id} could not been found`
            });
        }
        
        // Expressive will catch any unhandled error, log it and return a 500 error to the client
        throw e;
    }
}

const app = express();

// `handle` allows expressive to correctly process the asynchronous controller
app.get('/todos/:id', handle(({ params: { id } }) => getTodoById(id)));

// `expressive` middleware is the brain of the lib
app.use(expressive());

app.listen(process.env.PORT || 3000);
```

_For more examples, please refer to the [Documentation (WIP)](https://example.com)_

## Development

### Installation

1. Clone the repo
```shell
git clone https://github.com/corentind59/expressive.git
```

2. Install NPM packages with Yarn
```shell
yarn
```

### Build

```shell
yarn build
```

The project output will be generated in the `dist` folder.

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any
contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Corentin Delannoy - corentin.delannoy2@gmail.com

Project Link: [https://github.com/corentind59/expressive](https://github.com/corentind59/expressive)

[contributors-shield]: https://img.shields.io/github/contributors/corentind59/expressive.svg?style=for-the-badge

[contributors-url]: https://github.com/corentind59/expressive/graphs/contributors

[forks-shield]: https://img.shields.io/github/forks/corentind59/expressive.svg?style=for-the-badge

[forks-url]: https://github.com/corentind59/expressive/network/members

[stars-shield]: https://img.shields.io/github/stars/corentind59/expressive.svg?style=for-the-badge

[stars-url]: https://github.com/corentind59/expressive/stargazers

[issues-shield]: https://img.shields.io/github/issues/corentind59/expressive.svg?style=for-the-badge

[issues-url]: https://github.com/corentind59/expressive/issues

[license-shield]: https://img.shields.io/github/license/corentind59/expressive.svg?style=for-the-badge

[license-url]: https://github.com/corentind59/expressive/blob/master/LICENSE
