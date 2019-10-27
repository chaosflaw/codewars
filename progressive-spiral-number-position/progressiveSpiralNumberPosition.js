function layers(n) {
  // Current layer; this will be returned as the answer
  let layer = 1
  // Current dimension of the square's side
  let side = 1
  // Current total capacity
  let capacity = 1

  while(n > capacity) {
    // Increase the number of slots in the next layer by expanding each side and adding 4 corner slots
    capacity += side * 4 + 4
    // Only the two immediately adjacent corners factor into the side's increase
    side += 2

    layer++
  }

  return layer 
}
