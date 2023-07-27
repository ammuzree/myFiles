function childFunction() {
    console.log("This is the child function.");
  }
  
  function parentFunction() {
    console.log("This is the parent function.");
    
    // Call the child function within the parent function
    childFunction();
    
    console.log("Parent function execution completed.");
  }
  
  // Call the parent function
  parentFunction();
  