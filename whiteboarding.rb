# Most used word function
words = ["the", "quick", "brown", "fox", "jumped", "over", "the", "brown", "dog", "who", "loves", "the", "monkey"]

def most_used_word(array)
  repeats = {}
  index = 0
  while index < array.length
    if repeats[array[index]] == nil
      repeats[array[index]] = 0
    end
    repeats[array[index]] += 1
    index += 1
  end
  return repeats.sort_by { |_key, value| value }.reverse[0][0]
end

p most_used_word(words)

# All combos with a sum of 5
numbers = [1, 2, 3, 4]

def combos_equal_to_five(array)
  combos = {}
  index1 = 0
  index2 = 1

  while index1 < array.length
    while index2 < array.length
      if array[index1] != array[index2] && array[index1] + array[index2] == 5
        combos[array[index1]] = array[index2]
      end
      index2 += 1
    end
    index1 += 1
    index2 = 0
  end
  return combos.sort_by { |_key, value| value }.reverse
end

p combos_equal_to_five(numbers)

# Computing raw height data into feet and inches
def height_to_feet_and_inches(number)
  height = number / 12.0
  feet = height.floor
  inches = number.remainder(12)

  if inches == 0
    return { height: { feet: feet } }
  else
    return { height: { feet: feet, inches: inches } }
  end
end

p height_to_feet_and_inches(76)
