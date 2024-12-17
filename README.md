# AsyncStorage getItem returns undefined in React Native

This repository demonstrates a common issue encountered when using AsyncStorage in React Native:  `getItem` returning `undefined` even though data has been previously stored.  The problem arises from the asynchronous nature of `getItem` and the need for proper handling of Promises. 

## Problem
The provided `AsyncStorageBug.js` file shows an example where data is stored using `setItem`, then immediately retrieved with `getItem`.  Because `getItem` is asynchronous, the retrieval isn't complete when the subsequent code tries to use the value, resulting in `undefined`. 

## Solution
The `AsyncStorageBugSolution.js` file presents the corrected approach. It uses `.then()` to handle the Promise returned by `getItem`, ensuring the data is accessed only after the asynchronous operation has completed.  This ensures that the data is available before being used.