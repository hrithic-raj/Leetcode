function smallestMultiple(n) {
    return n % 2 === 0 ? n : n * 2;
  }
  
  // Example
  console.log(smallestMultiple(5)); // 10
  console.log(smallestMultiple(6)); // 6