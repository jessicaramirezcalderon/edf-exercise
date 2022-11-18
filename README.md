# edf-exercise

This application showcases how to make API requests server and client-side. For each API requests, responses are cached for 30 seconds and reused if there are future requests (e.g. due to a page reload). In addition, the client side refreshes at 1-minute intervals to refresh the data returned from the client-side API.

NOTE: Because this application is not deployed to a real host and is instead intended to be run on a local machine, the IP address is not propagated locally. For a client IP address to be propagated, an ISP has to forward the originating IP address to the remote server. As a result, locally the response is rate limited because it's a localhost based IP.

## Installation

To set up this application, you must have Node.js installed on your machine. To learn more about how you can install Node.js, visit the official Node.js website [here](https://nodejs.org/en/).

Once you have Node.js installed and you have cloned this repo, run the following command to install dependencies:

```bash
npm install
```

## Usage

To run the app, you can just issue the following command from the repository root:

```bash
npm start
```

## Contributing

If you would like to make any changes or expand on the exercise, I welcome a pull request.

## License

[MIT](https://choosealicense.com/licenses/mit/)
