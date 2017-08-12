# FEED READER TESTER
![npm version 7.0.0 and above](https://img.shields.io/npm/v/@cycle/core.svg) ![Version Up-to-date](https://img.shields.io/versioneye/d/ruby/rails.svg)
## Introduction
This project uses the jasmine framework to test the functionality of the tester.

## Installation Instruction
* run command **npm-install**
* run command **gulp**
* the app will be hosted on [localhost:8000](http://localhost:8000)

## Frameworks and Libraries used
* Jasmine 2.1.2
* JQuery 2.1.1
* JSAPI

## Test Suits loaded (4)
* RSS Feeds
    * they are defined
    * URL defined and, the URL is not empty
    * Name defined and, the name is not empty
* The menu
    * Element is hidden by default
    * Is visible when the menu Icon is clicked
    * Hides when the menu Icon is clicked again
* Initial Entries
    * There is at least a single .entry element within the .feed container
* New Feed Selection
    * Ensure when a new feed is loaded by the loadFeed function that the content actually changes
