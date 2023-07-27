## Overview
This is high-level API(_here and further - newAPI_) for regular statistics API (_here and further - oldAPI_). The oldAPI contains lots of technical and unnecessary information. It's hard to client to retrieve data without parsing.  

All requests are made via JSONP([read about JSONP before proceed](https://javascript.info/fetch-crossorigin#using-scripts)). This method was chosen for absence hassle with CORS and outdated browsers compatibility.  
JSONP callback assigns response to property of object 'rawResponses' which is the property of newAPI instance. On a 'script' tag we set 'onload' handler which parses response, and runs callback with parsed response as its first argument. After parsing respone the script tag and global variable(JSONP callback) are deleted.  
Also asynchronous multiple API calls are possible because each request has unique id(hash) that is a part of the global variable name and is key of rawResponses.

## Methods
Most methods (apart from getTimePeriod and setTimePeriod) accept 'cb' (callback) and 'tp' (timePeriod) argument. Some of them also accept 'lvl' argument.  
'getOperatorsAwayTime' accepts simplified level(no 'account' value)  
'getCustomMetrics' accepts arrayOfMetrics.  
More about methods you can read in 'docs_for_users.md' file.

## Arguments descriptions  
* **"callback" (required) - callback function with one parameter - requested data**  
* **"level" (required) - can be:**  
  1. __string('operators' || 'departments' || 'account') to get data by operators, by departments or by account__
  2. __object with 1 or 2 keys (operators, departments) and array values(['operator/departmentName', 'operator/departmentName']) or string value(in case if only one operator/department is needed)__
* **"timePeriod" (optional) - object with 3 properties: duration, startDate, and endDate**  

## Internal functions
* **_retrieveDataByMetrics** - wrapper-function that does all job by calling rest of functions. Validate callback; generate unique six-figure hash; build request URL; create script(make request); record response; *in case of error - return error; in case of empty response - return 'no statistics for ...' message*;parse response; run user's callback with response; delete script and global variable.  
* **parseRawResponse** - partially parses response; validate some options; call opts.customParser, if any; filter retrieved metrics and call appropriate func-parser for each one, run opts.postParser; filter through 'lvl' argument, if present.  
* **parseCounterMetric and parseMultipleCountersMetric** - parse counter metric and multiple-counters metric respectively.  
* **parseStructureMetric and parseMultipleStructuresMetric** - parse structure(value) metric and multiple-structures metric respectively. The former can optionally calculate reverse time(for 'getOfflineTime' method)  
* **parseSummaryData and parseSummaryDataWithLevel** - parse multiple metrics of different types and group them according to opts.metricsInfo. Calculate custom metrics, if any, set 'No stats ...' message for metrics that hasn't been retrieved in request. As you might have guessed, the last one is for methods with 'lvl' argument. These parsers are used only for 'get...Summary' methods.  
* **_processAccountSummaryData** - wrapper for opts.customParser of 'getAccountSummary' method. Method's response is too complicated for 'parseSummaryData' parser and that's why there is separate parser.  
* **filterThroughLevel** - filters response through 'lvl' argument. For example, user requests messages' counter for only one OP(operator). There is no way to get the messages of one particular OP in oldAPI so newAPI requests messages for all operators but filter them and returns only target OP's messages. Also it sets 'No stats ...' message for requested OPs/departments, if the response doesn't contain data for them.  
* **addTimeStringsToResponse** - transform seconds into array with seconds itself and string time representation([7381, '2h 3m 1s']). Mainly used as opts.postParser  
* **calculateReverseTime** - used in 'parseStructureMetric' func for 'getOfflineTime' method as there is no metric to retrieve offline time.  
* **_buildURL** - makes URL for request in oldAPI. URL is built from metrics, hash and time period (passed in method call or default)  
* **_createJSONPhandler** - creates global variable (window object). Name consists of '\_psHandleStatsResponse\_' string and hash. This global variable is a function that just writes raw response from oldAPI to 'rawResponses' object by hash.  
* **calculateStringTime** - calculates string time representation('24d 1h 4m 4s' or '4y 6m 20d 4h 3m 8s')  
* **handleLevel** - validates 'level' argument and return appropriate metrics based on 'level' argument  
* **calculateCustomMetrics** - calculates custom metrics. At now is only rate(percentage representation - '34%'). Sets 'Not enough stats to calculate...' message when necessary.  
* **validateArgument** - accepts argument to validate and type. Type can be an array of allowed values or constant string. In the latter case for each constant there is function-validator. Throw type error if validation fails. **Used for validation of arguments passed by user**  
* **_validateTimePeriodArg** - handy wrapper to validate all timePeriod object properties(duration, startDate, endDate, the object itself).  
* **_makeJSONPrequest** - creates script tag, sets onload handler and append script to page DOM.  
* **_createDescriptor** - creates property's flags object. Used in Object.defineProperties(...) at the end of newAPI's code. Assigning descriptors encapsulates API functionality. So no one is able to change essential API's methods and properties.  
* **md5** - generates md5 hash. That's it.  
* **_isStr** - try to guess  