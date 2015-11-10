/**
 * @fileoverview Prevent require('lodash') in order to encourage things like require('lodash/collection/map').
 * @author Aaron Jensen
 * @copyright 2015 Aaron Jensen. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../lib/rules/no-require-lodash"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-require-lodash", rule, {

  valid: [
    "require('lodash/colleciton/map')"
  ],

  invalid: [
    {
      code: "require('lodash');",
      errors: [{
        message: "Only require specific lodash modules that you need.",
        type: "CallExpression"
      }]
    }
  ]
});
