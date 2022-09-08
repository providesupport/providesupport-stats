Currently, API(library) works via callbacks. It has no support for promises. Promises are modern JavaScript for last several years.
Do we need to add promises in API?
Library minimized version weights 30kb.
Polyfill for promises weigths 70kb.
As was noted on the meeting, we might create two version of API - with callbacks and with promises