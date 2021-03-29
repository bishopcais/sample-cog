# sample-cog

A simple repository that's meant to act as a demo of the functionality of the [cog-server](https://github.com/bishopcais/cog-server) and
[cog-cli](https://github.com/bishopcais/cog-cli) components.

## Installation

```bash
npm install
```

## Usage

```bash
cog load cog.json
```

## Adding Console Outputs

In your browser, go to `http://localhost:11223/log/{level}` where `{level}` is an integer between 0 - 3. This will print a colored
message to the console of different log levels (error, warn, info, debug).

## Signal Handling

The sample-cog contains code to demonstrate the signal handling of the three types cog-server surfaces (`SIGUSR1`, `SIGUSR2`, and `SIGHUP`)
where all three will print out a message to the console, and the final one will cause the cog to stop.
