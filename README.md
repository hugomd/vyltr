# Vyltr &mdash; Vultr API Wrapper 🍬
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo) [![Build Status](https://travis-ci.org/hugomd/vyltr.svg?branch=master)](https://travis-ci.org/hugomd/vyltr)

An API wrapper for the [Vultr API](https://www.vultr.com/api/).


**Note: this is a work in progress.**

# Usage
[Documentation is available here](https://vyltr-docs.now.sh/classes/Vultr.html).

# Example
```javascript
const Vultr = require('vyltr');

// Pass API Token as parameter.
const v = new Vultr('VULTR_API_TOKEN');

const list = async () => {
  try {
    // List available Vultr plans
    const list = await v.plan.list();

    // Returns an array of PlanModel objects
    console.log(list);
  } catch (err) {
    console.log(err);
  }
}

list();
```

Outputs:

```javascript
[ PlanModel {
    VPSPLANID: '87',
    name: '512 MB RAM,125 GB SATA,1.00 TB BW',
    vcpu_count: '1',
    ram: '512',
    disk: '125',
    bandwidth: '1.00',
    price_per_month: '5.00',
    windows: false,
    plan_type: 'SATA',
    available_locations: [ 1, 5, 7 ] },
  PlanModel {
    VPSPLANID: '88',
    name: '1024 MB RAM,250 GB SATA,2.00 TB BW',
    vcpu_count: '1',
    ram: '1024',
    disk: '250',
    bandwidth: '2.00',
    price_per_month: '10.00',
    windows: false,
    plan_type: 'SATA',
    available_locations: [ 1 ] },
  PlanModel {
    VPSPLANID: '89',
    name: '2048 MB RAM,500 GB SATA,3.00 TB BW',
    vcpu_count: '1',
    ram: '2048',
    disk: '500',
    bandwidth: '3.00',
    price_per_month: '20.00',
    windows: false,
    plan_type: 'SATA',
    available_locations: [ 1 ] },

    ...
]
```

# Progress
* [ ] server
  * [x] list
  * [ ] reboot
  * [ ] start
  * [ ] stop
  * [ ] create
* [ ] block storage
  * [ ] list
  * [ ] attach
  * [ ] create
  * [ ] delete
  * [ ] detach
  * [ ] set label
  * [ ] resize
* [ ] regions
  * [x] list all
  * [ ] list available
* [ ] dns
  * [ ] list records
  * [ ] create domain
  * [ ] delete domain
  * [ ] create record
  * [ ] update record
  * [ ] delete record
* [x] operating systems
  * [x] list
* [x] plans
  * [x] list

# Contributing
1. Clone the repo
2. Make a new local branch
3. Change what you'd like
4. Write some tests
5. Make a Pull Request!

✌️
