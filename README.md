# stylelint-variable-less-sscce
 An [SSCCE](http://www.sscce.org/) of less variable declarations triggering variable use plugin, 

## To run
 - `npm install`
 - `npm test`
 
## Expected result
 No warnings
 
## Actual result
 Warning on [line 2](styles.less#L2), the declaration of the `@color--text` variable
